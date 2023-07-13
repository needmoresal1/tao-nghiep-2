import React from 'react';
import './category.css'
export const Category = ({des}) => {
    return(
        <div className='container_cat'>
            <div className='img1'></div>
            <div className='bg1'></div>
            <div className='des'>{des || "Default"}</div>
        </div>
    );
}