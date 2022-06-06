import React from 'react';
import Movie from './Movie';

const Movies = ({ moviesList }) => {
    return (
        <React.Fragment>
            {moviesList.map(movie =>
                <Movie key={movie.id} name={movie.name} description={movie.description} />
            )}

        </React.Fragment>
    );
};

export default Movies;