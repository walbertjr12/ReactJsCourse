import React, {Component} from 'react';

export default class Forms extends Component{
    constructor(){
        super()
        this.state = {
            inputName: '',
            inputTwitter: '@',
            inputTerms: true
        }
    }
    handleSubmit = (e) =>{
        e.preventDefault()
        console.log(this.state)
    }

    handleChange = (e) => {
        console.log('handlechanged')
        console.log(e.target.checked)
        this.setState({inputTerms: e.target.checked})
    }

    render(){
        return (
            <div>
                <h4>Formularios</h4>
                <form onSubmit={this.handleSubmit}>
                    <p>
                        <label htmlFor='name'>Nombre: </label>
                        <input
                        onChange={e=> this.setState({inputName: e.target.value})}
                            id='name'
                            name= 'userName'
                            placeholder="Introduce el nombre"
                            ref={inputElement=> this.inputName = inputElement}
                            value={this.state.inputName}
                        />
                    </p>
                    <p>
                        <label htmlFor='twitter'>Twitter: </label>
                        <input
                            onChange= {e=> this.setState({inputTwitter: e.target.value})}
                            id='twitter'
                            name= 'twitterAccount'
                            placeholder="Introduce tu Twitter"
                            value={this.state.inputTwitter}
                        />
                    </p>
                    <p>
                        <label>
                            <input onChange={this.handleChange} type='checkbox'
                            checked={this.state.inputTerms}/>
                            Acepta los términos de servicio.
                        </label>
                    </p>
                    <button>Enviar</button>
                </form>
            </div>
        )
    }
}