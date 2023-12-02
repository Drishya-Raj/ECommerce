import clear from '../assets/images/clear.png';

const FilterSection = () => {
    const filter = [
        {
            text: 'Samsung',
            image: clear
        },
        {
            text: 'Apple',
            image: clear
        },
        {
            text: 'Poco',
            image: clear
        },
        {
            text: 'Metallic',
            image: clear
        },
        {
            text: '4 star',
            image: clear
        }
    ]
    return (
        <ul className="filter">
            {filter?.map((item) => (
                <li>
                    <p>{item?.text}</p>
                    <img src={item?.image} alt="clear" />
                </li>
            ))}
            <p className="clr">Clear all filter</p>
        </ul>
    )
}
export default FilterSection;