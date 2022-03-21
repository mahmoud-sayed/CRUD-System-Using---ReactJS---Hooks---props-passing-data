import React, { useState } from 'react';
import './style.scss';

//components
import Categories from './../components/categories'
const Page = (props) => {
    const [category, setCategory] = useState('');

    const addedCategoryHandler = (e) => {
        setCategory(e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        const newCategoryAdded = {
            category: category
        }
        props.onAddCategoryData(newCategoryAdded);
        setCategory('');
    }
    return (
        <div className="page-wrapper">
            <div className="new-category">
                <h3>Add Category</h3>
                <form onSubmit={submitHandler}>
                    <input type="text" onChange={addedCategoryHandler} placeholder="Category Name *" required />
                    <button type="submit">Create Category</button>
                </form>
            </div>
            <div className="movies-wrapper">
                <h2>Movies Data</h2>
                <div className="categories-wrapper">
                    {props.data[0] && <Categories data={props.data[0]} />}
                    {props.data[1] && <Categories data={props.data[1]} />}
                </div>
            </div>
        </div>
    );
}

export default Page;