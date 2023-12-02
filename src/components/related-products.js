import wallet from '../assets/images/mensWallet.png';
import watch from '../assets/images/watch.png';
import headphones from '../assets/images/whiteheadPhones.png';
import trouser from '../assets/images/trousers.png';
import jug from '../assets/images/jug.png';
import mensWallet from '../assets/images/wallet.png';

const RelatedProducts = () => {
    const products = [
        {
            image: wallet,
            text: 'Xiaomi Redmi 8 Original ',
            price: '$32.00-$40.00'
        },
        {
            image: watch,
            text: 'Xiaomi Redmi 8 Original ',
            price: '$32.00-$40.00'
        },
        {
            image: headphones,
            text: 'Xiaomi Redmi 8 Original ',
            price: '$32.00-$40.00'
        },
        {
            image: trouser,
            text: 'Xiaomi Redmi 8 Original ',
            price: '$32.00-$40.00'
        },
        {
            image: jug,
            text: 'Xiaomi Redmi 8 Original ',
            price: '$32.00-$40.00'
        },
        {
            image: mensWallet,
            text: 'Xiaomi Redmi 8 Original ',
            price: '$32.00-$40.00'
        }
    ]
    return (
        <div className="related-products">
            <ul>
                {products.map((item) => (
                    <li>
                        <div className='img-container'>
                            <img src={item.image} alt="images" />
                        </div>
                        <h4>{item.text}</h4>
                        <p>{item.price}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default RelatedProducts;