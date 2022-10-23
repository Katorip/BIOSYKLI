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
    InfoTextLink,
    InfoTextImage,
    SideNavList,
    SideNavHead,
    SideNavUL
} from "../styles/infoPageStyles"
import HeaderButton from "./HeaderButton";
import lahtiEnergiaImage from "../images/header/lahti-energia.jpg";
import MapComponent from "./Map";
import { withTranslation } from 'react-i18next';

class PageNrg extends Component {

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
                        <div style={{display: this.state.show === 1 ? "block" : "none"}}>
                            <InfoHead>{t("energia.head1")}</InfoHead>
                            <InfoTextItalic>{t("energia.boldtext1")}</InfoTextItalic>
                            <InfoText>{t("energia.text1")}</InfoText>
                            <InfoTextImage 
                                alt="lahtienergia" 
                                src={lahtiEnergiaImage}
                                style={{width: "90%"}}>
                            </InfoTextImage>
                            <InfoText>{t("links")}</InfoText>
                            <InfoTextLink href="https://www.lahtienergia.fi/fi/lahti-energia/energian-tuotanto/kymijarvi-iii" target="blank"><InfoText>https://www.lahtienergia.fi/fi/lahti-energia/energian-tuotanto/kymijarvi-iii</InfoText></InfoTextLink>
                        </div>

                        <div style={{display: this.state.show === 2 ? "block" : "none"}}>
                            <InfoHead>{t("energia.head2")}</InfoHead>
                            <InfoText>{t("energia.text21")}</InfoText>
                            <InfoText>{t("energia.text22")}</InfoText>
                            <InfoText>{t("links")}</InfoText>
                            <InfoTextLink href="https://www.hiilineutraalisuomi.fi/fi-FI/Canemure/Osahankkeet/Lahti/Lahti_Vahahiilisia_ratkaisuja_korjausrak(49443)" target="blank"><InfoText>https://www.hiilineutraalisuomi.fi/fi-FI/Canemure/Osahankkeet/Lahti/Lahti_Vahahiilisia_ratkaisuja_korjausrak(49443)</InfoText></InfoTextLink>
                            <InfoTextLink href="https://www.lahti.fi/palvelut/luonto-ja-ymparisto/canemure" target="blank"><InfoText>https://www.lahti.fi/palvelut/luonto-ja-ymparisto/canemure</InfoText></InfoTextLink>
                            <InfoTextLink href="https://www.interregeurope.eu/resindustry/" target="blank"><InfoText>https://www.interregeurope.eu/resindustry/</InfoText></InfoTextLink>
                            <InfoTextLink href="https://lab.fi/fi/projekti/resindustry-policies-renewable-energy-sources-industry" target="blank"><InfoText>https://lab.fi/fi/projekti/resindustry-policies-renewable-energy-sources-industry</InfoText></InfoTextLink>
                            <InfoTextLink href="https://www.interregeurope.eu/smepower/" target="blank"><InfoText>https://www.interregeurope.eu/smepower/</InfoText></InfoTextLink>
                        </div>

                        <div style={{display: this.state.show === 3 ? "block" : "none"}}>
                            <InfoHead>{t("energia.head3")}</InfoHead>
                            <InfoTextItalic>{t("energia.boldtext3")}</InfoTextItalic>
                            <InfoText>{t("energia.text31")}</InfoText>
                            <InfoText>{t("energia.text32")}</InfoText>
                            <InfoText>{t("links")}</InfoText>
                            <InfoTextLink href="https://www.lahti.fi/palvelut/luonto-ja-ymparisto/citicap" target="blank"><InfoText>https://www.lahti.fi/palvelut/luonto-ja-ymparisto/citicap</InfoText></InfoTextLink>
                        </div>

                        <div style={{display: this.state.show === 4 ? "block" : "none"}}>
                            <InfoHead>{t("energia.head4")}</InfoHead>
                            <InfoTextItalic>{t("energia.boldtext4")}</InfoTextItalic>
                            <InfoText>{t("energia.text4")}</InfoText>
                            <InfoText>{t("links")}</InfoText>
                            <InfoTextLink href="https://www.lahti.fi/ajankohtaista/uutiset/testaa-ty%C3%B6matkoillasi-uutta-kimppakyytisovellusta" target="blank"><InfoText>https://www.lahti.fi/ajankohtaista/uutiset/testaa-ty%C3%B6matkoillasi-uutta-kimppakyytisovellusta</InfoText></InfoTextLink>
                            <InfoTextLink href="https://piggybaggy.com/home#/app/dashboard" target="blank"><InfoText>https://piggybaggy.com/home#/app/dashboard</InfoText></InfoTextLink>
                        </div>
                        <InfoHead></InfoHead>
                    </InfoTextDiv>
                    <InfoPageSidenav>
                        <SideNavHead>Energia ja liikenne</SideNavHead>
                        <MapComponent></MapComponent>
                        <SideNavUL>
                            <SideNavList onClick={(e) => this.changeText(e, 1)}>Kymijärvi III, Lahti Energian biolämpölaitos</SideNavList>
                            <SideNavList onClick={(e) => this.changeText(e, 2)}>Energiatehokkuutta parantavat hankkeet</SideNavList>
                            <SideNavList onClick={(e) => this.changeText(e, 3)}>Henkilökohtainen päästökauppa</SideNavList>
                            <SideNavList onClick={(e) => this.changeText(e, 4)}>Kimppatyömatkat</SideNavList>
                        </SideNavUL>
                    </InfoPageSidenav>               
                </InfoPageMainDiv>
                <LogoImages></LogoImages>
            </div>
        )
    }
}

export default withTranslation()(PageNrg);