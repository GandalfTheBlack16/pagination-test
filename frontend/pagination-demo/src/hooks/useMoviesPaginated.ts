import { useEffect, useState } from "react"
import { Movie, MovieServiceResponse } from "../types"

export function useMoviesPaginated() {
    const [movieList, setMovieList] = useState<Movie[]>([])
    const [currentPage, setCurrentPage] = useState<number>(0)
    
    useEffect(() => {
      fetch(`http://localhost:3000/api/movies?p=${currentPage}`)
      .then(response => {
        return response.json()
      })
      .then((data: MovieServiceResponse) => {
        if (data.status === 'ok'){
          setMovieList(data.data.movieList)
        }
      })
    }, [currentPage])

    const changePage = (page: number) => {
        setCurrentPage(page-1)
    }

    return {
        movieList,
        currentPage,
        changePage
    }
}