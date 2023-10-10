import { MoviesController } from './controllers/MoviesController'
import { MoviesRepository } from './repositories/MoviesRepository'
import { MovieService } from './services/MovieService'

const repository = new MoviesRepository()
const service = new MovieService(repository)

export const movieController = new MoviesController(service)
