import React from 'react';
import './style.scss';

//components
import Categories from './../components/categories';
const Page = ({ data }) => {

    return (
        <div className="page-wrapper">
            <div className="new-category">
                <h3>Add Category</h3>
                <form >
                    <input type="text" placeholder="Category Name *" required />
                    <button type="submit">Create Category</button>
                </form>
            </div>
            <div className="movies-wrapper">
                <h2>Movies Data</h2>
                <div className="categories-wrapper">
                    {data &&
                        data.map(singleCategory =>
                            <Categories singleCategory={singleCategory} />)
                    }

                </div>
            </div>
        </div>
    );
};

export default Page;