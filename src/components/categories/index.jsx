import React, { useState } from 'react';
import './style.scss';

//react icons
import { FiAlignJustify } from "react-icons/fi";

//component
import Movies from './../movies';
import AddMovie from './../addMovie';
const Categories = ({ singleCategory }) => {
    //hooks
    const [isActive, setIsActive] = useState(false);


    const show = () => {
        return setIsActive((e) => !isActive);
    };

    return (
        <React.Fragment>
            <div className="category-wrapper" >
                <div className="category" onClick={show}>
                    <FiAlignJustify className='item' />
                    <p>{singleCategory.name}</p>
                </div>
                {isActive && (
                    <React.Fragment>
                        <div className="add-movie-wrapper">

                            <div className="container">
                                <AddMovie movies={singleCategory.movies} categoryId={singleCategory.id} />
                            </div>
                            <Movies moviesList={singleCategory.movies} />

                        </div>
                    </React.Fragment>
                )}
            </div>

        </React.Fragment>

    );
};

export default Categories;