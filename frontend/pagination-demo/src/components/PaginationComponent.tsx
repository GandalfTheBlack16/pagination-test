import { PaginationProps } from "../types";

export function PaginationComponent({ currentPage, totalPages, changeCurrentPage }: PaginationProps) {
    
    const NUMBERS = ['1', '2', '3', '4', '5', '6', '7', '8', '9']

    const handlePageClick = (event) => {
        if (parseInt(event.target.innerText) !== currentPage) {
            changeCurrentPage(parseInt(event.target.innerText))
        }
    }

    return (
        <section className="paginator">
            {
                NUMBERS.map((num, i) => {
                    if (i < totalPages) {
                        return <button
                            key={num}
                            className={i === currentPage ? 'page_selected': ''}
                            onClick={handlePageClick}
                        >{num}</button>
                    }
                })
            }
        </section>
    )
}