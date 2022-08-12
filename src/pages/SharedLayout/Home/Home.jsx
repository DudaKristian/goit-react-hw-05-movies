import styles from "./Home.module.css"
import { FetchTrending } from "../../../servise/FETCH"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"


const Home = ({ movieId }) => {
    const [trending, setTrending] = useState([])
    // const [movieId, setMovieId] = useState("")
        
    useEffect(() => {
        FetchTrending(setTrending)
         
    }, [])

    

    const trendingList = () => {
            return trending.map(({ id, title, name }) => 
                <li key={id} >
                    <Link
                        id={id}
                        to={id}
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

// onClick = { e => movieId(e.target.id) }