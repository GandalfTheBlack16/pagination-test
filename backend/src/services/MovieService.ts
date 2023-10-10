import { type Movie, type MoviesPaginated } from '../models/Movie'
import { type MoviesRepository } from '../repositories/MoviesRepository'

export class MovieService {
  private readonly PAGE_LENGTH = 10

  constructor (
    private readonly movieRepository: MoviesRepository
  ) {}

  fetchAllMovies (): Movie[] {
    return this.movieRepository.getMovieList()
  }

  fetchMoviesPage (page: number): MoviesPaginated {
    const movieList = this.movieRepository.getMovieList()
    const initialIndex = page * this.PAGE_LENGTH
    return {
      currentPage: page,
      prevPage: page === 0 ? null : page - 1,
      nextPage: this.hashNextPage(page, movieList.length) ? page + 1 : null,
      movieList: movieList.slice(initialIndex, initialIndex + this.PAGE_LENGTH)
    }
  }

  private hashNextPage (page: number, length: number): boolean {
    return page * this.PAGE_LENGTH < length - 10
  }
}
