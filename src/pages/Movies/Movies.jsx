import { useState, useEffect } from "react"
import {FetchSearch} from '../../servise/FETCH'
import { useSearchParams, Link, useLocation } from "react-router-dom";
import picture from "../../images/errorImg.jpg"

const Movies = () => {

    const [searchParams, setSearchParams] = useSearchParams();

    const query = searchParams.get('query')

    const [request, setRequest] = useState(query??"");
    const [result, setResult] = useState([]);
    const [status, setStatus] = useState("resolved")
    
    const location = useLocation();

    useEffect(() => {
        if (query) {
            setRequest(query)
            FetchSearch(query, setResult)
        }
        setStatus("resolved")
    }, [query])

    const handleSubmit = e => {
        e.preventDefault()
        
        if (request.length === 0) {
            alert("input request")
            return
        }

        FetchSearch(request, setResult)
        setStatus("resolved")
        setSearchParams(`query=${request}`)

        if (result.length === 0) {
            setStatus("error")
            return
        }
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    onChange={e => setRequest(e.target.value.toLocaleLowerCase())}
                    type="text"
                    width="300"
                    value={request} /> 
                <button type="submit">Search</button>
            </form>

            <ul>
                {result.map(({ id, title, name }) => 
            <li key={id}>
                <Link
                    to={`/movies/${id}`}
                            id={id}
                            state={{from: location}}
                >
                    {title || name}
                </Link>
            </li>
        ) }
            </ul>

            {status === "error" && <img src={picture} alt="error" />}
            
        </div>
    )
}

export default Movies

