import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.scss';
import Page from './pages';


const App = () => {


  const DATA_URL = 'http://localhost:100/categories';
  const [data, setData] = useState('');

  useEffect(() => {
    (async function () {
      const response = await axios.get(DATA_URL);
      console.log(response);
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