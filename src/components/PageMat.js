import React, { Component } from 'react'
import LogoImages from "./LogoImages"
import { 
    HeaderImgDiv, 
    InfoPageMainDiv,
    InfoTextDiv,
    InfoPageSidenav,
    InfoHead,
    InfoTextItalic,
    InfoText,
    InfoTextUL,
    InfoTextList,
    SideNavList,
    SideNavHead,
    SideNavUL
} from "../styles/infoPageStyles"
import HeaderButton from "./HeaderButton";
import MapComponent from "./Map";
import { withTranslation } from 'react-i18next';

class PageMat extends Component {

    constructor(props){
        super(props);

        this.state = {
            show: 1
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
                        <div 
                            id="1"
                            style={{display: this.state.show === 1 ? "block" : "none"}}>
                            <InfoHead>{t("materiaalikierrot.head1")}</InfoHead>
                            <InfoTextItalic>{t("materiaalikierrot.boldtext1")}</InfoTextItalic>
                            <InfoText>{t("materiaalikierrot.text1")}</InfoText>
                            <InfoTextUL>
                                <InfoTextList>{t("materiaalikierrot.litext1")}</InfoTextList>
                            </InfoTextUL>
                            <InfoText>{t("links")}</InfoText>
                            <a href="https://www.lab.fi/fi/kiemura" target="blank"><InfoText>https://www.lab.fi/fi/kiemura</InfoText></a>
                        </div>
                        <div id="2" style={{display: this.state.show === 2 ? "block" : "none"}}>
                            <InfoHead>{t("materiaalikierrot.head2")}</InfoHead>
                            <InfoTextItalic>{t("materiaalikierrot.boldtext2")}</InfoTextItalic>
                            <InfoText>{t("materiaalikierrot.text21")}</InfoText>
                            <InfoText>{t("materiaalikierrot.text22")}</InfoText>
                            <InfoText>{t("links")}</InfoText>
                            <a href="https://www.muovipoli.fi/new-plastics-center-npc/" target="blank"><InfoText>https://www.muovipoli.fi/new-plastics-center-npc/</InfoText></a>
                            <a href="https://telaketju.turkuamk.fi/" target="blank"><InfoText>https://telaketju.turkuamk.fi/</InfoText></a>
                        </div>
                    </InfoTextDiv>
                    <InfoPageSidenav>
                        <SideNavHead>Materiaalikierrot</SideNavHead>
                        <MapComponent></MapComponent>
                        <SideNavUL>
                            <SideNavList onClick={(e) => this.changeText(e, 1)}>NiemiCampuksen testi- ja pilotointiympäristöt</SideNavList>
                            <SideNavList onClick={(e) => this.changeText(e, 2)}>Yhteistyöverkostot</SideNavList>
                        </SideNavUL>
                    </InfoPageSidenav>              
                </InfoPageMainDiv>
                <LogoImages></LogoImages>
            </div>
        )
    }
}

export default withTranslation()(PageMat);