import { Link } from "react-router-dom"
import { FaHome, FaInfoCircle, FaBook } from "react-icons/fa"
function Header() {
    return (
        <div style={{ width: "100%", borderBottom: "2px solid white" }}>
            <div style={{ display: "flex", gap: "8rem" }}>
                <Link to='/' className="navLink" style={{ display: "flex", gap: "3px", alignItems: "center", textDecoration: "none", color: "brown" }}><FaHome />Home</Link>
                <Link to='/about' style={{ display: "flex", alignItems: "center", gap: "3px", textDecoration: "none", color: "purple" }}><FaInfoCircle /> About</Link>
                <Link to='/blogs' style={{ display: "flex", alignItems: "center", gap: "3px", textDecoration: "none", color: "green" }}><FaBook /> Blogs</Link>
            </div>
            <hr />
        </div>
    )
}

export default Header