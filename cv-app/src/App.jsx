import React, { Component } from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './scss/styles.scss';
import Header from './components/Header';
import Content1 from './components/Content1';
import Projects from './pages/Projects';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import InfoContainer from './containers/InfoContainer';
import info from './info.json';

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


  const [contacts, setContacts] = useState([])
  useEffect(() => {
    setContacts(info.contacts)
  }, [])
  const skills = info.skills

  return (
    <div className="content">
      <BrowserRouter>
        <Header />
        <Content1 name='Edward' />

        <Routes>

          <Route path='/skills' element={<InfoContainer
            pageName={'Skills'}
            skills={skills}
          // header={skills.header}
          // text={skills.text}
          />} />

          <Route path='/contacts' element={<InfoContainer
            pageName={'Contacts'}
            contacts={contacts}
          // header={contacts.header}
          // text={contacts.text}
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
