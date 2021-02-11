//Functional based Component 
//function can be created using es5 or es6
const Person=(props)=>{
    return (
        <p>I'm a person! and my name is {props.name} and I have {props.experience} yrs of expirence</p>
    )
}

export default Person;