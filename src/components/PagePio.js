import React, { Component } from 'react'
import LogoImages from "./LogoImages"
import { 
    HeaderImgDiv, 
    InfoPageMainDiv,
    InfoTextDiv,
    InfoPageSidenav,
    InfoHead,
    InfoText,
    SideNavHead,
    SideNavUL,
    SideNavList
} from "../styles/infoPageStyles"
import HeaderButton from "./HeaderButton";
import MapComponent from "./Map";
import { withTranslation } from 'react-i18next';

class PagePio extends Component {

    constructor(props){
        super(props);

        this.state = {
            show: 0,
        }

        this.changeText = this.changeText.bind(this)
    }

    changeText(e, i) {
        e.preventDefault();

        this.setState({
            show: i
        });
    }

    render() {

        const { t } = this.props;

        return (
            <div>
                <InfoPageMainDiv>
                    <HeaderButton></HeaderButton>
                    <HeaderImgDiv></HeaderImgDiv>              
                    <InfoTextDiv>
                        <div style={{display: this.state.show === 0 ? "block" : "none"}}>
                            <InfoHead>{t("pioneering.head1")}</InfoHead>
                            <InfoText>{t("pioneering.text1")}</InfoText>
                            <InfoText>{t("links")}</InfoText>
                            <a href="https://www.askonalue.fi/ " target="blank"><InfoText>https://www.askonalue.fi/</InfoText></a>
                            <a href="https://www.renor.fi/renor-oy.html" target="blank"><InfoText>https://www.renor.fi/renor-oy.html</InfoText></a>
                        </div>
                        <InfoHead></InfoHead>
                    </InfoTextDiv>
                    <InfoPageSidenav>
                        <SideNavHead>Edelläkävijyys</SideNavHead>
                        <MapComponent></MapComponent>
                        <SideNavUL>
                            <SideNavList onClick={(e) => this.changeText(e, 0)}>Askonalue</SideNavList>
                        </SideNavUL>
                    </InfoPageSidenav>                   
                </InfoPageMainDiv>
                <LogoImages></LogoImages>
            </div>
        )
    }
}

export default withTranslation()(PagePio);