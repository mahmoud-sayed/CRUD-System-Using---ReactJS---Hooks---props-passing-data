import React, { useState } from 'react';
import './style.scss';


const AddMovie = (props) => {
    const [movieName, setMovieName] = useState('');
    const [movieDescription, setMovieDescription] = useState('');

    const addMovieNameHandler = (e) => {
        setMovieName(e.target.value);
    }

    const addMovieDescriptionHandler = (e) => {
        setMovieDescription(e.target.value);
    }


    const submitFormHandler = (e) => {
        e.preventDefault();
        const newMovieAdded = {
            name: movieName,
            description: movieDescription
        }
        props.onNewMovieAdded(newMovieAdded);
        setMovieName('');
        setMovieDescription('');
    }

    return (
        <React.Fragment>
            <div className="movie-will-added-info">
                <div className="name">
                    <h3>Name*</h3>
                    <p>{movieName}</p>
                </div>
                <div className="description">
                    <h3>Description</h3>
                    <p>{movieDescription}</p>
                </div>
            </div>
            <div className="adding-movie-wrapper">
                <p>Movies</p>
                <form onSubmit={submitFormHandler}>
                    <input type="text" onChange={addMovieNameHandler} placeholder="English Name" value={movieName} required />
                    <textarea onChange={addMovieDescriptionHandler} value={movieDescription} placeholder="English Description" name="description" rows="3" cols="15" />
                    <button type="submit">Add Movie</button>
                </form>
            </div>
        </React.Fragment>


    );
}

export default AddMovie;