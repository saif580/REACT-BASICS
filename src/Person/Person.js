//Functional based Component 
//function can be created using es5 or es6
const Person=(props)=>{
    //props.children it is a reserve word to access children of a particular component
    return (
        <div>
            <p onClick={props.click}>I'm a person! and my name is {props.name} and I have {props.experience} yrs of expirence</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={this.name}/>
        </div>
    )
}

export default Person;