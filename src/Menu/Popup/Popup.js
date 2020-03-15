import React, { Component } from 'react';
import CircularColor from 'react-circular-color';
import Button from "../../Button"
import './Popup.css';

class Popup extends Component {    
    render() {
        return(
            <div className="popup">
                <h4>Are you sure you want to start a new canvas? this one will be erased</h4>
                    <div className="catcher center">
                        <Button 
                            id="selectbtn" 
                            className="selectbtn" 
                            style={{float: 'left'}}
                             onClick={this.props.toggleConfirm}
                            label="No" />
                        <Button 
                            id="selectbtn" 
                            className="selectbtn" 
                            style={{float: 'right'}}
                             onClick={this.props.clearCanvasG}
                            label="Yes" />
                    </div>
            </div>
        );
    }
}
export default Popup;

