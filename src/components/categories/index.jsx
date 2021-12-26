import React, { useState } from 'react';
import './style.scss';

//react icons
import { FiAlignJustify } from "react-icons/fi";

//component
import Movies from './../movie';
const Categories = () => {
    //hooks
    const [openCategory, setOpenCategory] = useState(false);

    const showMovies = () => {

    }
    return (
        <div className="category" onClick={showMovies}>
            <FiAlignJustify className='item' />
            <p>Comedy</p>

            <Movies />
        </div>
    );
}

export default Categories;