import Button from './button';
import bg1 from '../assets/images/pinkmob-bg.png';
import React from 'react';
import smartwatch from '../assets/images/watch.png';
import cameras from '../assets/images/camera.png';
import headphone from '../assets/images/whiteheadPhones.png';
import jug from '../assets/images/jug.png';
import headset from '../assets/images/headset.png';
import laptop from '../assets/images/laptop.png';
import smartphone from '../assets/images/smartphone.png';
import mobphone from '../assets/images/1.png';

const SectionFour = () => {
    const images = [
        {
            text: 'Smart Watches',
            price: 'From USD 19',
            image: smartwatch
        },
        {
            text: 'Camera',
            price: 'From USD 89',
            image: cameras
        },
        {
            text: 'HeadPhones',
            price: 'From USD 10',
            image: headphone
        },
        {
            text: 'Smart Watches',
            price: 'From USD 90',
            image: jug
        },

        {
            text: 'Gaming set',
            price: 'From USD 35',
            image: headset
        },
        {
            text: 'Laptops & PC',
            price: 'From USD 340',
            image: laptop
        },
        {
            text: 'Smartphones',
            price: 'From USD 19',
            image: smartphone
        },
        {
            text: 'Electric kattle',
            price: 'From USD240',
            image: mobphone

        }
    ];

    return (
        <div className="sectionfour">
            <div className="fourleft">
                <div className="img-container">
                    <img src={bg1} alt="background" />
                </div>
                <h4>Consumer electronics and gadgets</h4>
                <Button className="sourcebutton2">Source now</Button>
            </div>
            <div className="section">
                <ul className="grid-container">
                    {images.map((item, index) => (
                        <li key={index} className='grid-items'>
                            <h4>{item.text}</h4>
                            <p>{item.price}</p>
                            <div className='img-container'>
                                <img src={item.image} alt="items" />
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
export default SectionFour;