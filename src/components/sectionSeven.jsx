import Button from "./button";

const Seven = () => {

    return (
        <div className="seven">
            <h3>Subscribe on our newsletter</h3>
            <p>Get daily news on upcoming offers from many suppliers all over the world</p>
            <ul className="inputsection">
                <li><input type="text" placeholder="Email" /></li>
                <Button className="subscribe">Subscribe</Button>
            </ul>
        </div>
    )
}
export default Seven;