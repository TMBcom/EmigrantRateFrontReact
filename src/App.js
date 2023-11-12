import React from 'react';
import './App.css';
import Header from './Components/Header_Main/Header_Main';
import Footer from './Components/Footer_Main/Footer_Main';
import Body from './Components/Body/Body_Main';

function App() {
  return (

    <div className="App">


      <div className="Header">
        <Header />
      </div>
      <div className='Content'>
        <Body />
      </div>
      <div className='Footer'>
        <Footer />
      </div>
    </div>
  );
}


export default App;
