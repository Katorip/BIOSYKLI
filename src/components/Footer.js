import React, { Component } from 'react'
import { FooterStyle, FooterImage } from "../styles/footerStyles"
import Logo from "../images/logot/LABwhite.png";

// Main page footer
export class Footer extends Component {
    render() {
        return (
            <FooterStyle>
                <FooterImage src={Logo}/>
            </FooterStyle>
        )
    }
}

export default Footer