import Banner from "./banner"
import Footer from "./footer";
import Navbar2 from "./navBar2";
import Navbar from "./navbar"
import SectionFive from "./sectionFive";
import SectionSale from "./sectionSale";
import SectionSix from "./sectionSix";
import SectionFour from "./sectionFour";
import Seven from './sectionSeven';
import Services from "./services";
import Flags from './flags';
import FooterSection from "./footerSection";
import SectionThree from "./sectionThree";

const Main = () => {
    return(
        <div className="mainSection">
            <Navbar/>
            <Navbar2 />
            <Banner />
            <SectionSale />
            <SectionThree />
            <SectionFour/>
            <SectionFive /> 
            <SectionSix />
            <Services />
             <Flags />
            <Seven />
            <Footer />
            <FooterSection />
        </div>
    )
}
export default Main;