import React, { Component } from 'react';

class BotonQueLanzaError extends Component {
    state= { throwError: false}
    render() {
        if(this.state.throwError){
            throw new Error('Error lanzado por el boton')
        }

      return (
        <button onClick={() => this.setState({throwError: true})}>
            Lanza Error
        </button>
      )
    };
}

class EjemplodeComponentDidCatch extends Component{
    state= {hasError: false, errorMsg: ''}

    componentDidCatch (error, errorInfo){
        this.setState({hasError: true, errorMsg: error.toString()})
    }

    render() {
        if(this.state.hasError){
            return (
                <div>
                    <p>Error en el componente: {this.state.errorMsg}</p>
                    <button onClick={()=> {this.setState({hasError: false})}}>
                        Volver a la aplicación
                    </button>
                </div>
            )
        }
      return (
        <div>
          <p>Ciclo de montaje: componentDidCatch</p>
          <BotonQueLanzaError/>
        </div>
      )
    };
}

export default EjemplodeComponentDidCatch;