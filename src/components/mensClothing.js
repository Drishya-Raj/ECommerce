import React from "react";
import * as images from './images';
import Rating from "./Rating";
import Seller from "./seller";

const MensClothing = () => {

    return (
        <div className="Mens">
            <div className="tshirt">
                <div className="imgContainer">
                    <img src={images?.tshirts} alt="image34" />
                </div>
                <div className="parts">
                    <img src={images?.image38} alt="images" />
                    <img src={images?.image35} alt="images" />
                    <img src={images?.image37} alt="images" />
                    <img src={images?.image36} alt="images" />
                    <img src={images?.imagee} alt="images" />
                    <img src={images?.image39} alt="images" />
                </div>
            </div>
            <div className="info">
                <p>
                    <img src={images?.tick} alt="check" /> In stock
                </p>
                <h4>Mens Long Sleeve T-shirt Cotton Base Layer Slim Muscle</h4>
               <Rating/>
            </div>
            <div className="right-section">
                <Seller />
                <div className="save">
                    <img src={images?.fav} alt="fav" />
                    <h3> Save for later</h3>
                </div>
            </div>
        </div>
    )
}
export default MensClothing;