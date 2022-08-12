import { useState, useEffect } from "react"
import {FetchSearch} from '../../../servise/FETCH'
import { useSearchParams, Link, } from "react-router-dom";
import picture from "../../../images/errorImg.jpg"

const Movies = ({movieId}) => {

    const [request, setRequest] = useState("");
    const [result, setResult] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const [status, setStatus] = useState("resolved")

    useEffect(() => {
        if (!request) {
        return 
        }
        if (result.length === 0) {
            setStatus("error")
            return
        }
        setSearchParams(`query=${request}`)
        setStatus("resolved")
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[result, searchParams, setSearchParams])

    const handleSubmit = e => {
        e.preventDefault()
        FetchSearch(request, setResult)
    }

    const searchList = () => {
        return result.map(({ id, title, name }) => 
            <li key={id}>
                <Link
                    to={`/movies/${id}`}
                    id={id}
                    onClick={e => movieId(e.target.id)}
                >
                    {title || name}
                </Link>
            </li>
        ) 
        }

    const onInputChange = e => {
        const formatedRequest = e.target.value.toLowerCase()
        setRequest(formatedRequest)
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    onChange={onInputChange}
                    type="text"
                    width="300"
                    value={request} /> 
                <button type="submit">Search</button>
            </form>

            <ul>
                {searchList()}
            </ul>

            {status === "error" && <img src={picture} alt="error" />}
            
        </div>
    )
}

export default Movies