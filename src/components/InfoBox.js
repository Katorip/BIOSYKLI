import React, { Component } from 'react'
import { 
    InfoBoxDiv
} from "../styles/infoboxStyles"
import {
    CloseButtonStyle
} from "../styles/welcomeboxStyle"

class InfoBox extends Component {

    render() {

        return (
            <InfoBoxDiv 
                style={{
                    display: this.props.displayFromParent ? "block": "none",
                    top: (this.props.topFromParent - 18) + "px", 
                    left: (this.props.leftFromParent + 40) + "px"}}>
                <CloseButtonStyle 
                    className="closebtn" 
                    >
                        &times;
                </CloseButtonStyle>               
            </InfoBoxDiv>
        )
    }
}

export default InfoBox