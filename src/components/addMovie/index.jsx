import React from 'react';
import './style.scss';



//component
import Form from './../form';



const AddMovie = () => {

    return (
        <React.Fragment>
            <div className="movie-will-added-info">
                <div className="name">
                    <h3>Name*</h3>
                    <p>Movie name</p>
                </div>
                <div className="description">
                    <h3>Description</h3>
                    <p>Movie Description</p>
                </div>
            </div>
            <div className="adding-movie-wrapper">
                <p>Movies</p>
                <Form />
            </div>
        </React.Fragment>


    );
}

export default AddMovie;