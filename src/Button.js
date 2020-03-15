import React from 'react';
import './Button.css'

function Button (props) {
    
        return (
              <button 
                className={props.className}
                onClick={props.onClick}
                href={props.href}
                style={props.style}
                >{props.label}</button>
        )
    }
export default Button