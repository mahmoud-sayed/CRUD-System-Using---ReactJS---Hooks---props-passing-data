import React from 'react';
import './style.scss';

const Form = () => {
    return (
        <form>
            <input type="text" placeholder="English Name *" />
            <textarea placeholder="English Description" name="description" rows="3" cols="15" />
            <button type="submit">Create Category</button>
        </form>
    );
}

export default Form;