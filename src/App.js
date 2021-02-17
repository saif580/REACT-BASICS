import logo from './logo.svg';
import React, { Component,useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components'
import './App.css';
// import Radium, { StyleRoot } from 'radium';
//Import Person from Person folder
import Person from './Person/Person'
import UserInput from './UserInput/UserInput.js';
import UserOutput from './UserOutput/UserOuput';

const StyledButton=styled.button`
      background-color:green;
      color:white;
      font:inherit;
      border:1px solid blue;
      padding:8px;
      cursor:pointer;

      &:hover{
        background-color:lightgreen;
        color:black;
      }
`;

//Class based components and functional components
class App extends Component {
    state={
      person: [
        { key:"sdad", name: 'Saif', experience: 1 },
        { key:"ewrwerw", name: 'Arpit', experience: 4 },
        { key:"erwr", name: 'Nitin', experience: 2 }
      ],
      username:[
        {name:'saif'},
        {name:'saiful'},
        {name:'saiful hasan'}
      ],
      showPerson:false
    };
    // switchNameHandler=(newName)=>{
    //     this.setState({
    //       person: [
    //         { name: newName, experience: 1 },
    //         { name: 'Arpit pandey', experience: 3 },
    //         { name: 'Nitin khare', experience: 2 }
    //       ]
    //     })
    //   }

    deletePersonHandle=(personIndex)=>{
      // const persons= this.state.person;
      const persons=[...this.state.person]
      persons.splice(personIndex,1);
      this.setState({person:persons})
    }
    
    nameChangeHandler=(event,id)=>{
      const personIndex=this.state.person.findIndex( p=>{
        return p.id===id
      })
      const person={
        ...this.state.person[personIndex]
      }
      person.name=event.target.value;
      
      const persons=[...this.state.person];
      persons[personIndex]=person;
      this.setState({person:persons})
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
    togglePersonHanddler=()=>{
      const show=this.state.showPerson;
      this.setState({showPerson:!show})
    }
    render(){
      const style={
        backgroundColor:"green",
        color:"white",
        font:"inherit",
        border:"1px solid blue",
        padding:"8px",
        cursor:"pointer",
        ':hover':{
          backgroundColor:'lightgreen',
          color:'black'
        }
      };

      let persons=null;

      if(this.state.showPerson){
        persons=(
          <div>
          {this.state.person.map((person,index)=>{
            return <Person 
            key={person.id}
            click={()=>this.deletePersonHandle(index)}
            name={person.name}
            experience={person.experience}
            changed={(event)=>this.nameChangeHandler(event,person.id)}/>
          })}
          {/* <Person
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
            experience={this.state.person[2].experience} /> */}
          </div>
        )
        style.backgroundColor='red';
        style[':hover']={
          backgroundColor:'salmon',
          color:'black'
        }
      }
      const classes=[];
      if(this.state.person.length <=2){
        classes.push('red');
      }
      if(this.state.person.length <=1){
        classes.push('bold');
      }

    return (
    // Class should be written as className i.e camel case 
      //There should be only one root element
      // <StyleRoot>
      <div className="App">
        <UserInput change={this.usernameChangeHandler}/>
        <UserOutput username={this.state.username[0].name} />
        <UserOutput username={this.state.username[1].name} />
        <UserOutput username="saiful hasan"  />
        <h1>Hello world!! My name is Saif</h1>
        <p className={classes.join(' ')}>This is  really working!</p>
        
        <StyledButton onClick={this.togglePersonHanddler}>Switch Name</StyledButton>
        {persons}
          
      </div>
      /* </StyleRoot> */
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
