import React, { useState } from 'react';
import './style.scss';
import config from '../../config';


const AddMovie = ({ movies, categoryId }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const handelSubmit = async (e) => {
        e.preventDefault();
        if (name.length <= 2) {
            alert('please add valid name more than 2 characters');
        } else if (description.length <= 2) {
            alert('please all valid description more than 2 characters');
        } else if (name.length === 0 && description.length === 0) {
            alert('name and description are required please add more than 2 characters');
        } else if (movies.length === 0) {
            const id = 1;
            config.post(`categories/${categoryId}[movies][0]`, { id, name, description, rate: "0" });
        } else {
            const id = movies[movies.length - 1].id + 1;
            config.post(`categories/${categoryId}/movies`, { id, name, description, rate: "0" });

        }



        setName('');
        setDescription('');
    };

    return (
        <React.Fragment>
            <div className="movie-will-added-info">
                <div className="name">
                    <h3>Name*</h3>
                    <p>{name}</p>
                </div>
                <div className="description">
                    <h3>Description</h3>
                    <p>{description}</p>
                </div>
            </div>
            <div className="adding-movie-wrapper">
                <p>Movies</p>
                <form onSubmit={handelSubmit}>
                    <input
                        type="text"
                        placeholder="English Name"
                        required
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    />
                    <textarea
                        placeholder="English Description"
                        name="description"
                        rows="3"
                        cols="15"
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}
                    />
                    <button type="submit">Add Movie</button>
                </form>
            </div>
        </React.Fragment>


    );
};

export default AddMovie;