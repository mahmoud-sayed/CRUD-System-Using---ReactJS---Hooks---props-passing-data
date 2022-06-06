import React, { useState } from 'react';
import './style.scss';

//react Icon
import { FiAlignJustify } from "react-icons/fi";

// component 
import MovieInfo from './../movieInfo';


const Movie = ({ name, description }) => {
  const [isActive, setIsActive] = useState(false);

  const show = () => {
    return setIsActive((e) => !isActive);
  };

  return (
    <div className="movie-wrapper">
      <div className="add-movie">
        <div className="movie" >
          <div className="movie-name" onClick={show}>
            <FiAlignJustify className='item' />
            <p>{name}</p>
          </div>
          <div className="action-buttons">
            <button className="edit">Edit</button>
            <button className="delete">Delete</button>
          </div>
        </div>
        {isActive && (
          <MovieInfo name={name} description={description} />

        )}
      </div>
    </div>
  );
};



export default Movie;