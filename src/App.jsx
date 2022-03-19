import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.scss';
import Page from './pages';

const App = () => {

  //fitch data from json server
  const url = 'http://localhost:5000/categories';
  const [data, setData] = useState('');

  useEffect(() => {
    axios.get(url)
      .then((response) => setData(response.data));
  }, [url]);

  return (
    <div className="App">
      <Page data={data} />
    </div>
  );
}

export default App;
