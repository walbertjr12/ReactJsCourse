import React, { Component, PureComponent } from 'react';
import PropTypes from 'prop-types';

const ANIMAL_IMAGES = {
    panda: 'https://goo.gl/oNbtoq',
    cat: 'https://goo.gl/PoQQXb',
    dolphin: 'https://goo.gl/BbiKCd'
}

const ANIMAL = Object.keys(ANIMAL_IMAGES)

class AnimalImages extends PureComponent {
    state = { src: ANIMAL_IMAGES[this.props.animal]}
    
    static getDerivedStateFromProps(props, state) {
      console.log('1 - getDerivedStateFromProps')
        if (ANIMAL_IMAGES[props.animal] !== state.src) {
          return {
            src: ANIMAL_IMAGES[props.animal]
          };
        }
    
        // Return null to indicate no change to state.
        return null;
      }

      /*shouldComponentUpdate (nextProps){
        console.log('shouldComponentUpdate')
        return this.props.animal !== nextProps.animal;
      }*/

      /*componentWillUpdate (nextProps, nextState) {
        const img = document.querySelector('img')
        img.animate([{
          filter: 'blur(0px)'
        }, {
          filter: 'blur(2px)'
        }], {
          duration: 500,
          easing: 'ease'
        })
      }*/

    render() {
      console.log('render')
      return (
        <div>
          <p>Selected {this.props.animal}</p>
          <img
            alt={this.props.animal}
            src={this.state.src}
            width='250'
          />
        </div>
      )
    };
}

AnimalImages.propTypes = {
    animal: PropTypes.oneOf(ANIMAL)
}

class EjemploDeCicloDeActualizacion extends Component{
    state= {animal: 'panda'}

    _renderAnimalButton = (animal) =>{
        return(
            <button 
                //disabled={animal === this.state.animal}
                key={animal} 
                onClick={()=> this.setState({animal})}>
                    {animal}
            </button>
        )
    }
    render(){
        return (
            <div>
                <h4>Ciclo de Actualización, Ejemplo de: ComponentWillReceiveProps</h4>
                {ANIMAL.map(this._renderAnimalButton)}
                <AnimalImages animal={this.state.animal}/>
            </div>
        )
    }
}

export default EjemploDeCicloDeActualizacion;