import { Movie } from "../types";

export function MovieComponent (props: Movie){

    const { title, year, extract, thumbnail, thumbnail_width: img_width, thumbnail_height: img_heigth } = props

    return (
        <article className="movie_article">
            <h2>{title}</h2>
            <span style={{fontStyle: 'italic'}}>{year}</span>
            <p>{extract.slice(0, 100)}...</p>
            <img 
                src={thumbnail}
                width={img_width}
                height={img_heigth}
                alt={`${title.replace(/\s/g, '')}_thumbnail`} />
        </article>
    )
}