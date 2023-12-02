import america from '../assets/images/iconusa.png';

const FooterSection = () => {
    return(
        <div className="footersection">
             <p><span>&copy;</span> 2023 Ecommerce</p>
            <p>
                <label htmlFor="English">English<img src={america} alt="usa"/></label>
                    <select name="english">
                    <option value="denmark"></option>
                    </select>
            </p>
        </div>
    )
}
export default FooterSection;