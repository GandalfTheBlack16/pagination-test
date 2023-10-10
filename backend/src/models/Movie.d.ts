export interface Movie {
  title: string
  year: number
  cast: string[]
  genres: string[]
  href?: null | string
  extract?: string
  thumbnail?: string
  thumbnail_width?: number
  thumbnail_height?: number
}

export interface MoviesPaginated {
  currentPage: number
  prevPage: number | null
  nextPage: number | null
  movieList: Movie[]
}
