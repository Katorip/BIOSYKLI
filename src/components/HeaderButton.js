import React, { Component } from 'react'
import { 
    HeaderDiv,
    HeaderButtons,
    HeaderButtonDiv, 
    LangImagesDiv,
    LangImages
} from "../styles/headerStyles"
import finImage from "../images/icons/fin.svg";
import usaImage from "../images/icons/eng.svg";
import { withTranslation } from 'react-i18next';
import { NavLink as Link } from "react-router-dom";

class HeaderButton extends Component {
    render() {

        const { t } = this.props;

        return (
            <HeaderDiv>
                <HeaderButtonDiv>
                    <HeaderButtons 
                        as={Link} 
                        to="/"
                        style={{textDecoration: "none"}}>
                            {t("headerbuttons.1")}
                    </HeaderButtons>
                    <HeaderButtons 
                        as={Link} 
                        to="/About" 
                        style={{textDecoration: "none"}}>
                            {t("headerbuttons.2")}
                    </HeaderButtons>
                    <HeaderButtons 
                        as={Link} 
                        to="/Contact" 
                        style={{textDecoration: "none"}}>
                            {t("headerbuttons.3")}
                    </HeaderButtons>
                    <LangImagesDiv>
                        <LangImages src={finImage} onClick={() => this.props.i18n.changeLanguage("fin")}/>
                        <LangImages src={usaImage} onClick={() => this.props.i18n.changeLanguage("en")}/>
                    </LangImagesDiv>
                </HeaderButtonDiv>
            </HeaderDiv>
        )
    }
}

export default withTranslation()(HeaderButton);