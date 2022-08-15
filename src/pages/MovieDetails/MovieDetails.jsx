import Loader from "components/Loader/Loader";
import { useEffect, useState, Suspense, lazy} from "react";
import { useParams, Navigate, Outlet, useLocation, Link } from "react-router-dom";
import { FetchDetails } from "../../servise/FETCH"
import styles from "./movieDetails.module.css"


const AditionalInformation = lazy(() => import("components/AditionalInformation/AditionalInformation"))

const MovieDetails = () => {
    const { movieId } = useParams();
    const [result, setResult] = useState("");

    const location = useLocation();
    
    const goBackLink = location.state?.from ?? "/";

    console.log(goBackLink)

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
    
    const releaseYear = release_date.slice(0, 4);

    return (
        <div>
            
            <Link to={goBackLink}>Go Back</Link>
            
            <br />
            
            <div className={styles.wrapper}>
                <img src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                alt={`ddd poster`}
                height="400"  />
                <div className={styles.info}>
                    <h1>{original_title}({releaseYear})</h1>
                    <span>User Score: {Math.round(vote_average * 10)}%</span>
                    <h2>Overview</h2>
                    <p>{overview}</p>
                    <h2>Genres</h2>
                    <ul className={styles.genres}>
                        {genres.map(genre => (
                            <li key={genre.id}
                            className={styles.genres__item}>
                                <span>{genre.name}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <AditionalInformation location={goBackLink} />

            <Suspense fallback={<Loader />} >
                <Outlet context={movieId} />   
            </Suspense>    
        </div>
    )
}

export default MovieDetails