import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';

function App() {
  return (

    <div className="App">
      
      <div className="Header">
        <Header/>
      </div>

      <div className='Content'>
        <p>Content</p>
      </div>

      <div className='Footer'>
        <p>Footer</p>
      </div>

    </div>
  );
}

export default App;
