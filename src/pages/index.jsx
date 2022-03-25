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

    const moviesAdded = (moviesData) => {
        props.onReceiveMoviesData(moviesData);
    }
    return (
        <div className="page-wrapper">
            <div className="new-category">
                <h3>Add Category</h3>
                <form onSubmit={submitHandler}>
                    <input type="text" onChange={addedCategoryHandler} placeholder="Category Name *" value={category} required />
                    <button type="submit">Create Category</button>
                </form>
            </div>
            <div className="movies-wrapper">
                <h2>Movies Data</h2>
                <div className="categories-wrapper">
                    {props.data &&
                        props.data.map(singleCategory =>
                            <Categories onMoviesAdded={moviesAdded} data={singleCategory}
                            />)
                    }

                </div>
            </div>
        </div>
    );
}

export default Page;