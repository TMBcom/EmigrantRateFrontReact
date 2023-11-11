import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import ContentMainPage from './Components/Body/ContentMainPage';

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
