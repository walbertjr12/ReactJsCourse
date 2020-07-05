import React, {Component} from 'react';

class FetchNetCore extends Component {
    state= {bpi : {}}
    componentDidMount (){
        fetch('https://nomnomapi.azurewebsites.net/api/combos/getproductscombo/?id=3')
            //.then(res => res.json())
            .then(data => {
                const {bpi} = data
                this.setState({bpi})
            })
    }

    _renderCurrencies(){
        const {bpi} = this.state
        const currencies = Object.keys(bpi)
        return currencies.map(currency => (
            <div key={currency}>
                1 BTC is {bpi[currency].rate}
            <span> {currency}</span>
            </div>
        ))
    }

    render(){
        return (
            <div>
                <h4>BitCoin Price Index</h4>
                {this._renderCurrencies()}
            </div>
        )
    }
}

export default FetchNetCore;