import React, { Component } from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './scss/styles.scss';
import Header from './components/Header';
import Content1 from './components/Content1';
import Projects from './pages/Projects';

function App() {


  const [repos, setRepos] = useState([]);
  const link = 'https://api.github.com/users/ekaramyan';
  useEffect(() => {
    const repo_get = async () => {
      const result = await axios.get(link + '/repos'); //calling api
      setRepos(result.data); //setting fetched data
    }
    repo_get() //calling function
      .catch(console.error) //catching errors
  }, []);


  return (
    <div className="content">
      <Header />
      <Content1 name='Edward' />
      <Projects
        pageTitle={'Projects'}
        repos={repos}
        title={repos.name}
      />
    </div>
  );
}
export default App;
