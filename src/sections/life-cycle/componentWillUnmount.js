import React, { Component } from 'react'

class ComponenteADesmontar extends Component {
    state= {windowWidth : 0}

    _updateStateWithWindowWidth = () =>{
        this.setState({windowWidth: document.body.clientWidth})
    }

    componentDidMount () {
        this._updateStateWithWindowWidth()
        window.addEventListener(
            'resize',
            this._updateStateWithWindowWidth
        )
    }

    componentWillUnmount () {
        window.removeEventListener(
            'resize',
            this._updateStateWithWindowWidth
        )
    }

    render() {
      return (
        <div>
          <p>Ancho de la ventana {this.state.windowWidth}</p>
        </div>
      )
    };
}

class EjemploDeComponentWillUnmount extends Component {
    state = {mostrarComponente : true}
    render() {
        if (this.state.mostrarComponente){
            return (
              <div>
                <h4>Ciclo de desmontaje: ComponentWillUnmount</h4>
                <ComponenteADesmontar/>
                <button onClick={()=> this.setState({mostrarComponente: false })}>
                    Desmontar Componente
                </button>
              </div>
            )
        }
        return (
            <p>Componente Desmontando</p>
        )
    };
}

export default EjemploDeComponentWillUnmount;