import * as images from './images';

const ProductCart = () => {
    const cartItems = [
        {
            image: images?.smartphone,
            price1: '$99.50',
            oldprice: '$1128.00',
            star: images?.rating,
            numberRating: '7.5',
            text: 'GoPro HERO6 4K Action Camera - Black',
            wishlist: images?.fav
        },
        {
            image: images?.mob1,
            price1: '$99.50',
            oldprice: '$1128.00',
            star: images?.rating,
            numberRating: '7.5',
            text: 'GoPro HERO6 4K Action Camera - Black',
            wishlist: images?.fav
        },
        {
            image: images?.mob3,
            price1: '$99.50',
            star: images?.rating,
            numberRating: '7.5',
            text: 'GoPro HERO6 4K Action Camera - Black',
            wishlist: images?.fav
        },
        {
            image: images?.mobile,
            price1: '$99.50',
            oldprice: '$1128.00',
            star: images?.rating,
            numberRating: '7.5',
            text: 'GoPro HERO6 4K Action Camera - Black',
            wishlist: images?.fav

        },
        {
            image: images?.camera,
            price1: '$99.50',
            oldprice: '$1128.00',
            star: images?.rating,
            numberRating: '7.5',
            text: 'GoPro HERO6 4K Action Camera - Black',
            wishlist: images?.fav
        },
        {
            image: images?.mob1,
            price1: '$99.50',
            star: images?.rating,
            numberRating: '7.5',
            text: 'GoPro HERO6 4K Action Camera - Black',
            wishlist: images?.fav
        },
        {
            image: images?.laptop,
            price1: '$99.50',
            oldprice: '$1128.00',
            star: images?.rating,
            numberRating: '7.5',
            text: 'GoPro HERO6 4K Action Camera - Black',
            wishlist: images?.fav
        },
        {
            image: images?.watch,
            price1: '$99.50',
            oldprice: '$1128.00',
            star: images?.rating,
            numberRating: '7.5',
            text: 'GoPro HERO6 4K Action Camera - Black',
            wishlist: images?.fav
        },
        {
            image: images?.smartphone,
            price1: '$99.50',
            star: images?.rating,
            numberRating: '7.5',
            text: 'GoPro HERO6 4K Action Camera - Black',
            wishlist: images?.fav
        }

    ]
    return (
        <div className="productCart">
            <ul>
                {cartItems.map((item) => (
                    <li>
                        <div className="imagecontainer">
                            <img src={item.image} alt="images" />
                        </div>
                        <div className='text'>
                            <div className="flex-items">
                                <div className='price'>
                                    <p>{item.price1}</p>
                                    <s>{item.oldprice}</s>
                                </div>
                                <img src={item.star} alt="rating" />
                                <p>{item.text}</p>
                            </div>
                            <img src={item.wishlist} alt="icon" className='fav' />
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default ProductCart;