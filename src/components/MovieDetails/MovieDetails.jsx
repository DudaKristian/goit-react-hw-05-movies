import { useEffect, useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { FetchDetails } from "../../servise/FETCH"
import styles from "./movieDetails.module.css"

const MovieDetails = () => {
    const { movieId } = useParams();
    const [result, setResult] = useState("");

    console.log(result)
    
    useEffect(() => {
    FetchDetails(movieId, setResult)
    }, [movieId])

    if (!result) { return }
    if (result.success === false) {
        return <Navigate to="*" replace />;
    }
    
    const { poster_path,
        original_title,
        release_date,
        vote_average,
        overview,
        genres
    } = result;
    
    const releaseYear = release_date.slice(0, 4)

    return (
        <div>
            <Link to="/">Go Back</Link>  <br />
            <div className={styles.wrapper}>
                <img src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                alt={`ddd poster`}
                height="400"  />
                <div>
                    <h1>{original_title}({releaseYear})</h1>
                    <span>User Score: {Math.round(vote_average * 10)}%</span>
                    <h2>Overview</h2>
                    <p>{overview}</p>
                    <h2>Genres</h2>
                    <ul>
                        {genres.map(genre => (
                            <li key={genre.id}>
                                <span>{genre.name}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default MovieDetails