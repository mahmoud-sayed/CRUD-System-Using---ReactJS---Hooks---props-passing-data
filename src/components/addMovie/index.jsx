import React from 'react';
import './style.scss';

//


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
                <form>
                    <input type="text" placeholder="English Name" required />
                    <textarea placeholder="English Description" name="description" rows="3" cols="15" />
                    <button type="submit">Create Category</button>
                </form>
            </div>
        </React.Fragment>


    );
}

export default AddMovie;