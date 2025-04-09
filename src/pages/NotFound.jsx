import { Link } from "react-router-dom"

const NotFound = () => {
    return (
        <div>not found page
            please return to home page
            <Link to='/'>Home</Link>
        </div>
    )
}

export default NotFound