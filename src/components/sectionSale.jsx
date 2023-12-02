import watch from '../assets/images/watch.png';
import laptop from '../assets/images/laptop.png';
import camera from '../assets/images/camera.png';
import headset from '../assets/images/headset.png';
import mobile from '../assets/images/mobile.png';
import { Link } from 'react-router-dom';

const SectionSale = () => {
    const deals = [
        {
            image: watch,
            text: 'Smart Watches',
            btext: '-25%'

        },
        {
            image: laptop,
            text: 'Laptops',
            btext: '-15%'
        },
        {
            image: camera,
            text: 'GoPro cameras',
            btext: '-40%'
        },
        {
            image: headset,
            text: 'HeadPhones',
            btext: '-25%'
        },
        {
            image: mobile,
            text: 'Canon cameras',
            btext: '-25%'
        }

    ]


    return (
        <ul className="sectionSale">
             <div className="count">
            <div className="countdown">
                <h2>Deals and Offers</h2>
                <p>Hygiene equipments</p>
            </div>
            <div className="countdowns">
                <ul className="timer">
                    <li>04</li>
                    <li>Days</li>
                </ul>
                <ul className="timer">
                    <li>13</li>
                    <li>Hour</li>
                </ul>
                <ul className="timer">
                    <li>34</li>
                    <li>Min</li>
                </ul>
                <ul className="timer">
                    <li>56</li>
                    <li>Sec</li>
                </ul>
            </div>
        </div>
            <div className="items">
            <ul>
                {deals.map((item) => (
                    <li className='deals-items' >
                        <div className='imgcontainer'>
                            <Link to="/mobdetails">
                                <img src={item.image} alt="items" />
                            </Link>
                        </div>
                        <p>{item.text}</p>
                        <button>{item.btext}</button>
                    </li>
                ))}

            </ul>

        </div>
        </ul>
    )
}
export default SectionSale;
