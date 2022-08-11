import styles from "./Home.module.css"
import { FetchTrending } from "../../../servise/FETCH"
import { useEffect, useState } from "react"


const Home = () => {
    const [trending, setTrending] = useState([])
        
    useEffect(() => {
    FetchTrending(setTrending)
    }, [])

    const trendingList = () => {
            return trending.map(({ id, title, name }) => 
                <li key={id}><span>{title || name}</span></li>)
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