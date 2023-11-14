import React from 'react';
import './App.css';
import Header from './Components/Header_Main/Header_Main';
import Footer from './Components/Footer_Main/Footer_Main';
import Layout from './Components/Body/Layout';
import Body_Main from './Components/Body/Body_Main';


function App() {
  return (

    <div className="App">
        <Header />
        <Body_Main/>
        <Footer />
        </div>
  );
}


export default App;