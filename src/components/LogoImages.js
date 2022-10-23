import React, { Component } from 'react'
import { HeaderImageEU, HeaderImageEU2, ImageDiv } from "../styles/headerStyles"
import { withTranslation } from 'react-i18next';
import euImage from "../images/logot/EU.jpg";
import eu2Image from "../images/logot/EAKR.jpg";
import eu2ImageEng from "../images/logot/ERDF.png";
import phLiittoImage from "../images/logot/PHLiitto.png";
import phLiittoImageEng from "../images/logot/PHLiittoEng.png";

export class LogoImages extends Component {
    render() {

        const locale = this.props.i18n.language;
        let img = locale === "fin" ? eu2Image : eu2ImageEng;
        let img2 = locale === "fin" ? phLiittoImage : phLiittoImageEng;

        return (
                <ImageDiv>
                    <HeaderImageEU src={img}/>
                    <HeaderImageEU2 src={euImage}/>
                    <HeaderImageEU src={img2}/>
                </ImageDiv>
        )
    }
}

export default withTranslation()(LogoImages);