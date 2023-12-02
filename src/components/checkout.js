import payment from '../assets/images/payment.png';
import orangered from '../assets/images/orangered.png';
import paypal from '../assets/images/paypal.png';
import visa from '../assets/images/visa.png';
import ipay from '../assets/images/ipay.png';
import Button from "./button";

const CheckOut = () => {
    const images = [
        {
            image: payment
        },
        {
            image: orangered
        },
        {
            image: paypal
        },
        {
            image: visa
        }, {
            image: ipay
        }
    ]
    return (
        <div className="checkout">
            <ul>
                <li>
                    <p id="title">Subtotal:</p>
                    <p id="price1">$1403.97</p>
                </li>
                <li>
                    <p id="title">Discount:</p>
                    <p id="price2">- $60.00</p>
                </li>
                <li>
                    <p id="title">Tax:</p>
                    <p id="price3">+ $14.00</p>
                </li>
            </ul>
            <div className="total">
                <h4>Total</h4>
                <h4>$1357.97</h4>
            </div>
            <Button className="checkoutbutton">CheckOut</Button>
            <div className="container">

                {images?.map((item) => (
                    <div className="imgcontainer">
                        <img src={item.image} alt="images" />
                    </div>
                ))}
            </div>
        </div>
    )
}
export default CheckOut;