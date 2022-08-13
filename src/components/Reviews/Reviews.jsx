import { useState, useEffect } from "react";
import { useOutletContext, Navigate } from "react-router-dom"
import { FetchRewiews } from "../../servise/FETCH"

const Reviews = () => {
    
    const movieId = useOutletContext();

    const [result, setResult] = useState([])

    useEffect(() => {
        FetchRewiews(movieId, setResult)
    }, [movieId])
    
    if (!result) { return }
    if (result.success === false) {
        return <Navigate to="*" replace />;
    }

    return (
        <div>
            <ul>
                {
                    result.length !== 0 ? ( 
                    result.map(({ id, content }) => (
                    <li key={id}>
                        <p>{content }</p>
                        </li>))
                    ) : (
                        <p>We don't have any reviews for this movie</p>
                    )                    
                }
            </ul>
        </div>
    )
}

export default Reviews

