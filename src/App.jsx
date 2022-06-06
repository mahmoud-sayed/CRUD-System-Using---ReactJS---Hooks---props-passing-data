import React, { useState, useEffect } from 'react';

import './App.scss';
import Page from './pages';
import config from './config';


const App = () => {



  const [data, setData] = useState([]);

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
        setData={setData}
      />
    </div>
  );
};

export default App;