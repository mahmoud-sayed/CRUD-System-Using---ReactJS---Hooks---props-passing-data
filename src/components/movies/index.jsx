import React, { useState } from 'react';
import './style.scss';

//react Icon
import { FiAlignJustify } from "react-icons/fi";

// component 
import MovieInfo from './../movieInfo';


const Movies = () => {
    const [isActive, setIsActive] = useState(false);

    const show = () => {
        return setIsActive((e) => !isActive);
    }

    return (
        <div className="movie-wrapper">
            <div className="add-movie">
                <div className="movie" onClick={show}>
                    <div className="movie-name">
                        <FiAlignJustify className='item' />
                        <p>MoveName</p>
                    </div>
                    <div className="action-buttons">
                        <button className="edit">Edit</button>
                        <button className="delete">Delete</button>
                    </div>
                </div>
                {isActive && (
                    <MovieInfo />
                )}
            </div>
        </div>
    );
}



export default Movies;