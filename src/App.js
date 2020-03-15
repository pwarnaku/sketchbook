import React, { Component } from 'react';
import logo from './logo.svg';
import CanvasDraw from "react-canvas-draw";
import Menu from "./Menu/Menu"
import Button from "./Button"
import './App.css';

class App extends Component {
    constructor() {
        super()
        this.toggleMenu = this.toggleMenu.bind(this);
        this.handleColorGG = this.handleColorGG.bind(this);
        this.handleSizeG = this.handleSizeG.bind(this);
        //this.setCustomColorGG = this.setCustomColorGG.bind(this);
        this.state = {
            color: "#000000",
            size: "6",
            width: (window.innerWidth),
            height:(window.innerHeight-90),
            showMenu: false, 
            canvasDisabled: false,
            customPalette:['teal','teal','teal','teal','teal','teal']
            };
    }
    
    toggleMenu() {
        this.setState({
            showMenu: !this.state.showMenu
        });
    }

    handleColorGG(data) {
        this.setState({
            color: data
        });
        this.toggleMenu();
    }
    
   // setCustomColorGG(data, id){ this.setState({ colorVal[id] : data }) this.handleColorGG(data) }
    
    handleSizeG(data) {
        this.setState({
            size: data
        });
        this.toggleMenu();
    }

  render() {
    return (
      <div id="page">
        <div className="header">
            <Button 
                className="navbtn"
                id="menubtn" 
                href="#menu"
                label="MENU"
                onClick={this.toggleMenu}
            />
            <div className="title">Sketch Book</div>
        </div>
        {this.state.showMenu ?
            <Menu 
                toggleMenu={this.toggleMenu}
                color={this.state.color}
                handleColorGG={this.handleColorGG}
                handleSizeG={this.handleSizeG}
                size={this.state.size}
                clearCanvas={() => {this.saveableCanvas.clear()}}
                undoLast={() => {this.saveableCanvas.undo()}}
            />
        : null
        }
       <div className="canvasContainer">
           <CanvasDraw 
            className="main" 
            ref={canvasDraw => (this.saveableCanvas = canvasDraw)}
            disabled={this.state.showMenu}
            brushColor={this.state.color} 
            brushSize={this.state.size}
            canvasWidth={this.state.width} 
            canvasHeight={this.state.height}
        /> 
      </div>
      <div className="footer"></div>
    </div>
    );
  }
}

export default App;
