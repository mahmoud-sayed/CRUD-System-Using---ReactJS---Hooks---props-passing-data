import React, { useState } from 'react';
import './style.scss';

//react icons
import { FiAlignJustify } from "react-icons/fi";

//component
import Movies from './../movies';
import AddMovie from './../addMovie';
const Categories = () => {
    //hooks
    const [isActive, setIsActive] = useState(false);

    const show = () => {
        return setIsActive((e) => !isActive);
    }
    return (
        <div className="category-wrapper" >
            <div className="category" onClick={show}>
                <FiAlignJustify className='item' />
                <p>Comedy</p>
            </div>
            {isActive && (
                <React.Fragment>
                    <div className="add-movie-wrapper">

                        <div className="container">
                            <AddMovie />
                        </div>
                        <Movies />
                    </div>
                </React.Fragment>

            )}
        </div>
    );
}

export default Categories;