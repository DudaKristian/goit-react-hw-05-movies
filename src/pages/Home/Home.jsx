import styles from "./Home.module.css"
import { FetchTrending } from "../../servise/FETCH"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"


const Home = ({ movieId, path }) => {
    const [trending, setTrending] = useState([])
        
    useEffect(() => {
        FetchTrending(setTrending)
    }, [])

    const trendingList = () => {
        return trending.map(({ id, title, name }) => 
            <li key={id} >
                <Link
                    id={id}
                    to={`/movies/${id}`}
                    onClick={e => movieId(e.target.id)}>
                    {title || name}
                </Link>
            </li>)
    }   

    return (
        <div className={styles.home}>
            <h1>Trending today</h1>
            <ul>
                {trendingList()}
            </ul>
            
        </div>

    )
}

export default Home

