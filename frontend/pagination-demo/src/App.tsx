import './App.css'
import { MovieComponent } from './components/MovieComponent'
import { PaginationComponent } from './components/PaginationComponent'
import { useMoviesPaginated } from './hooks/useMoviesPaginated'

function App() {
  
  const {
    movieList,
    currentPage,
    changePage
  } = useMoviesPaginated()

  return (
    <>
      <h1>API Pagination demo</h1>
      <main className="movie_list">
        {
          movieList.map(movie => {
            return <MovieComponent 
              key={movie.title.replace(/\s/g, '')}
              href={movie.href}
              title={movie.title}
              year={movie.year}
              extract={movie.extract}
              genres={[]}
              thumbnail={movie.thumbnail}
              thumbnail_height={movie.thumbnail_height}
              thumbnail_width={movie.thumbnail_width}
            />  
          })
        }
      </main>
      <footer>
        <PaginationComponent 
          currentPage={currentPage}
          totalPages={6}
          changeCurrentPage={changePage}
        />
      </footer>
    </>
  )
}

export default App
