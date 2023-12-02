import BannerPart from "./bannerpart";
import LoginPage from "./loginPage";
import Button from "./button";
import banner from '../assets/images/banner.png';


const Banner = () => {

    return (
        <ul className="bannerContainer">
            <div className="sidebar">
                <ul>
                    <li>Automobiles</li>
                    <li>Cloth and Wear</li>
                    <li>Home interiors</li>
                    <li>Computer and Tech</li>
                    <li>Tools and equipments</li>
                    <li>Sports and outdoor</li>
                    <li>Animals and pets</li>
                    <li>Machinery tools</li>
                    <li>More category</li>
                </ul>
            </div>
            <div className="mask">
                <div className="bimg">
                    <img src={banner} alt="images" /></div>
                <div className="maskinner">
                    <p>Latest Trending </p>
                    <h1>Electronic Items</h1>
                    <Button className="learnbutton">Learn more</Button>
                </div>
            </div>
            <div className="bannerContact">
                <LoginPage />
                <BannerPart className="banner1">Get US $10 off with a new supplier</BannerPart>
                <BannerPart className="banner2">Send quotes with supplier preferences</BannerPart>
            </div>
        </ul>
    )
}
export default Banner;