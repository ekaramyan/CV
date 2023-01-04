import React, { Component } from 'react';
import './scss/styles.scss';
import Header from './components/Header';
import Content1 from './components/Content1';

function App(props) {

  return (
    <div className="content">
      <Header />
      <Content1 name = 'Edward'/>
    </div>
  );
}

// import './main';
export default App;
