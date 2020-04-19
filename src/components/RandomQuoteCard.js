import React from 'react';
import './RandomQuoteCard.css';

function RandomQuoteCard({simpsons}) {
    return (
        <div className="Card">
            <div className="Quote">{simpsons.quote}</div>
            <img src= {simpsons.image} alt= {simpsons.character}></img>
            <p>{simpsons.character}</p>
        </div>
    )
}


export default RandomQuoteCard;