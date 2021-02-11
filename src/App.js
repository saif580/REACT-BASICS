import logo from './logo.svg';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
//Import Person from Person folder
import Person from './Person/Person'

//Class based components and functional components
class App extends Component {
  state = {
    person: [
      { name: 'Saif', experience: 1 },
      { name: 'Arpit', experience: 4 },
      { name: 'Nitin', experience: 2 }
    ]
  }
  switchNameHandler=()=>{
    //DONT DO THIS
    //Dont do this this.state.person[0].name="Saiful Hasan"
    this.setState({
      person: [
        { name: 'Saiful hasan', experience: 1 },
        { name: 'Arpit pandey', experience: 3 },
        { name: 'Nitin khare', experience: 2 }
      ]
    })
  }
  render() {
    return (
      //Class should be written as className i.e camel case 
      //There should be only one root element
      <div className="App">
        <h1>Hello world!! My name is Saif</h1>
        <p>This is  really working!</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.person[0].name} experience={this.state.person[0].experience} />
        <Person name={this.state.person[1].name} experience={this.state.person[1].experience}>I love coding!</Person>
        <Person name={this.state.person[2].name} experience={this.state.person[2].experience} />
      </div>
      //pass anything Person which can be accessible using props in different components
    );
  }
  // return React.createElement('div',{className:'App'},React.createElement('h1',null,'Hello my anme is saiful hasan'))
}

export default App;
