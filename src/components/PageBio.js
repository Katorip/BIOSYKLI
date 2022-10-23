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
    InfoTextImage,
    SideNavHead,
    SideNavUL,
    SideNavList
} from "../styles/infoPageStyles"
import HeaderButton from "./HeaderButton";
import img1 from "../images/header/labio.jpg";
import img2 from "../images/header/Ksylitoli.jpg";
import labioImage from "../images/header/labio.jpg";
import fazerImage from "../images/header/Ksylitoli.jpg";
import { withTranslation } from 'react-i18next';

class PageBio extends Component {

    constructor(props){
        super(props);

        this.state = {
            show: 0,
            images: [img1, img2]
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
                    <HeaderImgDiv style={{backgroundImage: 'url('+ this.state.images[this.state.show] +')'}}></HeaderImgDiv>              
                    <InfoTextDiv>
                        <div style={{display: this.state.show === 0 ? "block" : "none"}}>
                            <InfoHead>{t("biotalous.head1")}</InfoHead>
                            <InfoTextItalic>{t("biotalous.boldtext1")}</InfoTextItalic>
                            <InfoText>{t("biotalous.text1")}</InfoText>
                            <InfoTextImage 
                                alt="labio" 
                                src={labioImage}>
                            </InfoTextImage>
                            <InfoText>{t("links")}</InfoText>
                            <a href="http://www.labio.fi/" target="blank"><InfoText>http://www.labio.fi/</InfoText></a>
                            <a href="http://www.gasum.com" target="blank"><InfoText>www.gasum.com</InfoText></a>
                        </div>

                        <div style={{display: this.state.show === 1 ? "block" : "none"}}>
                            <InfoHead>{t("biotalous.head2")}</InfoHead>
                            <InfoTextItalic>{t("biotalous.boldtext2")}</InfoTextItalic>
                            <InfoText>{t("biotalous.text2")}</InfoText>
                            <InfoText>{t("links")}</InfoText>
                            <a href="https://www.viljaklusteri.fi/" target="blank"><InfoText>https://www.viljaklusteri.fi/</InfoText></a>
                        </div>
                        
                        <div style={{display: this.state.show === 2 ? "block" : "none"}}>
                            <InfoHead>{t("biotalous.head3")}</InfoHead>
                            <InfoTextItalic>{t("biotalous.boldtext3")}</InfoTextItalic>
                            <InfoText>{t("biotalous.text3")}</InfoText>
                            <InfoText>{t("links")}</InfoText>
                            <a href="http://www.phj.fi" target="blank"><InfoText>www.phj.fi</InfoText></a>
                            <a href="http://www.tarpaper.fi/home" target="blank"><InfoText>http://www.tarpaper.fi/home</InfoText></a>
                            <a href="https://www.ncc.fi/" target="blank"><InfoText>https://www.ncc.fi/</InfoText></a>
                        </div>

                        <div style={{display: this.state.show === 3 ? "block" : "none"}}>
                            <InfoHead>{t("biotalous.head4")}</InfoHead>
                            <InfoTextItalic>{t("biotalous.boldtext4")}</InfoTextItalic>
                            <InfoText>{t("biotalous.text4")}</InfoText>
                            <InfoTextImage alt="ksylitoli" src={fazerImage}></InfoTextImage>
                            <InfoText>{t("links")}</InfoText>
                            <a href="https://www.fazermills.com/fi/tuotteet/fazer-ksylitoli/" target="blank"><InfoText>https://www.fazermills.com/fi/tuotteet/fazer-ksylitoli/</InfoText></a>
                            <a href="http://lahtibusinessregion.fi/yritystarinat/menestystarina/?article=lahtelaista-ksylitolia-ja-kauraoljya-maailmalle-fazer-tavoittelee-uusia-markkinoita-kiertotalouden-innovaatioilla" target="blank"><InfoText>http://lahtibusinessregion.fi/yritystarinat/menestystarina/?article=lahtelaista-ksylitolia-ja-kauraoljya-maailmalle-fazer-tavoittelee-uusia-markkinoita-kiertotalouden-innovaatioilla</InfoText></a>
                        </div>

                        <div style={{display: this.state.show === 4 ? "block" : "none"}}>
                            <InfoHead>{t("biotalous.head5")}</InfoHead>
                            <InfoTextItalic>{t("biotalous.boldtext5")}</InfoTextItalic>
                            <InfoText>{t("biotalous.text5")}</InfoText>
                            <InfoText>{t("links")}</InfoText>
                            <a href="https://www.hartwall.fi/" target="blank"><InfoText>https://www.hartwall.fi/</InfoText></a>
                            <a href="http://www.st1.fi" target="blank"><InfoText>www.st1.fi</InfoText></a>
                            <a href="https://www.hartwall.fi/inspiroidu/trendit/2018/hartwallin-juomatuotannon-sivutuotteet-hyotykayttoon/" target="blank"><InfoText>https://www.hartwall.fi/inspiroidu/trendit/2018/hartwallin-juomatuotannon-sivutuotteet-hyotykayttoon/</InfoText></a>
                        </div>
                        <InfoHead></InfoHead>
                    </InfoTextDiv>
                    <InfoPageSidenav>
                        <SideNavHead>Biotalous</SideNavHead>
                        <SideNavUL>
                            <SideNavList onClick={(e) => this.changeText(e, 0)}>Labio</SideNavList>
                            <SideNavList onClick={(e) => this.changeText(e, 1)}>Viljaklusteri</SideNavList>
                            <SideNavList onClick={(e) => this.changeText(e, 2)}>Kujalan symbioosit</SideNavList>
                            <SideNavList onClick={(e) => this.changeText(e, 3)}>Fazer</SideNavList>
                            <SideNavList onClick={(e) => this.changeText(e, 4)}>Hartwall-St1</SideNavList>
                        </SideNavUL>
                    </InfoPageSidenav>                   
                </InfoPageMainDiv>
                <LogoImages></LogoImages>
            </div>
        )
    }
}

export default withTranslation()(PageBio);