import logo from '../assets/images/logo-colored.png';
import Button from './button';
import SearchBar from './searchBar';
import profile from '../assets/images/profile.png';
import msg from '../assets/images/msg.png';
import orders from '../assets/images/wish.png';
import cart from '../assets/images/cart.png';
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="navContainer">
            <img src={logo} alt='logo' className="logo" />
            <div className='search-items'>
                <SearchBar />
                <div className='input'>
                    <div className="dropdown">
                        <label htmlFor="all">All category</label>
                        <select name="type">
                            <option ></option>
                        </select>
                    </div>
                    <Button className="searchbutton">Search</Button>
                </div>
            </div>
            <div className="navActions">
                <ul className="img_container">
                    <li>
                        <img src={profile} alt="profile" />
                        <p>Profile</p>
                    </li>
                    <li>
                        <img src={msg} alt="msg" />
                        <p>Message</p>
                    </li>
                    <li>
                        <img src={orders} alt="orders" />
                        <p>Orders</p>
                    </li>
                    <Link to="/myCart">
                        <li>
                            <img src={cart} alt="carts" />
                            <p>My Cart</p>
                        </li>
                    </Link>
                </ul>
            </div>
        </div>
    )
}
export default Navbar;