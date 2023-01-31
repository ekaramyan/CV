import React, { Component } from 'react';
import './scss/styles.scss';
import Header from './components/Header';
import Content1 from './components/Content1';
import Projects from './pages/Projects';

function App(props) {

  return (
    <div className="content">
      <Header />
      <Content1 name='Edward' />
      <Projects title='Projects' card_title='fixed first project' />
    </div>
  );
}
export default App;
