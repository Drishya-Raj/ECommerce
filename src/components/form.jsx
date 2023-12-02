const Form = () => {
    return (
        <div className="forms">
            <form className="form1">
                <h3>Send quotes to suppliers</h3>
                <input type="text" placeholder="What item do yo need?" className="text" />
                <textarea placeholder="Type more details"></textarea>
                <div className="flex">
                    <input type="text" placeholder="Quantity" className="quantity" />
                    <label htmlFor="pcs">Pcs
                        <select name="pcs"></select>
                    </label>
                </div>
                <button className="send">Send enquiry</button>
            </form>
        </div>
    )
}
export default Form;