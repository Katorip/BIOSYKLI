import React, { Component } from 'react'
import { 
    HeaderDiv, 
    HeaderButtons,
    HeaderButtonDiv, 
    LangImagesDiv,
    LangImages,
    SliderContainer,
    Slider,
    LittleCircle,
    DropDiv,
    DropText,
    BigCircle,
} from "../styles/headerStyles"
import finImage from "../images/icons/fin.svg";
import usaImage from "../images/icons/eng.svg";
import { withTranslation } from 'react-i18next';
import { NavLink as Link } from "react-router-dom";

export class Header extends Component { 

    constructor(props) {
        super(props)

        let value = 50;     // Slider %

        this.state = {
            size: 50,       // Start value of slider
            show: false,    // Show slider value bubble
            thumb: 10,      // Slider thumbs width
            dropLeft: 0,    // Sliders value bubbles left position
            dropTop: 0      // Sliders value bubbles top position
        }

        // Zoom out to map
        this.zoomOut=(e)=>{
            e.preventDefault();              

            if (value > 0) {
                value = value - 10;

                this.setState({
                    size: value
                });

                this.props.functionCallFromParent(value);
            }   
        }

        // Zoom in to map
        this.zoomIn=(e)=>{
            e.preventDefault();              

            if (value < 100) {
                value = value + 10;

                this.setState({
                    size: value
                });

                this.props.functionCallFromParent(value);
            }   
        }

        // Bind functions
        this.sliderValue = this.sliderValue.bind(this)
        this.showValue = this.showValue.bind(this)
        this.hideValue = this.hideValue.bind(this)
        this.calculatePosition = this.calculatePosition.bind(this)
    }

    // Slide the slider
    sliderValue(e) {
        e.preventDefault();
        // Get slider value
        let value = e.target.value

        // Set new value
        this.setState({
            size: value
        });  

        // Call slider value calculate function
        this.calculatePosition(value);
        // Send new value to FunctionDiv
        this.props.functionCallFromParent(value);
    }

    // Show slider value when hovering over slider
    showValue() {
        // Call slider value calculate function      
        this.calculatePosition(this.state.size);

        // Show slider value bubble
        this.setState({
            show: true
        });    
    }

    // Hide slider value bubble when hovering stops
    hideValue() {
        this.setState({
            show: false
        });
    }

    // Calculate sliders value bubbles position
    calculatePosition(size) {
        const range = document.querySelector("#slider");
        const bubble = document.querySelector("#droptext");
        let coords = range.getBoundingClientRect();

        // Calculate how many pixels are 1% of width
        let percent = coords.width / 100;

        // Calculate and set new values
        this.setState({
            dropLeft: coords.left + (size * percent) - (this.state.thumb + (size * 0.1)) - (this.state.thumb / 2) + "px",
            dropTop: coords.bottom + 5 + "px"
        });

        // Set new bubble text
        bubble.innerHTML = size + "%";
    }

    render() {

        const { t } = this.props;

        return (
            <HeaderDiv id="header">
                <HeaderButtonDiv>
                    <HeaderButtons 
                        as={Link} 
                        to="/" 
                        activeStyle={{ backgroundColor: "#209aad"}} exact
                        style={{textDecoration: "none"}}>
                            {t("headerbuttons.1")}
                    </HeaderButtons>
                    <HeaderButtons 
                        as={Link} 
                        to="/About" 
                        activeStyle={{ backgroundColor: "#209aad"}} 
                        style={{textDecoration: "none"}}>
                            {t("headerbuttons.2")}
                    </HeaderButtons>
                    <HeaderButtons 
                        as={Link} 
                        to="/Contact" 
                        activeStyle={{ backgroundColor: "#209aad"}} 
                        style={{textDecoration: "none"}}>
                            {t("headerbuttons.3")}
                    </HeaderButtons>
                    <LangImagesDiv>
                        <LangImages src={finImage} onClick={() => this.props.i18n.changeLanguage("fin")}/>
                        <LangImages src={usaImage} onClick={() => this.props.i18n.changeLanguage("en")}/>
                    </LangImagesDiv>
                </HeaderButtonDiv>

                <SliderContainer>
                    <LittleCircle onClick={this.zoomOut.bind(this)}></LittleCircle>
                    <Slider 
                        id="slider"
                        onMouseOver={this.showValue}
                        onMouseLeave={this.hideValue}
                        type="range" 
                        min="0" 
                        max="100" 
                        step="10"
                        onChange={(e) => {this.sliderValue(e)}}
                        style={{background: "linear-gradient(to right, #4baf4f 0%, #4baf4f " + this.state.size + "%, lightgrey " + this.state.size + "%, lightgrey 100%)"}}
                        >                                              
                    </Slider>
                    <DropDiv 
                        id="drop" 
                        style={{
                            display: this.state.show ? "block" : "none", 
                            left: this.state.dropLeft,
                            top: this.state.dropTop
                        }}>
                        <DropText id="droptext">50%</DropText>
                    </DropDiv>
                    <BigCircle onClick={this.zoomIn.bind(this)}></BigCircle>
                </SliderContainer>                                            
            </HeaderDiv>
        )
    }
}

export default withTranslation()(Header);