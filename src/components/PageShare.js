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
    SideNavList,
    SideNavHead,
    SideNavUL
} from "../styles/infoPageStyles"
import HeaderButton from "./HeaderButton";
import MapComponent from "./Map";
import { withTranslation } from 'react-i18next';

class PageShare extends Component {

    constructor(props){
        super(props);

        this.state = {
            show: 1                     // Which div is showing
        }

        this.changeText = this.changeText.bind(this)
    }

    // Change div that is showing
    changeText(e, i) {
        e.preventDefault(); 

        // Set new div number
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
                        <div style={{display: this.state.show === 1 ? "block" : "none"}}>
                            <InfoHead>{t("share.head1")}</InfoHead>
                            <InfoTextItalic>{t("share.boldtext1")}</InfoTextItalic>
                            <InfoText>{t("share.text1")}</InfoText>
                            <InfoText>{t("links")}</InfoText>
                            <a href="https://www.lahti.fi/tietoa-lahdesta/tilavuokraus" target="blank"><InfoText>https://www.lahti.fi/tietoa-lahdesta/tilavuokraus</InfoText></a>
                            <a href="https://businessheinola.fi/spotti/" target="blank"><InfoText>https://businessheinola.fi/spotti/</InfoText></a> 
                        </div>

                        <div style={{display: this.state.show === 2 ? "block" : "none"}}>
                            <InfoHead>{t("share.head2")}</InfoHead>
                            <InfoText>{t("share.text21")}</InfoText>
                            <InfoText>{t("share.text22")}</InfoText>
                            <InfoText>{t("share.text23")}</InfoText>
                            <InfoText>{t("share.text24")}</InfoText>
                        </div>

                        <div style={{display: this.state.show === 3 ? "block" : "none"}}>
                            <InfoHead>{t("share.head3")}</InfoHead>
                            <InfoTextItalic>{t("share.boldtext3")}</InfoTextItalic>
                            <InfoText>{t("share.text3")}</InfoText>
                            <InfoText>{t("links")}</InfoText>
                            <a href="https://www.vaaksynolkkari.fi" target="blank"><InfoText>www.vaaksynolkkari.fi</InfoText></a>
                        </div>

                        <div style={{display: this.state.show === 4 ? "block" : "none"}}>
                            <InfoHead>{t("share.head4")}</InfoHead>
                            <InfoTextItalic>{t("share.boldtext4")}</InfoTextItalic>
                            <InfoText>{t("share.text41")}</InfoText>
                            <InfoText>{t("share.text42")}</InfoText>
                            <InfoText>{t("share.text43")}</InfoText>
                            <InfoText>{t("links")}</InfoText>
                            <a href="https://www.lahti.fi/palvelut/asuminen/kaupunkiviljely" target="blank"><InfoText>https://www.lahti.fi/palvelut/asuminen/kaupunkiviljely</InfoText></a>
                            <a href="http://lahdenruokaosuuskunta.blogspot.com/p/osuuskunta.html" target="blank"><InfoText>http://lahdenruokaosuuskunta.blogspot.com/p/osuuskunta.html</InfoText></a>
                            <a href="https://kotiniemispy.yhdistysavain.fi/" target="blank"><InfoText>https://kotiniemispy.yhdistysavain.fi/</InfoText></a>
                            <a href="http://www.palstaviljely.fi/" target="blank"><InfoText>http://www.palstaviljely.fi/</InfoText></a>
                        </div>

                        <div style={{display: this.state.show === 5 ? "block" : "none"}}>
                            <InfoHead>{t("share.head5")}</InfoHead>
                            <InfoTextItalic>{t("share.boldtext5")}</InfoTextItalic>
                            <InfoText>{t("share.text51")}</InfoText>
                            <InfoText>{t("share.text52")}</InfoText>
                            <InfoText>{t("share.text53")}</InfoText>
                            <InfoText>{t("links")}</InfoText>
                            <a href="http://www.kalkkinen.fi/yhdistykset/yhdistykset.htm" target="blank"><InfoText>http://www.kalkkinen.fi/yhdistykset/yhdistykset.htm</InfoText></a>
                        </div>

                        <div style={{display: this.state.show === 6 ? "block" : "none"}}>
                            <InfoHead>{t("share.head6")}</InfoHead>
                            <InfoTextItalic>{t("share.boldtext6")}</InfoTextItalic>
                            <InfoText>{t("share.text6")}</InfoText>
                            <InfoText>{t("links")}</InfoText>
                            <a href="https://www.anttilanmaki.fi/" target="blank"><InfoText>https://www.anttilanmaki.fi/</InfoText></a>
                            <a href="https://jalotus.fi/maailmanjalotus/sparrattavien-esittely/" target="blank"><InfoText>https://jalotus.fi/maailmanjalotus/sparrattavien-esittely/</InfoText></a>
                        </div>
                        <InfoHead></InfoHead>
                    </InfoTextDiv>              
                    <InfoPageSidenav>
                        <SideNavHead>Jakamistalous</SideNavHead>
                        <MapComponent></MapComponent>
                        <SideNavUL>
                            <SideNavList onClick={(e) => this.changeText(e, 1)}>Tilavuokraus</SideNavList>
                            <SideNavList onClick={(e) => this.changeText(e, 2)}>Tavaralainaamot</SideNavList>
                            <SideNavList onClick={(e) => this.changeText(e, 3)}>Hävikkijääkaappi</SideNavList>
                            <SideNavList onClick={(e) => this.changeText(e, 4)}>Kaupunkiviljely</SideNavList>
                            <SideNavList onClick={(e) => this.changeText(e, 5)}>Kaupunkipyörät</SideNavList>
                            <SideNavList onClick={(e) => this.changeText(e, 6)}>Anttilanmäen asukasyhdistys</SideNavList>
                        </SideNavUL>
                    </InfoPageSidenav>          
                </InfoPageMainDiv>
                <LogoImages></LogoImages>
            </div>
        )
    }
}

export default withTranslation()(PageShare);