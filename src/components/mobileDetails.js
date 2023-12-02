import ListItem from "./listItems";
import ProductCart from "./productCart";
import Navbar from "./navbar";
import Navbar2 from "./navBar2";
import arrow from '../assets/images/arrow.png'
import Seven from "./sectionSeven";
import Footer from "./footer";
import FooterSection from "./footerSection";
import listview from '../assets/images/listview.png';
import gridview from '../assets/images/gridview.png';
import { Link } from 'react-router-dom';
import FilterSection from "./filterSection";

const MobDetails = () => {
    const nav = [
        {
            text: 'Home',
            image: arrow
        },
        {
            text: 'Clothing',
            image: arrow

        },
        {
            text: 'Mens Wear',
            image: arrow
        },
        {
            text: 'Summer Clothing',
            image: arrow
        }
    ]
    return (
        <div className="mobDetails">
            <Navbar />
            <Navbar2 />
            <div className="navbar3">
                {nav?.map((item) => (
                    <>
                        <p>{item?.text}</p>
                        <img src={item?.image} alt="arrow" />
                    </>
                ))}

            </div>
            <div className="middle">
                <ListItem />
                <div className="column-flex">

                    <div className="navbar4">
                        <div>
                            <p>12,911 items in <b>Mobile accessory</b></p>
                        </div>
                        <div className="flexss">
                            <p>
                                <input type="checkbox" />
                                verified
                            </p>
                            <label htmlFor="feature">Featured
                                <select></select></label>
                            <div className='imgContainer'>
                                <Link to="/listview">
                                    <img src={listview} alt="listview" />
                                </Link>
                                <Link to="/gridview">
                                    <img src={gridview} alt="gridview" />
                                </Link>
                            </div>
                        </div>

                    </div>
                    <FilterSection />
                    <ProductCart />
                </div>
            </div>
            <Seven />
            <Footer />
            <FooterSection />
        </div>
    )
}
export default MobDetails;