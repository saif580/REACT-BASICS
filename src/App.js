import logo from './logo.svg';
import React, { Component,useState } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
//Import Person from Person folder
import Person from './Person/Person'
import UserInput from './UserInput/UserInput.js';
import UserOutput from './UserOutput/UserOuput';

//Class based components and functional components
class App extends Component {
    state={
      person: [
        { name: 'Saif', experience: 1 },
        { name: 'Arpit', experience: 4 },
        { name: 'Nitin', experience: 2 }
      ],
      username:[
        {name:'saif'},
        {name:'saiful'},
        {name:'saiful hasan'}
      ]
    };
    switchNameHandler=(newName)=>{
        this.setState({
          person: [
            { name: newName, experience: 1 },
            { name: 'Arpit pandey', experience: 3 },
            { name: 'Nitin khare', experience: 2 }
          ]
        })
      }
    
    nameChangeHandler=(event)=>{
      this.setState({
        person: [
          { name: event.target.value, experience: 1 },
          { name: 'Arpit pandey', experience: 3 },
          { name: 'Nitin khare', experience: 2 }
        ]
      })
    }
    usernameChangeHandler=(event)=>{
      this.setState({
        username:[
          {name:event.target.value},
          {name:event.target.value},
          {name:'saiful hasan'}
        ]
      })
    }

    render(){
      const style={
        backgroundColor:"white",
        font:"inherit",
        border:"1px solid blue",
        padding:"8px",
        cursor:"pointer"
      }
      
    return (
    // Class should be written as className i.e camel case 
      //There should be only one root element
      <div className="App">
        <UserInput change={this.usernameChangeHandler}/>
        <UserOutput username={this.state.username[0].name} />
        <UserOutput username={this.state.username[1].name} />
        <UserOutput username="saiful hasan"  />
        <h1>Hello world!! My name is Saif</h1>
        <p>This is  really working!</p>
        
        <button  style={style} onClick={()=>this.switchNameHandler("Saiful hasan")}>Switch Name</button>
        <Person
          name={this.state.person[1].name}
          experience={this.state.person[1].experience} >I love coding!</Person>
        <Person 
          name={this.state.person[0].name} 
          experience={this.state.person[0].experience} 
            click={this.switchNameHandler.bind(this,"saif")}
            changed={this.nameChangeHandler} 
          />
        <Person 
          name={this.state.person[2].name} 
          experience={this.state.person[2].experience} />
          
      </div>
      //pass anything Person which can be accessible using props in different components
    );
    }
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
