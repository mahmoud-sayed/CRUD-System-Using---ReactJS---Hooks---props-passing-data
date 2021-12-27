import React from 'react';
import './style.scss';

const MovieInfo = () => {

    return (
        <div className="movie-info">
            <div className="name">
                <h3>Movie Name</h3>
                <p>Movie name</p>
            </div>
            <div className="description">
                <h3>Description</h3>
                <p>Movie Description</p>
            </div>
        </div>
    );
}

export default MovieInfo;