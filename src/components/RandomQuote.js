import React from 'react';
import axios from 'axios';

import RandomQuoteCard from './RandomQuoteCard';
import './RandomQuote.css';

const sampleSimpson = [
    {
    quote: "By chilling my loins I increase the chances of impregnating my wife.",
    character: "Apu Nahasapeemapetilon",
    image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FApuNahasapeemapetilon.png?1497567511629",
    }
];



class RandomQuote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            simpsons: sampleSimpson[0],
        };
    
        this.getQuote.bind(this);
   
    }

    getQuote = () => {
        axios.get('https://simpsons-quotes-api.herokuapp.com/quotes')
        .then(response => response.data)
        .then(data => {
            this.setState({
                simpsons: data[0],
            })
        })
    }

    render () {
        return (
            <div className="RandomQuote">
                <button
                    type='button'
                    onClick={this.getQuote}
                >Get a new quote</button>
                
                <RandomQuoteCard simpsons={this.state.simpsons} />

            </div>
        )
    }
}


export default RandomQuote;