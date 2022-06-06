import React, { useState } from 'react';
import './style.scss';

//components
import Categories from './../components/categories';
import config from '../config';
const Page = ({ data }) => {

    const [name, setName] = useState('');

    //to handel create operation
    const handelSubmit = (e) => {
        e.preventDefault();
        if (name.length === 0) {
            alert('please write name');
        } else if (data.length === 0) {
            const id = 1;
            config.post('categories', { id, name, movies: [] });
        } else {
            const id = data[data.length - 1].id + 1;
            config.post('categories', { id, name, movies: [] });
        }
        setName('');
    };

    return (
        <div className="page-wrapper">
            <div className="new-category">
                <h3>Add Category</h3>
                <form onSubmit={handelSubmit}>
                    <input type="text" value={name} placeholder="Category Name *" required onChange={(e) => setName(e.target.value)} />
                    <button type="submit">Create Category</button>
                </form>
            </div>
            <div className="movies-wrapper">
                <h2>Movies Data</h2>
                <div className="categories-wrapper">
                    {data &&
                        data.map(singleCategory =>
                            <Categories key={singleCategory.id} singleCategory={singleCategory} />)
                    }

                </div>
            </div>
        </div>
    );
};

export default Page;