import React from 'react';
import "./button.css";

function Button({name, onClick, disabled}) {

    return (
                <button
                    onClick={onClick}
                    disabled = {disabled}
                >{name}
                </button>
    );
}

export default Button;