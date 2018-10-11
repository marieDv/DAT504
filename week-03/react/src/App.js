import React, { Component } from 'react';
import  Form  from './validation.js';

class App extends Component {

  componentDidMount(){
    this.fetchData();
  }

  onChange = (event) => {
    fetch('', {
      method:'POST',
      body: JSON.stringify(),
      name: 'Marie',
    }).then(response => {
      console.log(response);
    }))
  }
  fetchData = () => {
    fetch("localhost:3000/adressbook")
    .then(response => response.text())
    .then(response => {
      console.log(response)
    })
  }
  render () {
    return(
    <div>
    <button onClick={this.fetchData}></button>
     <PeopleList/>
     </div>
)}
}
const PeopleList = (props) => {
  const listItems = props.people.map(person => <li>{person.name}</li>)
  return (
    <ul>
    {listItems}
    </ul>
  )
}
export default App;
