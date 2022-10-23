import React, { Component } from 'react'
import { 
    BoxStyle, 
    CloseButtonDiv,
    CloseButtonStyle,
    TabTextDiv,
    TabHeadStyle,
    TabTextStyle,   
    TabButton
 } from "../styles/welcomeboxStyle"
 import { withTranslation } from 'react-i18next';

export class WelcomeBox extends Component {

    constructor(props) {
        super(props)

        this.state = {
            clicked: false
        }

        this.closeTab = this.closeTab.bind(this)
    }

    closeTab() {
        this.setState({
            clicked: true
        });
    }

    render() {

        const { t } = this.props;

        const inputStyle = {
            display: "none"
        };

        return (
            <BoxStyle className="welBox" style={this.state.clicked ? inputStyle : null}>
                <CloseButtonDiv>
                    <CloseButtonStyle 
                        className="closebtn" 
                        onClick={this.closeTab}>
                            &times;
                    </CloseButtonStyle>
                </CloseButtonDiv>
                <TabTextDiv>
                <TabHeadStyle>{t("welcomebox.1")}</TabHeadStyle>
                
                
                <TabTextStyle>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Ut interdum porttitor quam, vitae scelerisque sapien elementum et. Nulla facilisi. 
                    Cras metus metus, suscipit vel urna quis, maximus ornare metus.</TabTextStyle>
                    <TabTextStyle>
                    Phasellus iaculis blandit libero cursus:  
                    </TabTextStyle>
                    <TabTextStyle>- Vivamus imperdiet lectus mauris</TabTextStyle>
                    <TabTextStyle>- volutpat euismod turpis consectetur vel</TabTextStyle>
                </TabTextDiv>
                <TabButton onClick={this.closeTab}>OK!</TabButton> 
            </BoxStyle>
        )
    }
}

export default withTranslation()(WelcomeBox);