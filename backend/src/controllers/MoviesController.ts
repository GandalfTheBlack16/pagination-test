import { type Response, type Request } from 'express'
import { type MovieService } from '../services/MovieService'
import { InvalidQueryParamException } from '../models/exceptions/InvalidQueryParamException'

export class MoviesController {
  constructor (
    private readonly movieService: MovieService
  ) {}

  run (req: Request, res: Response): Response<any, Record<string, any>> | undefined {
    try {
      const { p } = req.query
      if (p == null) {
        return res.json({
          status: 'ok',
          data: this.movieService.fetchAllMovies()
        })
      }
      const page = parseInt(p as string)
      if (Number.isNaN(page)) {
        throw new InvalidQueryParamException('p', p as string)
      }
      const data = this.movieService.fetchMoviesPage(page)
      const host = `${req.protocol}://${req.get('host')}`
      const nextPageUrl = data.nextPage != null ? `${host}${req.url.replace(/.$/, String(data.nextPage))}` : undefined
      const prevPageUrl = data.prevPage != null ? `${host}${req.url.replace(/.$/, String(data.prevPage))}` : undefined
      res.json({
        status: 'ok',
        data: {
          nextPage: nextPageUrl,
          prevPage: prevPageUrl,
          movieList: data.movieList
        }
      })
    } catch (error) {
      if (error instanceof InvalidQueryParamException) {
        return res.status(400).json({
          status: 'InvalidQueryParamException',
          message: error.message
        })
      }
      res.status(500).json({
        status: 'Internal Server error',
        message: 'An error has ocurred. Please, try it later'
      })
    }
  }
}
