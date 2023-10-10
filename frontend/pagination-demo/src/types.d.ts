export interface MovieServiceResponse {
    data:   MoviePaginationData;
    status: string;
   }
   
export interface MoviePaginationData {
    movieList: Movie[];
    nextPage:  string;
}

export interface Movie {
    title:            string;
    year:             number;
    extract:          string;
    genres:           string[];
    thumbnail:        string;
    thumbnail_height: number;
    thumbnail_width:  number;
    href: string;
}

export interface PaginationProps {
    currentPage: number
    totalPages: number
    changeCurrentPage: (num: number) => void
}