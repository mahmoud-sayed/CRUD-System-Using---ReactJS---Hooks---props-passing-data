import { ADD_CATEGORY } from './../types';


const initialState = {

}

const categoryReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case ADD_CATEGORY:
            return {...payload }
        default:
            return state;
    }
}

export default categoryReducer;