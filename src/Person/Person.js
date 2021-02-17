import './Person.css'
import Radium from 'radium'
//Functional based Component 
//function can be created using es5 or es6
const Person=(props)=>{
    const style={
        '@media(min-width:500px)':{
            width:'450px'
        }
    }
    //props.children it is a reserve word to access children of a particular component
    return (
        <div className="Person" style={style}>
            <p onClick={props.click}>I'm a person! and my name is {props.name} and I have {props.experience} yrs of expirence</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
}

export default Radium(Person);