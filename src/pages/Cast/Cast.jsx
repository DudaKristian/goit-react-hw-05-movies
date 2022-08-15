import { useState, useEffect } from "react";
import { useOutletContext, Navigate } from "react-router-dom"
import { FetchCredits } from "../../servise/FETCH"
import placeholder from "../../images/placeholder.jpg"

const Cast = () => {
    const movieId = useOutletContext();

    const [result, setResult] = useState([])

    useEffect(() => {
        FetchCredits(movieId, setResult)
    }, [movieId])
    
    if (!result) { return }
    if (result.success === false) {
        return <Navigate to="*" replace />;
    }

    return (
        <div>
            <ul>
                {result.map(({ id, profile_path, name, character }) => (
            <li key={id}>
                <img
                    src={profile_path ? (`https://image.tmdb.org/t/p/w500${profile_path}`) : (placeholder)}
                    alt={`${name} poster`}
                    width="200"
                /> 
                    <br />
                <span>{name}</span>
                <br />
                <span>Character: {character}</span>
            </li> ))}
            </ul>
        </div>
    )
}

export default Cast