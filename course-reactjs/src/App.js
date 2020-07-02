import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

//function Hello(props){
  //return <h2>{props.title}</h2>
//}

//const Hello = (props) => <h2>{props.title}</h2>

class Hello extends Component {
  render () {
    return <h2>{this.props.title}</h2>
  }
}

class Text extends Component {
  render (){
    const {
      arrayOfNumer, 
      isActivated,
      multiply, 
      number, 
      objectWithInfo,
      text,
      title
    } = this.props

  const texttoSegunBool = isActivated ? 'On' : 'Off'
  const mappedNumber = arrayOfNumer.map(multiply)
  return (
    <div>
      {title}
      <p>{text}</p>
      <p>{number}</p>
      <p>{texttoSegunBool}</p>
      <p>{mappedNumber.join(', ')}</p>
      <p>{objectWithInfo.key}</p>
    </div>
  )}
}

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Hello title = 'Welcome'/>
      </div>
      <Text 
        arrayOfNumer = {[2 , 3, 10]}
        isActivated
        multiply = {(number) => number * 4 }
        number ={2} 
        objectWithInfo = {{key: 'Firts Value', key2: 'otherValue'}}
        text='Texto en string'
        title = {<h1>Este es el titulo</h1>}
      />
    </div>
  );
}

export default App;
