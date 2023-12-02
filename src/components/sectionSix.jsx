import tshirt from '../assets/images/tshirt.png';
import suite from '../assets/images/suite.png';
import coat from '../assets/images/coat.png';
import mensWallet from '../assets/images/mensWallet.png';
import bag from '../assets/images/bag.png';
import trousers from '../assets/images/trousers.png';
import jug from '../assets/images/jug.png';
import pot from '../assets/images/pot.png';
import headsets from '../assets/images/whiteheadPhones.png';
import { Link } from 'react-router-dom';


const SectionSix = () => {

    const items = [
        {
            image: tshirt,
            price: '$10.30',
            text: 'T-shirts with multiple colors, for men'
        },
        {
            image: suite,
            price: '$10.30',
            text: 'Jeans shorts for men'
        },
        {
            image: coat,
            price: '$12.50',
            text: 'Brown winter coat'
        },
        {
            image: mensWallet,
            price: '$30.00',
            text: 'Jeans bag for travel for men'
        },
        {
            image: bag,
            price: '$99.0',
            text: 'Leather wallet'
        },
        {
            image: trousers,
            price: '$9.99',
            text: 'Canon camera black, 100x zoom'
        },
        {
            image: headsets,
            price: '$8.99',
            text: 'Headset for gaming with mic'
        },
        {
            image: bag,
            price: '$10.30',
            text: 'Smartwatch silver color modern'

        },
        {
            image: pot,
            price: '$10.5',
            text: 'Blue wallet for men leather metarfial'
        },
        {
            image: jug,
            price: '$80.95',
            text: 'Jeans bag for travel for men'
        }
    ]

    return (
        <div className="sectionSix">
            <h3>Recommended items</h3>
            <ul>
                {items.map((item, index) => (
                    <Link to="/productDetails">
                        <li key={index} className="cartItems" >
                            <div className='imgcontainer'>
                                <img src={item.image} alt="images" />
                            </div>
                            <h4>{item.price}</h4>
                            <p>{item.text}</p>
                        </li>
                    </Link>
                ))}

            </ul>


        </div>
    )
}
export default SectionSix;