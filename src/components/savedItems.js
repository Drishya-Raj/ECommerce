import mobile1 from '../assets/images/mobile.png';
import mobile2 from '../assets/images/mob1.png'
import laptop from '../assets/images/laptop.png';
import watch from '../assets/images/watch.png';
import cart from '../assets/images/shopping_cart.png';

const SavedItems = () => {
    const save = [
        {
            image: mobile1,
            price: '$99.50',
            text: 'GoPro HERO6 4K Action Camera - Black',
            button: 'Move to cart'
        },
        {
            image: mobile2,
            price: '$99.50',
            text: 'GoPro HERO6 4K Action Camera - Black',
            button: 'Move to cart'
        },
        {
            image: watch,
            price: '$99.50',
            text: 'GoPro HERO6 4K Action Camera - Black',
            button: 'Move to cart'
        },
        {
            image: laptop,
            price: '$99.50',
            text: 'GoPro HERO6 4K Action Camera - Black',
            button: 'Move to cart'
        }
    ]
 console.log(".............",save);
    return (
        <div className="savedItem">
            <ul>
                {save.map((item,index) => (
                    <li key={index}>
                        <div className='imgcontainer'>
                            <img src={item.image} alt="images" />
                        </div>
                        <div className='content'>
                            <h4>{item.price}</h4>
                            <p>{item.text}</p>
                            <button>
                                <img src={cart} alt="shopping" />{item.button}
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default SavedItems;