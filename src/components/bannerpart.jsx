import React, { Children } from 'react';
import '../assets/css/index.scss';

const BannerPart = ({children,className}) =>{
    return(
       <p className={className}>
        {children}
       </p>
    )
}
export default BannerPart;