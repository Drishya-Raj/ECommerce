import * as images from './images';

const Flags = () => {

    const flag = [
        {
            image: images?.emirates,
            text: 'Arabic Emirates',
            domain: 'shopname.ae'

        },
        {
            image: images?.austrailia,
            text: 'Australia',
            domain: 'shopname.ae',
        },
        {
            image: images?.america,
            text: 'United States',
            domain: 'shopname.ae'
        },
        {
            image: images?.russia,
            text: 'Russia',
            domain: 'shopname.ae'
        },
        {
            image: images?.italy,
            text: 'Italy',
            domain: 'shopname.it'
        },
        {
            image: images?.denmark,
            text: 'Denmark',
            domain: 'denmark.com.d'
        },
        {
            image: images?.france,
            text: 'France',
            domain: 'shopname.fr'
        },
        {
            image: images?.emirates,
            text: 'Arabic Emirates',
            domain: 'shopname.ae'
        },
        {
            image: images?.china,
            text: 'China',
            domain: 'shopname.cn'
        },
        {
            image: images?.britain,
            text: 'Great Britain',
            domain: 'shopname.gb'
        }
    ]

    return (
        <div className="flag">
            <h2>Suppliers by region</h2>
            <div className="flags">
                <ul className="container">
                    {flag?.map((item) => (
                        <li>
                            <div className='img-container'>
                            <img src={item.image} alt="flag" />
                            </div>
                            
                            <div className='flex'>
                                <h4>{item.text}</h4>
                                <p>{item.domain}</p>

                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
export default Flags;