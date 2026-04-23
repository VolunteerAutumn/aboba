import { Link } from "react-router-dom"

function Navbar() {
    return (
        <nav className="navbar">

            <h2 className="logo">StreamBox</h2>

            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/favorites">Favorites</Link>
            </div>

        </nav>
    )
}

export default Navbar