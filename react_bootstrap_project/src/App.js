import React from 'react';
import { Navbar } from 'react-bootstrap';
import Cards from './components/Cards';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar bg='dark' variant='dark' expand='lg' sticky='top' collapseOnSelect className='p-3' >

      <Navbar.Brand href='#home'>React Bootstrap</Navbar.Brand>
      </Navbar>
      <Cards />
    </div>
  );
}

export default App;
