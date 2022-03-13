import React, { createContext, useState } from 'react';

export const MoviesListContext = createContext();

const MoviesListContextProvider = () => {
    return (
        <div>
            movie list context
        </div>
    );
}

export default MoviesListContextProvider;