import React from 'react';

function Palette (props) {
        return (
              <div 
                className="palette palette-box" 
                style={{backgroundColor: props.color}}
                onClick={props.onClick}
                >
              </div>     
        )
    }
export default Palette