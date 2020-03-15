import React, { Component } from 'react';
import InputRange from "react-input-range";
import 'react-input-range/lib/css/index.css';
import Button from "../Button"
import PaletteCase from "./PaletteCase/PaletteCase"
import Popup from "./Popup/Popup"
import './Menu.css';


class Menu extends Component {
    constructor() {
        super();
        this.handleColorG = this.handleColorG.bind(this);
        this.handleSize = this.handleSize.bind(this);
        this.clearCanvasG = this.clearCanvasG.bind(this);
        this.togglePicker = this.togglePicker.bind(this);
        this.confirm = this.confirm.bind(this);
        this.state = {
            value: 6,
            keyVal:'',
            showPopup: false,
            showConfirm: false
        };

    }
    
    clearCanvasG () {
        this.props.clearCanvas();
        this.confirm();
    }
    
    handleColorG (data) {
        this.props.handleColorGG(data);
    }
    
    handleSize (data) {
        var item = data.toString();
        this.props.handleSizeG(item);
    }

    togglePicker() {
        
        this.setState({
            showPopup: !this.state.showPopup
        });    
    }
    
    confirm() {
        this.setState({
            showConfirm: !this.state.showConfirm     
        });
    }
    
 render() {
        return (
            <div className="menu" id="menu">
                <a href="#" className="closebtn" onClick={this.props.toggleMenu}>&times;</a>
                    {this.state.showConfirm ?
                        <Popup 
                            toggleConfirm={this.confirm}
                            clearCanvasG={this.clearCanvasG}
                        />
                    : null
                    }
                <h3>Colors</h3>
                <PaletteCase 
                    handleColorG={this.handleColorG}
                />
              <h3 className="hr">________________________</h3>
               <div className="catcher">
                    <h3>Brush Size</h3>
                    <InputRange
                        name="Brush Size"
                        minValue={1}
                        maxValue={20}
                        label="Brush Size"
                        value={this.props.size}
                        onChange={value => this.setState({ value })}
                        onChangeComplete={value => this.handleSize(value)}
                    />
                </div>
                <h3 className="hr">________________________</h3>
                <div className="catcher center">
                    <Button label= "save" className="selectbtn" />
                    <Button label= "undo" className="selectbtn" onClick={this.props.undoLast} />
                    <Button 
                        className="selectbtn" 
                        onClick={this.confirm} 
                        label="New" 
                    />


                </div>
            </div>
        );
    }
}
export default Menu;