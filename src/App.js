import React from 'react';
import './App.css';
import Header from './Components/Header_Main/Header_Main';
import Footer from './Components/Footer_Main/Footer_Main';
import Body_Main from './Components/Body/Body_Main';



const App = (props) => {
  return (

    <div className="App">
        <Header />
        <Body_Main/>
        <Footer footerinfo = {props.state.SocialLinks} />
        </div>
  );
}


export default App;