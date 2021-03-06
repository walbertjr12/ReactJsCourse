import React, {Component} from 'react';
import PropTypes from 'prop-types'
import logo from './logo.svg';
import './App.css';
import ConditionalSection from './sections/conditional';
import cars from './data/cars.json';
import Forms from './sections/forms';
import FetchExample from './sections/fetch-example';
import EjemploDeCicloDeActualizacion from './sections/life-cycle/ejemploCiclodeActualizacion';
import EjemploDeComponentWillUnmount from './sections/life-cycle/componentWillUnmount';
import EjemplodeComponentDidCatch from './sections/life-cycle/componentDidCatch';

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

class Title extends Component {
  render(){
  return <h1>{this.props.text}</h1>
  }
}

Title.defaultProps = {
  text: 'Titulo por defecto'
}

/*class Contador extends Component {
  constructor(props){
    super(props)
    this.state = {contador: this.props.contadorInicial}
    setInterval(() => {
      this.setState({contador: this.state.contador + 1})
    },1000)
  }
  render(){
  return <ContadorNumero numero = {this.state.contador}/>
  }
}

Contador.defaultProps = {
  contadorInicial: 0
}*/

/*class ContadorNumero extends Component {
  render(){
  return <span>{this.props.numero}</span>
  }
}
*/

class CarItem extends Component{
  render(){
    const {car} = this.props
    return (
      <li>
        <p><strong>Nombre: </strong>{car.name}</p>
        <p><strong>Marca: </strong>{car.company}</p>
      </li>
      )
  }
}

class Box extends Component{
  render(){
    return (
      <div style={{border:'1px solid #000', margin:5, padding: 5}}>
        {this.props.children}
      </div>
    )
  }
}

class Article extends Component {
  static propTypes = {
    author: PropTypes.string.isRequired
  }
  /*constructor(props){
    super(props)
    if(typeof props.author == 'undefined'){
      console.warn('author prop is required')
      throw new Error('author prop is required')
    }
  }*/
  render() {
    const {author, children, date, title} = this.props
    return (
      <section>
        <h2>{title}</h2>
        {author && <p><em>Escrito por {author}</em></p>}
        <Box>{date}</Box>
        <article>
          {children}
        </article>
      </section>
    )
  }
}

class App extends Component {
  constructor(){
    super()
    this.state = {mouseX: 0, mouseY: 0}
    //this.handleMouseMove = this.handleMouseMove.bind(this)
  }

  handleMouseMove = (e) => {
    const {clientX, clientY} = e
    this.setState({
      mouseX: clientX,
      mouseY: clientY
    })
  }

  handleClick (e) {
    console.log(e)
    alert('Hola')
  }
  
  render(){
    const numbers = [1,1,3,4,5];
    return (
      <div>
        <EjemplodeComponentDidCatch/>
        <EjemploDeComponentWillUnmount/>
        <EjemploDeCicloDeActualizacion/>
        <FetchExample/>
        <Article 
          author='Walbert'
          date = {new Date().toLocaleDateString()}
          title='Articulo sobre la prop children'>
            <p>El contenido que envolvemos dentro del componente Article será enviado al componente this.props.children.</p>
            <strong>Y mantiene las etiquetas y componentes que hayas añadido dentro.</strong>
        </Article>
        <Forms/>
        <div>
          <h4>Eventos</h4>
          <button onClick={this.handleClick}>Hi, there</button>
          <div 
          onMouseMove={this.handleMouseMove}
          style={{border: '1px solid #000', marginTop: 10, padding: 10}}>
          <p>{this.state.mouseX}, {this.state.mouseY}</p>
          </div>
        </div>
        <br></br>
        <div>
          <h4>Trabajando con listas de objetos</h4>
          <ul>
            {
              cars.map(car => {
                return <CarItem key={car.id} car={car}/>
              })
            }
          </ul>
        </div>
        <div>
          <h4>Trabajando con Listas</h4>
          {numbers.map((number,index) =>{
            return <p key={index}>Soy el número {number}</p>
          })}
        </div>
        <ConditionalSection/>
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Hello title = 'Welcome'/>
        </div>
        <Title text=''/>
        <Text 
          arrayOfNumer = {[2 , 3, 10]}
          isActivated
          multiply = {(number) => number * 4 }
          number ={2} 
          objectWithInfo = {{key: 'Firts Value', key2: 'otherValue'}}
          text='Texto en string'
          title = {<h1>Este es el titulo</h1>}
        />
        <br></br>
      </div>
      </div>
      
      );
      //<Contador contadorInicial= {5}/>
  }
}

export default App;
