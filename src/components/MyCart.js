import CartItems from "./cartItems";
import CheckOut from "./checkout";
import Navbar5 from "./navbar5";
import Seven from "./sectionSeven";
import Footer from "./footer";
import FooterSection from "./footerSection";
import Discount from "./discount";
import SavedItems from "./savedItems";
import DeliveryItems from "./deliveryItem";

const MyCart = () => {
    return (
        <div className="mycart">
            <Navbar5 />
            <div className="flex">
                <CartItems />
                <div className="columnflex">
                    <div className="coupon">
                        <p>Have a coupon ?</p>
                        <div className="box">
                            <button className="btn1">Add coupon</button>
                            <button className="btn2">Apply</button>
                        </div>

                    </div>
                    <CheckOut />
                </div>
            </div>
            <DeliveryItems />
            <SavedItems />
            <Discount />
            <Seven />
            <Footer />
            <FooterSection />
        </div>
    )
}
export default MyCart;