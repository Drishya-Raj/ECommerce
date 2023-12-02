import industry from '../assets/images/industry.png';
import search from '../assets/images/Vectorsearch.png';
import rainbow from '../assets/images/rainbow.png';
import bucket from '../assets/images/bucket.png';
import workers from '../assets/images/workers.png';
import aeroplane from '../assets/images/aeroplane.png';
import send from '../assets/images/send.png';
import security from '../assets/images/Vector.png';

const Services = () => {

    const service = [
        {
            image1: industry,
            image2: search,
            text: 'Source from Industry Hubs'
        },
        {
            image1: rainbow,
            image2: bucket,
            text: 'Customize Your Products'
        },
        {
            image1: aeroplane,
            image2: send,
            text: 'Fast, reliable shipping by ocean or air'
        },
        {
            image1: workers,
            image2: security,
            text: 'Product monitoring and inspection'
        }
    ]
    return (
        <div className='services'>
            <h2>Our extra services</h2>
            <div className="subsection">
                <ul className="container">
                    {service?.map((item) => (
                        <li key={item}>
                            <div className='contain'>
                                <img src={item?.image1} alt="workers" className='images' />
                            </div>

                            <p>{item?.text}</p>
                            <img src={item?.image2} alt="icon" className='icon'/>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
export default Services;