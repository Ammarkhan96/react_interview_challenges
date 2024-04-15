import logo from './home.jpg';
import './App.css';
import Typical from 'react-typical';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       <h1>
        <Typical 
        loop={Infinity}
        wrapper='p'
        steps={[
          'Hi, I am Ammar Khan', 2000,
          'I live in Karachi', 1600,
          "I'm Front-end Developer", 2000,
          'I like to learn new technologies', 2000,
          "Among the technologies that I dominate are:", 3000,
          "HTML",1300,
          "CSS", 1300,
          "Javascript", 1300,
          "Typescript",1300,
          "Tailwind", 1300,
          "MongoDB", 1300,
          "I'm currently studying Reactjs and Nextjs", 1500                
        ]}
        />
       </h1>
      </header>
    </div>
  );
}

export default App;