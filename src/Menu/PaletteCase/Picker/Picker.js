import React, { Component } from 'react';
import CircularColor from 'react-circular-color';
import Button from "../../../Button"
import './Picker.css';

class Picker extends Component {
    constructor() {
        super();
        this.state = {
            colorVal: ''
        }
        this.selected = this.selected.bind(this);
        this.handleColorChange = this.handleColorChange.bind(this)
    }

    selected() {
        this.props.colorUpdate(this.state.colorVal);
        this.props.handleColorC(this.state.colorVal);
        console.log(this.state.colorVal)
    }
    
    handleColorChange(color) {
     this.setState ({
         colorVal:color
     })
  }
    
    render() {
        return(
            <div className="picker">
                <a href="#" className="closebtn" onClick={this.props.togglePicker}>&times;</a>
                <h4>Create a custom Color</h4>
                <div>    
                <CircularColor 
                        size={200} 
                        centerRect="true"
                        className="svgContainer"
                        onChange={this.handleColorChange} 
                    />
                </div>
                    <Button 
                        id="selectbtn" 
                        className="selectbtn"
                         onClick={this.selected}
                        label="OK" 
                       />
            </div>
        );
    }
}
export default Picker;
