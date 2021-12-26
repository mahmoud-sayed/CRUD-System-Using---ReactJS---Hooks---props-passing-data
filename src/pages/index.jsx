import React from 'react';
import './style.scss';

//components
import Form from './../components/form';
import Categories from './../components/categories'
const Page = () => {
    return (
        <div className="page-wrapper">
            <div className="new-category">
                <h3>Add Category</h3>
                <Form />
            </div>
            <div className="movies-wrapper">
                <h2>Movies Data</h2>
                <div className="categories-wrapper">
                    <Categories />
                </div>
            </div>
        </div>
    );
}

export default Page;