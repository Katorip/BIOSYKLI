import React, { Component } from 'react'
import Header from "./Header"
import MainPage from "./MainPage"
import LogoImages from "./LogoImages"
import Footer from "./Footer"
import Welcomebox from "./WelcomeBox"
import { ContainerStyle } from "../styles/containerStyles"

export class FunctionDiv extends Component {

    constructor(props){
        super(props);

        this.state = {
            divScale: 1.5,
            show: false
        }

        this.parentFunction = this.parentFunction.bind(this)
        this.showFunction = this.showFunction.bind(this)
    }
    
    // Calculate new scale of MainPages map div
    parentFunction = (sizeChange) => {
        this.setState({
            divScale: 1 + (sizeChange / 100),
            show: false
        });
    }

    // Show MainPages infobox
    showFunction = (showState) => {
        this.setState({
            show: showState
        });
    }

    render() {
        return (
            <ContainerStyle>
                <Header functionCallFromParent={this.parentFunction}></Header>                               
                <MainPage
                    functionCallFromParent={this.showFunction}
                    showFromParent={this.state.show}
                    scaleFromParent={this.state.divScale}>
                </MainPage>
                <LogoImages></LogoImages> 
                <Footer></Footer>
                <Welcomebox></Welcomebox>
            </ContainerStyle>
        )
    }
}

export default FunctionDiv