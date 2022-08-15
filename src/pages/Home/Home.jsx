import styles from "./Home.module.css"
import { FetchTrending } from "../../servise/FETCH"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"


const Home = () => {
    const [trending, setTrending] = useState([])
        
    useEffect(() => {
        FetchTrending(setTrending)
    }, [])

    return (
        <div className={styles.home}>
            <h1>Trending today</h1>
            <ul>
                {trending.map(({ id, title, name }) => 
            <li key={id} >
                <Link
                    id={id}
                    to={`/movies/${id}`}>
                    {title || name}
                </Link>
            </li>)}
            </ul>
            
        </div>

    )
}

export default Home

