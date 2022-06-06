import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.scss';
import Page from './pages';
import config from './config';


const App = () => {



  const [data, setData] = useState('');

  useEffect(() => {
    (async function () {
      const response = await config.get(`/categories`);
      setData(response.data);
    })();
  }, []);






  return (
    <div className="App">
      <Page
        data={data}
      />
    </div>
  );
};

export default App;