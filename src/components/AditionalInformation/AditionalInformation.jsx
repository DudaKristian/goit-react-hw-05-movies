import { Link } from "react-router-dom"
import styles from "./aditionalInformation.module.css"

const AditionalInformation = () => {
    return (
        <div className={styles.adInfo}>
            <h2>Adirional Information</h2>
            <ul className={styles.adInfo__list}>
                <li><Link to="cast">Cast</Link></li>
                <li><Link to="reviews">Reviews</Link></li>
            </ul>
            
        </div>
    )
}

export default AditionalInformation