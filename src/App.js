import React from 'react';
import MainContainer from './containers/MainContainer/MainContainer';
import Layout from './hoc/Layout/Layout';
import './App.css';

function App() {
  return (
    <div className="App">
        <Layout>
          <MainContainer/>
        </Layout>
    </div>
  );
}

export default App;
