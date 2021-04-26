import React from 'react';
import logo from './logo.svg';
import './App.scss';

import Header from './components/header'
import Title from './components/title'
import Main from './components/main'
import Social from './components/social'
import Footer from './components/footer'

function App() {
  return (
    <>
      <Header/> 
      <Title />
      <Main>
        <p>
          Something new is coming soon. 
          <br>
          </br>
          Find cutting edge skin-care technologies and products at F.E.M
        </p>
      </Main>
      <Social />
      <Footer />
    </>
  )
}
export default App;
