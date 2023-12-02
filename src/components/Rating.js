import * as images from './images';

const Rating = () => {
    return (
        <div className='middle'>
            <div className="rating">
                <img src={images?.rating} alt="rating" />
                <h4>9.3</h4>
                <img src={images?.msg} alt="msg" />
                <p>32 reviews</p>
                <img src={images?.basket} alt="basket" />
                <p>154 sold</p>
            </div>
            <div className="trade">
              <div className='price'>
                <h3>$98.00</h3>
                <p>50-100 pcs</p>
              </div>
              <div className='price'>
                <h3>$90.00</h3>
                <p>100-700 pcs</p>
              </div>
              <div className='price'>
                <h3>$78.00</h3>
                <p>700+ pcs</p>
              </div>
            </div>
            <div className="grid-items">
                <p>Price: </p>
                <p>Negotiable</p>
                <p>Type: </p>
                <p>Classic  shoes</p>
                <p>Material: </p>
                <p>Plastic material</p>
                <p>Design: </p>
                <p>Modern nice</p>
                <p>Customization: </p>
                <p>Customized logo and design custom packages</p>
                <p>Protection: </p>
                <p>Refund Policy</p>
                <p>Warranty: </p>
                <p>2 years full warranty </p>
            </div>
        </div>
    )
}
export default Rating;