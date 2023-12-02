import bg from '../assets/images/bg1.png';
import React from 'react';
import chair from '../assets/images/chair.png';
import lamp from '../assets/images/lamp.png';
import kitchen from '../assets/images/bed.png';
import juicer from '../assets/images/juicer.png';
import juicer2 from '../assets/images/juicer2.png';
import appliance from '../assets/images/wallet.png';
import pot from '../assets/images/pot.png';
import plant from '../assets/images/plant.png';
import Button from "./button";

const SectionThree = () => {
    const images = [
        {
            text: 'Soft chairs',
            price: 'From USD 19',
            image: chair
        },
        {
            text: 'Sofa & chair',
            price: 'From USD 19',
            image: lamp
        },
        {
            text: 'Kitchen dishes',
            price: 'From USD 19',
            image: kitchen
        },
        {
            text: 'Smart Watches',
            price : 'From USD 19',
            image : pot
        },
        
        {
            text: 'Kitchen Mixer',
            price: 'From USD 100',
            image: juicer
        },
        {
            text: 'Blenders',
            price: 'From USD 39',
            image: juicer2
        },
        {
            text: 'Home appliance',
            price: 'From USD 19',
            image: appliance
        },
        {
            text :'Coffecmaker',
            price : 'From USD 10',
            image : plant

        }
    ];

    return (
        <div className="sectionthre">
        <div className="threeRight">
            <div className="img-container">
                <img src={bg} alt="background" />
            </div>
            <h4>Home and Outdoor</h4>
            <Button className="sourcebutton">Source now</Button>
        </div>
        <div className="sectionThree">
            <ul className="grid-container">
                {images?.map((item, index) => (
                    <li key={index} className='grid-items'>
                        <h4>{item?.text}</h4>
                        <p>{item?.price}</p>
                        <img src={item?.image} alt="items" />
                    </li>
                ))}
            </ul>
        </div>
        </div>
    )
}
export default SectionThree;