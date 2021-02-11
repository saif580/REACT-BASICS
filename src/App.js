import logo from './logo.svg';
import React, { Component,useState } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
//Import Person from Person folder
import Person from './Person/Person'

//Class based components and functional components
const App=props=> {
    const [personsState,setPersonsState]=useState({
      person: [
        { name: 'Saif', experience: 1 },
        { name: 'Arpit', experience: 4 },
        { name: 'Nitin', experience: 2 }
      ]
    });
    const switchNameHandler=()=>{
      setPersonsState({
        person: [
          { name: 'Saiful hasan', experience: 1 },
          { name: 'Arpit pandey', experience: 3 },
          { name: 'Nitin khare', experience: 2 }
        ]
      })
    }
    return (
      //Class should be written as className i.e camel case 
      //There should be only one root element
      <div className="App">
        <h1>Hello world!! My name is Saif</h1>
        <p>This is  really working!</p>
        <button onClick={switchNameHandler}>Switch Name</button>
        <Person name={personsState.person[0].name} experience={personsState.person[0].experience} />
        <Person name={personsState.person[1].name} experience={personsState.person[1].experience}>I love coding!</Person>
        <Person name={personsState.person[2].name} experience={personsState.person[2].experience} />
      </div>
      //pass anything Person which can be accessible using props in different components
    );
  
  // return React.createElement('div',{className:'App'},React.createElement('h1',null,'Hello my anme is saiful hasan'))
}

// state = {
//   person: [
//     { name: 'Saif', experience: 1 },
//     { name: 'Arpit', experience: 4 },
//     { name: 'Nitin', experience: 2 }
//   ]
// }
// switchNameHandler=()=>{
//   //DONT DO THIS
//   //Dont do this this.state.person[0].name="Saiful Hasan"
//   this.setState({
//     person: [
//       { name: 'Saiful hasan', experience: 1 },
//       { name: 'Arpit pandey', experience: 3 },
//       { name: 'Nitin khare', experience: 2 }
//     ]
//   })
// }

export default App;
