import { Link } from "react-router-dom"
import styles from "./aditionalInformation.module.css"

const AditionalInformation = ({ location }) => {
    
    
    return (
        <div className={styles.adInfo}>
            <h2>Adirional Information</h2>
            <ul className={styles.adInfo__list}>
                <li><Link to="cast" state={{from: location}}>Cast</Link></li>
                <li><Link to="reviews" state={{from: location}}>Reviews</Link></li>
            </ul>
            
        </div>
    )
    
}

export default AditionalInformation