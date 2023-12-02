import * as images from './images';

const CartItems = () => {
    const cart = [
        {
            image: images?.tshirt,
            text: 'T-shirts with multiple colors, for men and lady',
            type: 'Size: medium, Color: blue,  Material: Plastic Seller: Artel Market',
            button1: 'Remove',
            button2: 'Save for later',
            price: '$78.99'

        },
        {
            image: images?.bag,
            text: 'T-shirts with multiple colors, for men and lady',
            type: 'Size: medium, Color: blue,  Material: Plastic Seller: Best factory LLC',
            button1: 'Remove',
            button2: 'Save for later',
            price: '$80.70'
        },
        {
            image: images?.lamp,
            text: 'T-shirts with multiple colors, for men and lady',
            type: 'Size: medium, Color: blue,  Material: Plastic Seller: Artel Market',
            button1: 'Remove',
            button2: 'Save for later',
            price: '170.50$'
        }
    ]
    return (
        <div className="cartitems">
            <ul>
                {cart.map((item) => (
                    <div className="cartitems">
                        <li>
                            <div className='imgcontainer'>
                                <img src={item.image} alt="images" />
                            </div>
                            <div className='content'>
                                <div className='text-items'>
                                    <h4>{item.text}</h4>
                                    <p>{item.type}</p>
                                    <div className='buttonitems'>
                                        <button className="btn1">{item.button1}</button>
                                        <button className="btn2">{item.button2}</button>
                                    </div>
                                </div>
                                <div className='left'>
                                    <label htmlFor='quantity'> Quantity
                                        <select name="quantity">
                                            <option vlaue="select"></option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                        </select>
                                    </label>
                                    <p>{item.price}</p>
                                </div>

                            </div>

                        </li>
                    </div>
                ))}
                <div className='last'>
                    <button className='back'>
                        <img src={images?.backarrow} alt="images" />
                        Back to shop</button>
                    <button className='remove'>Remove all</button>
                </div>
            </ul>


        </div>
    )
}
export default CartItems;