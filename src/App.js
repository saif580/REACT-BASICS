import logo from './logo.svg';
import React from 'react';
import './App.css';
//Import Person from Person folder
import Person from './Person/Person'

//Class based components and functional components
function App() {
  return (
    //Class should be written as className i.e camel case 
    //There should be only one root element
    <div className="App">
      <h1>Hello world!! My name is Saif</h1>
      <p>This is  really working!</p>
      <Person name="saif" experience="1" />
      <Person name="Arpit" experience="4">I love coding!</Person>
      <Person name="Nitin" experience="2"/>
    </div>
    //pass anything Person which can be accessible using props in different components
  );
  // return React.createElement('div',{className:'App'},React.createElement('h1',null,'Hello my anme is saiful hasan'))
}

export default App;
