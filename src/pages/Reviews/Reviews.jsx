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

    const style = {
        listStyle: "none"
    }

    return (
        <div>
                {
                result.length !== 0 ? ( 
                    <ul>
                        {result.map(({ id, content }) => (
                            <li key={id} style={style}>
                                <p>{content}</p>
                            </li>
                        ))}
                    </ul>
                    ) : (
                        <p>We don't have any reviews for this movie</p>
                    )                    
                }
        </div>
    )
}

export default Reviews

