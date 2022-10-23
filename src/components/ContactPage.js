import React, { Component } from 'react'
import LogoImages from "./LogoImages"
// Styled components
import { 
    HeaderImgDiv, 
    InfoPageMainDiv,
    InfoTextDiv,
    InfoPageSidenav,
    InfoHead,
    InfoText,
    SideNavList,
    SideNavHead,
    SideNavUL
} from "../styles/infoPageStyles"
import {
    HeaderDiv,
    HeaderButtonDiv,
    HeaderButtons,
    LangImagesDiv,
    LangImages
} from "../styles/headerStyles"
// Flag icons
import finImage from "../images/icons/fin.svg";
import usaImage from "../images/icons/eng.svg";
// Language
import { withTranslation } from 'react-i18next';
// Link
import { NavLink as Link } from "react-router-dom";

// Contact page of the website
class ContactPage extends Component {
    render() {

        const { t } = this.props;

        return (
            <InfoPageMainDiv>
                <HeaderDiv>
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
                </HeaderDiv>
                <HeaderImgDiv></HeaderImgDiv>
                <InfoTextDiv>
                        <InfoHead>{t("contact.head")}</InfoHead>
                        <InfoText>{t("contact.text")}</InfoText>
                </InfoTextDiv>
                <InfoPageSidenav>
                    <SideNavHead>{t("contact.head")}</SideNavHead>
                    <SideNavUL>
                        <SideNavList>Yhteystieto 1</SideNavList>
                        <SideNavList>Yhteystieto 2</SideNavList>
                    </SideNavUL>
                </InfoPageSidenav>
                <LogoImages></LogoImages>
            </InfoPageMainDiv>
        )
    }
}

export default withTranslation()(ContactPage);