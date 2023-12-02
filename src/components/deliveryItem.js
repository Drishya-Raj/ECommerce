import lock from '../assets/images/lock.png';
import msg from '../assets/images/msg.png';
import van from '../assets/images/van.png';

const DeliveryItems = () => {
    const delivery = [
        {
            image: lock,
            text1: 'Secure Payment',
            text2: 'Have you ever finally just '

        },
        {
            image: msg,
            text1: 'Customer Support',
            text2: 'Have you ever finally just '

        },
        {
            image: van,
            text1: 'Free Delivery',
            text2: 'Have you ever finally just '

        }
    ]
    return (
        <div className="deliveryItem">
            <ul>
                {delivery?.map((item) =>
                    <li>
                        <div className='imgcontainer'>
                            <img src={item?.image} alt="image2" className='img2' />
                        </div>
                        <div className='text'>
                            <h4>{item?.text1}</h4>
                            <p>{item?.text2}</p>
                        </div>
                    </li>
                )}
            </ul>
        </div>
    )
}
export default DeliveryItems;