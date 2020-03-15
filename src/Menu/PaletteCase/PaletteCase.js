import React, { Component } from 'react';
import Palette from './Palette'
import PaletteSmart from './PaletteSmart'
import './PaletteCase.css';

class PaletteCase extends Component {
    constructor() {
    super();
            this.state = {
                currentId: null
            };
            this.handleColorP = this.handleColorP.bind(this);     
    }
    
    handleColorP(data) {
        this.props.handleColorG(data);
    }
    
    render() {

        return (
            <div className="palette-case">
                        <Palette 
                            className="white" onClick={() => this.handleColorP("#FFFFFF")} color="#FFFFFF" />
                            
                        <Palette 
                            className="red" onClick={() => this.handleColorP("#ED0A3F")} color="#ED0A3F" />
                  
                        <Palette 
                            className="blue" onClick={() => this.handleColorP("#0066FF")} color="#0066FF" />
                   
                        <Palette 
                            className="yellow" onClick={() => this.handleColorP("#FFDF00")} color="#FFDF00" />
                   
                        <Palette 
                            className="black" onClick={() => this.handleColorP("#000000")} color="#000000" />
                   
                        <Palette 
                            className="purple" onClick={() => this.handleColorP("#8359A3")} color="#8359A3" />
                   
                        <Palette 
                            className="pink" onClick={() => this.handleColorP("#FF99CC")} color="#FF99CC" />
                   
                        <Palette 
                            className="green" onClick={() => this.handleColorP("#01A368")} color="#01A368" />
                   
                        <Palette 
                            className="brown" onClick={() => this.handleColorP("#FF861F")} color="#FF861F" />
                   
                        <Palette 
                            className="orange" onClick={() => this.handleColorP("#AF593E")} color="#AF593E" />
                   
                        <Palette 
                            className="grey" onClick={() => this.handleColorP("#788193")} color="#788193" />
            
                        <Palette 
                            className="SkyBlue" onClick={() => this.handleColorP("#76D7EA")} color="#76D7EA" />
                   
                        <PaletteSmart 
                            className="teal" 
                            id="0"
                            handleColorP = {this.handleColorP}
                            color="teal"/>
                    
                        <PaletteSmart 
                            className="teal" 
                            id="1" 
                            handleColorP = {this.handleColorP}     
                            color="teal"/>
                   
                        <PaletteSmart 
                            className="teal" 
                            id="2" 
                            handleColorP = {this.handleColorP}     
                            color="teal"/>
                   
                        <PaletteSmart 
                            className="teal" 
                            id="3" 
                            handleColorP = {this.handleColorP}     
                            color="teal"/>
                   
                        <PaletteSmart 
                            className="teal" 
                            id="4" 
                            handleColorP = {this.handleColorP}     
                            color="teal"/>
                   
                        <PaletteSmart
                            className="teal" 
                            id="5" 
                            handleColorP = {this.handleColorP}     
                            color="teal"/>
                   
                    <div style={{clear:'both'}}></div>
            </div>
        );
    }
}
export default PaletteCase;