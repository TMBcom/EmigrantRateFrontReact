import React from 'react';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import ContentMainPage from './Components/ContentMainPage';

function App() {
  return (

    <div className="App">


      <div className="Header">
        <Header />
      </div>
      <div className='Content'>
        <ContentMainPage />
      </div>
      <div className='Footer'>
        <Footer />
      </div>
    </div>
  );
}


export default App;
