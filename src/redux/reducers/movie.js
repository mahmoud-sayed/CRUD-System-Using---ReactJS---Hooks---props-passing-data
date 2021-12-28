import { ADD_MOVIE, EDIT_MOVIE, DELETE_MOVIE } from './../types';

const initialState = {
    movieData: {}
}

const moviesReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case ADD_MOVIE:
            break;
        case EDIT_MOVIE:
            break;
        case DELETE_MOVIE:
            break;



        default:
            return state;
    }

}

export default moviesReducer;