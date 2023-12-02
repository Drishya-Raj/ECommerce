import * as images from './images';

const ListViewContent = () => {
    const lists = [
        {
            image: images?.smartphone,
            content: 'Canon Cmera EOS 2000, Black 10x zoom',
            price: '$998.00',
            oldprice: '$1128.00',
            stars: images?.star,
            number: '7.5',
            dot: images?.dot,
            order: '154 order',
            dots: images?.dot2,
            text1: 'Free shipping',
            text2: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua',
            link: 'View details',
            fav: images?.fav
        },
        {
            image: images?.mob1,
            content: 'GoPro HERO6 4K Action Camera - Black',
            price: '$998.00',
            stars: images?.star,
            number: '7.5',
            dot: images?.dot,
            order: '154 order',
            dots: images?.dot2,
            text1: 'Free shipping',
            text2: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit',
            link: 'View details',
            fav: images?.fav
        },
        {
            image: images?.mobile,
            content: 'GoPro HERO6 4K Action Camera - Black',
            price: '$998.00',
            stars: images?.star,
            number: '7.5',
            dot: images?.dot,
            order: '154 order',
            dots: images?.dot2,
            text1:'Free shipping',
            text2: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit',
            link: 'View details',
            fav: images?.fav
        },
        {
            image: images?.laptop,
            content: 'GoPro HERO6 4K Action Camera - Black',
            price: '$998.00',
            stars: images?.star,
            number: '7.5',
            dot: images?.dot,
            order: '154 order',
            dots: images?.dot2,
            text1: 'Free shipping',
            text2: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit',
            link: 'View details',
            fav: images?.fav
        },
        {
            image: images?.watch,
            content: 'GoPro HERO6 4K Action Camera - Black',
            price: '$998.00',
            oldprice: '$1128.00',
            stars: images?.star,
            number: '7.5',
            dot: images?.dot,
            order: '154 order',
            dots: images?.dot2,
            text1: 'Free shipping',
            text2: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit',
            link: 'View details',
            fav: images?.fav

        },
        {
            image: images?.headset,
            content: 'GoPro HERO6 4K Action Camera - Black',
            price: '$998.00',
            stars: images?.star,
            number: '7.5',
            dot: images?.dot,
            order: '154 order',
            dots: images?.dot2,
            text1: 'Free shipping',
            text2: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit',
            link: 'View details',
            fav: images?.fav
        },

    ]
    return (
        <div className="listviewcontent">
            <ul>
                {lists.map((item) => (
                    <li>
                        <div className='imgContainer'>
                            <img src={item.image} alt="images" />
                        </div>
                        <div className='content'>
                            <div className='items'>
                                <p id="content">{item.content}</p>
                                <div className='price'>
                                    <h4>{item.price}</h4>
                                    <h5>{item.oldprice}</h5>
                                </div>
                                <div className='rating'>
                                    <img src={item.stars} alt="rating" className='star' />
                                    <p id="number">{item.number}</p>
                                    <img src={images?.dot} alt="dot" />
                                    <p id="order">{item.order}</p>
                                    <img src={item.dots} alt="dot" />
                                    <p id="text1">{item.text1}</p>
                                </div>
                                <p id="text2">{item.text2}</p>
                                <p id="link">{item.link}</p>
                            </div>
                            <img src={item.fav} alt="fav" className='fav' />
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default ListViewContent;