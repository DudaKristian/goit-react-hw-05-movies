import {Link} from "react-router-dom"
import errorImg from "../../images/errorImg.jpg"


const NotFound = () => {
    return (
        <div>
        <Link to="/">Go Back</Link> <br />
        <img src={errorImg} alt="Not Found" />
        </div>
    )
}

export default NotFound

