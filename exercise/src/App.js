import logo from './logo.svg';
import './App.css';
import HobbyIntroduction from './components/Introduction.js';
import MyProjects from './components/Projects.js'

function App() {
  return (
    <div className="App">
      <h1>My Hobby: Basketball</h1>
      <HobbyIntroduction/> 
      <MyProjects />
    </div>
  );
}

export default App;
