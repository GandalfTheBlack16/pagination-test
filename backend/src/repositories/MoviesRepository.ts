import { type Movie } from '../models/Movie'
import movieList from './datasets/movies.json'

export class MoviesRepository {
  getMovieList (): Movie[] {
    return movieList.filter((movie: Movie) => movie.extract != null && movie.thumbnail != null && movie.genres.length > 0)
  }
}
