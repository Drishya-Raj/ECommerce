import AsideItems from "./aside_items";
import check from '../assets/images/check.png';


const ProductDescription = () => {
    const checklist = [
        {
            image: check,
            text: ' Some great feature name here',
        },
        {
            image: check,
            text: 'Lorem ipsum dolor sit amet, consectetur'
        }, {
            image: check,
            text: ' Duis aute irure dolor in reprehenderit'
        },
        {
            image: check,
            text: ' Some great feature name here'
        }
    ]
    return (
        <div className="prod-left">
            <div className="productdescription">
                <div className='prodNav'>
                    <ul>
                        <li> Description </li>
                        <li>Reviews</li>
                        <li>Shipping</li>
                        <li>About Seller</li>
                    </ul>
                </div>
                <div className="description">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        Quis nostrud exercitation ullamcolaboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                </div>
                <div className="modal-grid">
                    <p id="head">Model</p>
                    <p id="col">#8786867</p>
                    <p id="head">Style</p>
                    <p id="col">Classic style</p>
                    <p id="head">Certificate</p>
                    <p id="col">ISO-898921212</p>
                    <p id="head">Size</p>
                    <p id="col">34mm x 450mm x 19mm</p>
                    <p id="head">Memory</p>
                    <p id="col">36GB RAM</p>
                </div>
                <div className="checklist">
                    {checklist?.map((item) => (
                        <p>
                            <img src={item?.image} alt="check" />
                            {item?.text}
                        </p>
                    ))}
                </div>
            </div>
            <AsideItems />
        </div>
    )
}
export default ProductDescription;