import React, { Component } from 'react'
import {
    IconImg,
    IconImg2,
    IconImg3,
    IconImg4,
    IconImg5
} from "../styles/iconImagesStyles"
import pointImage from "../images/logot/instagram.svg";

class IconImages extends Component {

    changePosition(e) {
        this.props.functionCallFromParent(e);
    }

    render() {
        return (
            <div style={{display: this.props.isMobile ? "block" : "none"}}>
                <div>
                    <IconImg 
                        id="Page1"
                        className="icons"
                        src={pointImage} 
                        alt="material-icon"
                        style={{display: this.props.zero ? "block" : "none"}}
                        onClick={(e) => this.changePosition(e)}/>
                </div>
                <div>
                    <IconImg2 
                        id="Page2"
                        className="icons" 
                        src={pointImage} 
                        alt="bio-icon"
                        style={{display: this.props.one ? "block" : "none"}}
                        onClick={(e) => this.changePosition(e)}/>
                </div>
                <div>
                    <IconImg3 
                        id="Page3"
                        className="icons" 
                        src={pointImage} 
                        alt="energy-icon"
                        style={{display: this.props.two ? "block" : "none"}}
                        onClick={(e) => this.changePosition(e)}/>
                </div>
                 <div>
                    <IconImg4 
                        id="Page4"
                        className="icons" 
                        src={pointImage}
                        alt="services-icon"
                        style={{display: this.props.three ? "block" : "none"}}
                        onClick={(e) => this.changePosition(e)}/>
                </div>
                <div>
                    <IconImg5 
                        id="Page5"
                        className="icons" 
                        src={pointImage} 
                        alt="first-icon"
                        style={{display: this.props.four ? "block" : "none"}}
                        onClick={(e) => this.changePosition(e)}/>
                </div>
            </div>
        )
    }
}

export default IconImages