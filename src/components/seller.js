import rimg from '../assets/images/img.jpg';
import germany from '../assets/images/germany.png';
import verify from '../assets/images/verified_user.png';
import language from '../assets/images/language.png';

const Seller = () => {
    return(
        <div className="right">
        <div className="seller-details">
            <img src={rimg} alt="rimg" className="rimg" />
            <div className="sellers">
                <p>Supplier</p>
                <p> Guanjoi Trading LLC</p>
            </div>
        </div>
        <p>
            <img src={germany} alt="germany" />
            Germany, Berlin
        </p>
        <p>
            <img src={verify} alt="verify" />
            Verified seller
        </p>
        <p>
            <img src={language} alt="language" />
            Worldwide Shipping
        </p>

        <div className="send">
            <button>Send Enquiry</button>
        </div>
        <div className="selers">
            <button>Seller's Profile</button>
        </div>
    </div>
    )
}
export default Seller;