import React, { Component } from 'react';
import Picker from "./Picker/Picker"

class PaletteSmart extends Component {
    constructor(props) {
    super();
            this.state = {
                isSet: false,
                backgroundColor: 'teal',
                showPicker: false,
                id: '',
            };    
        this.onItemClick = this.onItemClick.bind(this);
        this.colorUpdate = this.colorUpdate.bind(this);
        this.togglePicker = this.togglePicker.bind(this);
        this.handleColorC = this.handleColorC.bind(this);
        
    }
    
    ComponentDidMount(){
        this.setState({
            id: this.props.id
        })
    }
    
    togglePicker() {
        console.log(this.props.id)
        this.setState({
            showPicker: !this.state.showPicker
        });    
    }
    
    colorUpdate(data) {
        this.setState({
            backgroundColor: data
        })
    }
    
    handleColorC (data) {
        this.props.handleColorP(data)
    }
    
    onItemClick(){
        if (this.state.isSet == false) {
            this.setState ({isSet : true})
            this.togglePicker();
        }
        else 
         this.handleColorC(this.state.backgroundColor);
    }
    
    render() {
        const styles = {
            containerStyle: {
                backgroundColor: this.state.backgroundColor,
            }
        };
        const { containerStyle } = styles;
        
        return (  
            <div>
                {this.state.showPicker ?
                    <Picker 
                        colorUpdate = {this.colorUpdate}
                        handleColorC = {this.handleColorC}
                        togglePicker = {this.togglePicker}
                    />
                : null 
                }
                <div style={containerStyle} className="palette" onClick={this.onItemClick} ></div>
            </div>
        );
    }
}
export default PaletteSmart;