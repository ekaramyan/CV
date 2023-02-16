import React, { Component } from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './scss/styles.scss';
import Header from './components/Header';
import Content1 from './components/Content1';
import Projects from './pages/Projects';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import InfoContainer from './containers/InfoContainer';

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
      <BrowserRouter>
        <Header />
        <Content1 name='Edward' />

        <Routes>

          <Route path='/skills' element={<InfoContainer
            id={0}
            pageName={'Skills'}
            header={'Frontend'}
            text={'JavaScript, TypeScript, ReactJS, Angular, Redux, HTML, CSS, SCSS, NPM, BootStrap, MaterialUI, Yarn, TailwindCSS, Vite'}
          />} />

          <Route path='/contacts' element={<InfoContainer
            id={0}
            pageName={'Contacts'}
            header={['Location', 'Telegram']}
            text={'Ukraine or Armenia'}
          />} />

          <Route exact path='/' element={<Projects
            pageTitle={'Projects'}
            repos={repos}
            title={repos.name}
          />}
          />

        </Routes>

      </BrowserRouter>

    </div>
  );
}
export default App;
