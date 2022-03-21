import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.scss';
import Page from './pages';

const App = (props) => {

  //fitch data from json server
  const url = 'http://localhost:5000/categories';
  const [data, setData] = useState('');

  useEffect(() => {
    axios.get(url)
      .then((response) => setData(response.data));
  }, [url]);

  const savedCategoryDataHandler = (savedCategoryData) => {
    const newCategoryData = {
      ...savedCategoryData,
      id: Math.random().toString()
    }
    console.log(newCategoryData);
  }

  return (
    <div className="App">
      <Page data={data} onAddCategoryData={savedCategoryDataHandler} />
    </div>
  );
}

export default App;
