import { useParams } from "react-router-dom";

const MovieDetails = () => {
    const {movieId} = useParams();
    
    return (
        <div>Hello Wold {movieId}</div>
    )
}

export default MovieDetails