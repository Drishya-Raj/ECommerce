const ListItem = () => {
    return (
        <div className="listItem">
            <div className="list1">
                <div className="selectbox">
                    <select>
                        <option>Category</option>
                    </select>
                    <div className="overselect"></div>
                </div>
                <div className="checkboxes">
                    <label htmlFor="first">Mobile accessory</label>
                    <label htmlFor="second"> Electronics</label>
                    <label htmlFor="third">Smartphones</label>
                    <label htmlFor="fourth"> Modern tech</label>
                </div>
            </div>
            <div className="list1">
                <div className="selectbox">
                    <select>
                        <option>Brands</option>
                    </select>
                    <div className="overselect"></div>
                </div>
                <div className="checkboxes">
                    <label htmlFor="first">
                        <input type="checkbox" className="first" /> Samsung
                    </label>
                    <label htmlFor="second">
                        <input type="checkbox" className="second" /> Apple
                    </label>
                    <label htmlFor="third">
                        <input type="checkbox" className="third" /> Huawel
                    </label>
                    <label htmlFor="fourth">
                        <input type="checkbox" className="fourth" /> Poco
                    </label>
                    <label htmlFor="fifth">
                        <input type="checkbox" className="fifth" /> Lenovo
                    </label>
                </div>
            </div>
            <div className="list1">
                <div className="selectbox">
                    <select>
                        <option>Features</option>
                    </select>
                    <div className="overselect"></div>
                </div>
                <div className="checkboxes">
                    <label htmlFor="first">
                        <input type="checkbox" className="first" /> Metallic
                    </label>
                    <label htmlFor="second">
                        <input type="checkbox" className="second" /> Plastic cover
                    </label>
                    <label htmlFor="third">
                        <input type="checkbox" className="third" /> 8 GB Ram
                    </label>
                    <label htmlFor="fourth">
                        <input type="checkbox" className="fourth" /> Super Power
                    </label>
                    <label htmlFor="fifth">
                        <input type="checkbox" className="fifth" /> Large Memory
                    </label>
                </div>
            </div>
            <div className="list1">
                <div className="selectbox">
                    <select>
                        <option>Price Range</option>
                    </select>
                    <div className="overselect"></div>
                </div>
            </div>
            <div className="list1">
                <div className="selectbox">
                    <select>
                        <option>Condition</option>
                    </select>
                    <div className="overselect"></div>
                </div>
            </div>
            <div className="list1">
                <div className="selectbox">
                    <select>
                        <option>Ratings</option>
                    </select>
                    <div className="overselect"></div>
                </div>
            </div>
            <div className="list1">
                <div className="selectbox">
                    <select>
                        <option>Manufacturer</option>
                    </select>
                    <div className="overselect"></div>
                </div>
            </div>
        </div>
    )
}
export default ListItem;