import React, { useState } from 'react';
import './style.scss';

//react icons
import { FiAlignJustify } from "react-icons/fi";

//component
import Movies from './../movies';
import AddMovie from './../addMovie';
const Categories = (props) => {
    //hooks
    const [isActive, setIsActive] = useState(false);


    const show = () => {
        return setIsActive((e) => !isActive);
    }

    const saveMoviesDataHandler = (newMovieAdded) => {
        const moviesData = {
            ...newMovieAdded,
            id: Math.random().toString()
        }
        props.onMoviesAdded(moviesData);
    }


    return (
        <React.Fragment>
            <div className="category-wrapper" >
                <div className="category" onClick={show}>
                    <FiAlignJustify className='item' />
                    <p>{props.data.name}</p>
                </div>
                {isActive && (
                    <React.Fragment>
                        <div className="add-movie-wrapper">

                            <div className="container">
                                <AddMovie onNewMovieAdded={saveMoviesDataHandler} />
                            </div>
                            <Movies movies={props.data.movies[0]} />
                            <Movies movies={props.data.movies[1]} />
                            <Movies movies={props.data.movies[2]} />
                            <Movies movies={props.data.movies[3]} />

                        </div>
                    </React.Fragment>
                )}
            </div>

        </React.Fragment>

    );
}

export default Categories;