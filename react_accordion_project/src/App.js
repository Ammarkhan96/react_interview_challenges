import React from 'react';
import './App.css';
import Accordion from './components/Accordion';

function App() {
  return (
    <div className="App">
      <h1>Accordion React Project</h1>
      <div className="accordion-container">
        <Accordion
          title="What is react?"
          content="React is an open source Javascript library designed to create user interfaces to facilitate the development of single-page applications.."
        />

        <Accordion
          title="What language does React use?"
          content="To avoid this, React proposes an architecture based on components, which are pieces of code that use HTML, CSS and Javascript, so that they contain both logic and presentation.."
        />

        <Accordion
          title="Why work with React?"
          content="The main advantage of React is being able to generate the DOM (“Document Object Model”, structure of the elements that are generated in the web browser when loading a page) dynamically."
        />

        <Accordion
          title="What architecture does React use???"
          content="React manages an architecture called Flux, which is similar to MVC since it also contains its model, view and controllers but is designed as a unidirectional data flow."
        />

        <Accordion
          title="What design pattern does React use?"
          content="Render props is a design pattern for react components, this means that it is a guide on how to make a component that meets certain implementation characteristics."
        />

        <Accordion
          title="Why is React a library and not a framework?"
          content="React allows you to organize the code based on reusable components. Those components have a view, expressed in JSX code, that is capable of reacting to changes in the data handled by those components. Nothing more than that, so up to this point it is clear that React is not a framework."
        />

        <Accordion
          title="Why is React so popular?"
          content="ReactJS is popular because it shows a practical and improved handling of web development. Although it is true that other libraries do similar things, for example VueJs and Angular, among others, behind ReactJS is Facebook."
        />

      </div>
    </div>
  );
}

export default App;