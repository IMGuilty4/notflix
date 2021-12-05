import React from 'react';
import './Button.sass';

function Button( {buttonTitle, handleClick, movie} ) {
    return (
        <button className="button" onClick={() => handleClick(movie)}>
            {buttonTitle}
        </button>  
    )
}

export default Button
