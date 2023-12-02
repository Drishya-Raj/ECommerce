import React from "react";
import Navbar from "./navbar";
import Navbar2 from "./navBar2";
import MensClothing from "./mensClothing";
import ProductDescription from "./ProductDecsription";
import RelatedProducts from "./related-products";
import Discount from "./discount";
import Seven from "./sectionSeven";
import Footer from "./footer";
import FooterSection from "./footerSection";

const ProductDetails = () => {

    return (
        <div className="productdetails">
            <Navbar />
            <Navbar2 />
            <MensClothing />
            <ProductDescription/>
            <RelatedProducts />
            <Discount />
            <Seven />
            <Footer />
            <FooterSection />
        </div>
    )
}
export default ProductDetails;