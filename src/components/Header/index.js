import './style.css'
import { Link } from 'react-router-dom'
function Header () {
    return(
        <div className='nav-bar'>
            <ul>
                <li><Link className='link' to="/">Home</Link></li>
                <li><Link className='link' to="/favoritos">Favoritos</Link></li>
            </ul>
        </div>
    )
}

export default Header