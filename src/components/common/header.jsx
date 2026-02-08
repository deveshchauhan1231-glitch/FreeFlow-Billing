import {Link} from "react-router-dom";
import "../../styles/header.css";
function header()
{
    return(
        <>
        <nav className="navbar">
            <ul>
                <Link to ="/"><li>Home 🏠︎</li></Link>
                <Link to="/estimate"><li>Estimates 🧾</li></Link>
                <Link to="/bill"><li>Bills 🧾</li></Link>
                <Link to="/invoice"><li>Invoice 🧾</li></Link>
            </ul>
            
        </nav>
        </>
    )
}

export default header;