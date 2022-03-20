import React from 'react';
import './style.scss';

//components
import Categories from './../components/categories'
const Page = (props) => {
    return (
        <div className="page-wrapper">
            <div className="new-category">
                <h3>Add Category</h3>
                <form>
                    <input type="text" placeholder="English Name *" required />
                    <textarea placeholder="English Description" name="description" rows="3" cols="15" />
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