import React, { Component } from 'react'
import { 
    MainpageStyle, 
    Video,
    SidenavStyle, 
    SidenavHeading,
    SidenavTextStyle,
    SidenavTextStyle2,
    RadioButtonStyle,
    LabelStyle,
    CircleStyle,
    RadioButtonText,
    MapDivStyle,
    MapText,
} from "../styles/mainpageStyles" 
import { 
    InfoBoxDiv, 
    ButtonDiv, 
    InfoBoxHead, 
    InfoBoxText,
    InfoBoxButton
} from "../styles/infoboxStyles"
import { CloseButtonStyle } from "../styles/welcomeboxStyle"
import IconImages from "./IconImages"
import BuildingImages from "./BuildingImages"
import mapVideo from "../images/testivideo.mp4";
import { withTranslation } from 'react-i18next';
import { Link } from "react-router-dom";

class MainPage extends Component {

    constructor(props) {
        super(props)

        this.state = {
            zero: true,             // Icon number
            one: true,              // Icon number
            two: true,              // Icon number
            three: true,            // Icon number
            four: true,             // Icon number
            topPos: 0,              // Icons y position
            leftPos: 0,             // Icons x position
            infoNbr: "Page1",       // Icon id
            mouseDown: false,       // Click map div?
            curLeft: 0,             // Mouses start x position
            curTop: 0,              // Mouses start y positon
            mapLeft: 0,             // Maps x position
            mapTop: 0,              // Maps y position
            mapDivLeft: 0,
            mapDivTop: 0,
            isMobile: false,
            toPage: "Page1",
            show: 0
        }

        this.mapDiv = null;         // Map div element
        this.valueX = 0;            // Maps new x position
        this.valueY = 0;            // Maps new y position
        this.maxTop = -350;         // Areas top "wall"
        this.maxBottom = 350;       // Areas bottom "wall"
        this.maxLeft = -400;        // Areas left "wall"
        this.maxRight = 500;        // Areas right "wall"
        this.touchX = 0;            // Start touch x position
        this.touchY = 0;            // Start touch y position

        this.changeIcon = this.changeIcon.bind(this)
        this.changePosition = this.changePosition.bind(this)
        this.closeTab = this.closeTab.bind(this)
        this.setPos = this.setPos.bind(this)
        this.mouseIsDown = this.mouseIsDown.bind(this)
        this.mouseIsUp = this.mouseIsUp.bind(this)
        this.mouseMove = this.mouseMove.bind(this)
        this.startTouch = this.startTouch.bind(this)
        this.touchAndMove = this.touchAndMove.bind(this)
    }

    // Change which icons are visible
    changeIcon(e, i) {
        // Uncheck wanted icon
        this.setState({
            [`${i}`]: e.target.checked
        });

        // Close icon infobox if it was open
        this.closeTab();
    }

    // Set new mainpage height value when resizing screen
    handleResize = e => {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);

        if (window.innerWidth < 1030) {
            this.setState({
                isMobile: true
            });
        }
        else {
            this.setState({
                isMobile: false
            });
        }

        console.log(this.state.isMobile);

        // Close icon infobox if it was open
        this.closeTab();
    };

    // Add event listener to listening screen resizing
    componentDidMount() {
        window.addEventListener("resize", this.handleResize);
    }

    // Change place of infobox
    changePosition(e, page, text) {
        // Get width of a map div
        let style = getComputedStyle(this.mapDiv);
        let width = style.getPropertyValue("width");
        let x = parseInt(width);

        // Get height of a header
        let elem2 = document.querySelector("#header");
        let style2 = getComputedStyle(elem2);
        let height = style2.getPropertyValue("height");
        let y = parseInt(height);

        // Clicked icon
        let elem = document.querySelector("#" + e.target.id);
        let coords = elem.getBoundingClientRect();

        // Calculate position of infobox
        let xPos = coords.left + (x * 0.05);
        let yPos = coords.top - y;

        // Set infoboxes position depending on icons position
        this.setState({
            topPos: yPos,
            leftPos: xPos,
            infoNbr: e.target.id,
            toPage: page,
            show: text
        });

        console.log(this.state.show);

        // Set infobox visible
        this.props.functionCallFromParent(true);
    }

    // Close infobox
    closeTab() {
        this.props.functionCallFromParent(false);
    }

    // OnLoad-function to get map divs left position and set it to mapLeft state
    setPos(e) {
        // Calculate real height when using mobile browser
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);

        // Get map div and its left property
        let div = document.getElementById("map");
        let style = getComputedStyle(div);
        var left = style.getPropertyValue("left");
        var value = parseInt(left);

        // Set map divs left property
        this.setState({
            mapLeft: value
        });

        if (window.innerWidth < 1030) {
            this.setState({
                isMobile: true
            });
        }
        else {
            this.setState({
                isMobile: false
            });
        }

        this.mapDiv = div;
    }

    // When click inside map div
    mouseIsDown(e) {
        e.preventDefault();

        // Set mouses position when clicked
        this.setState({
            mouseDown: true,
            curLeft: e.clientX,
            curTop: e.clientY
        });

        // Close icon infobox if it was open
        this.closeTab();
    }

    // When click ends
    mouseIsUp(e) {
        e.preventDefault();

        // Set new div map values
        this.setState({
            mouseDown: false,
            mapLeft: this.valueX,
            mapTop: this.valueY
        });
    }

    // Click and drag map div
    mouseMove(e) {
        e.preventDefault(); 
        
        // If users mouse is down and move it at the same time
        if (this.state.mouseDown) {
            // Set new values for mouseIsUp()
            this.valueX = this.state.mapLeft + (e.clientX - this.state.curLeft);
            this.valueY = this.state.mapTop + (e.clientY - this.state.curTop);

            // Move when div is inside area 
            if (this.valueX > this.maxLeft && this.valueX < this.maxRight && this.valueY > this.maxTop && this.valueY < this.maxBottom) {
                this.setState({
                    mapDivLeft: this.state.mapLeft + (e.clientX - this.state.curLeft) + "px",
                    mapDivTop: this.state.mapTop + (e.clientY - this.state.curTop) + "px"
                });
            }

            // If we go outside of the area
            else {
                // Left "wall" and corners
                if (this.valueX <= this.maxLeft) {
                    this.valueX = this.maxLeft + 1;
                    this.mapDiv.style.left = this.valueX;

                    // Top left corner
                    if (this.valueY < this.maxTop) {
                        this.valueY = this.maxTop + 1;
                        this.mapDiv.style.top = this.valueY;
                    }
                    // Bottom left corner
                    else if (this.valueY > this.maxBottom) {
                        this.valueY = this.maxBottom - 1;
                        this.mapDiv.style.top = this.valueY;
                    }
                    // Left "wall" middle Y position
                    else {
                        this.valueY = this.state.mapTop + (e.clientY - this.state.curTop);
                        this.mapDiv.style.top = this.state.mapTop + (e.clientY - this.state.curTop) + "px";
                    }                  
                }

                // Right "wall" and corners
                else if (this.valueX >= this.maxRight) {
                    this.valueX = this.maxRight - 1;
                    this.mapDiv.style.left = this.valueX;

                    // Top right corner
                    if (this.valueY < this.maxTop) {
                        this.valueY = this.maxTop + 1;
                        this.mapDiv.style.top = this.valueY;
                    }
                    // Bottom right corner
                    else if (this.valueY > this.maxBottom) {
                        this.valueY = this.maxBottom - 1;
                        this.mapDiv.style.top = this.valueY;
                    }
                    // Right "wall" middle Y position
                    else {
                        this.valueY = this.state.mapTop + (e.clientY - this.state.curTop);
                        this.mapDiv.style.top = this.state.mapTop + (e.clientY - this.state.curTop) + "px";
                    }
                }

                // Top "wall"
                if (this.valueY < this.maxTop) {
                    this.valueX = this.state.mapLeft + (e.clientX - this.state.curLeft);
                    this.valueY = this.maxTop + 1;

                    this.mapDiv.style.left = this.state.mapLeft + (e.clientX - this.state.curLeft) + "px";
                    this.mapDiv.style.top = this.valueY;
                }

                // Bottom "wall"
                else if (this.valueY > this.maxBottom) {
                    this.valueX = this.state.mapLeft + (e.clientX - this.state.curLeft);
                    this.valueY = this.maxBottom - 1;

                    this.mapDiv.style.left = this.state.mapLeft + (e.clientX - this.state.curLeft) + "px";
                    this.mapDiv.style.top = this.valueY;
                }
            }
        }      
    }

    // First touch of the map on mobile devices
    startTouch(e) {
        e.preventDefault();

        // If we don't want to open icon infobox
        if (e.target.id === "map") {
            // Get only one touch
            let touch = e.touches[0];
    
            // Set touch starting x and y position
            this.touchX = touch.clientX;
            this.touchY = touch.clientY;
    
            // Close icon infobox if it was open
            this.closeTab();
        }

        // If we want to open icon infobox
        else {
            // Call infobox position calculating function
            this.changePosition(e);
        }

    }

    // Move map on mobile devices
    touchAndMove(e) {
        // Get only one touch
        let touch = e.touches[0];

        // Set new values for mouseIsUp()
        this.valueX = this.state.mapLeft + (touch.clientX - this.touchX);
        this.valueY = this.state.mapTop + (touch.clientY - this.touchY);

        // Move the map div
        this.mapDiv.style.left = this.state.mapLeft + (touch.clientX - this.touchX) + "px"; 
        this.mapDiv.style.top = this.state.mapTop + (touch.clientY - this.touchY) + "px";
    }

    render() {

        const { t } = this.props;

        return (        

            <MainpageStyle className="main-page">
                <MapDivStyle 
                    id="map"
                    style={{
                        transform: "scale(" + this.props.scaleFromParent + ")",
                        left: this.state.mapDivLeft,
                        top: this.state.mapDivTop
                    }}
                    onLoad={(e) => this.setPos(e)}
                    onMouseDown={this.mouseIsDown}  
                    onTouchStart={this.startTouch}                
                    onMouseMove={this.mouseMove}
                    onTouchMove={this.touchAndMove}
                    onMouseUp={this.mouseIsUp}
                    onTouchEnd={this.mouseIsUp}
                    onMouseLeave={this.mouseIsUp}
                    >
                    <Video autoPlay muted loop id="video">
                        <source src={mapVideo}></source>
                    </Video>
                    <BuildingImages
                        functionCallFromParent={this.changePosition}
                        isMobile={this.state.isMobile}
                        zero={this.state.zero}
                        one={this.state.one}
                        two={this.state.two}
                        three={this.state.three}
                        four={this.state.four}>
                    </BuildingImages>
                    <IconImages
                        functionCallFromParent={this.changePosition}
                        isMobile={this.state.isMobile}
                        zero={this.state.zero}
                        one={this.state.one}
                        two={this.state.two}
                        three={this.state.three}
                        four={this.state.four}>
                    </IconImages>               
                </MapDivStyle>
                <InfoBoxDiv
                        style={{
                            display: this.props.showFromParent ? "block": "none", 
                            top: this.state.topPos + "px",                           
                            left: this.state.leftPos + "px"}}>
                        <CloseButtonStyle 
                            className="closebtn" 
                            onClick={() => this.closeTab()}>
                            &times;
                        </CloseButtonStyle>
                        <InfoBoxHead>{t("popup." + this.state.infoNbr + ".head")}</InfoBoxHead>
                        <InfoBoxText>{t("popup." + this.state.infoNbr + ".text")}</InfoBoxText>
                        <ButtonDiv>
                            <InfoBoxButton 
                                as={Link}
                                to={{
                                    pathname: `/${this.state.toPage}`,
                                    state: {
                                        text: this.state.show
                                    }
                                }}
                                style={{ textDecoration: "none"}}>
                                    {t("linktext")}
                            </InfoBoxButton>
                        </ButtonDiv>
                </InfoBoxDiv>
                <SidenavStyle>
                    <SidenavHeading>{t("sidenav.1")}</SidenavHeading>
                                       
                    <SidenavTextStyle>Päijät-Hämeen Biokiertotalouden Tiekartta</SidenavTextStyle>
                    <SidenavTextStyle2>Rajaa:</SidenavTextStyle2>
                    <SidenavTextStyle2>Teemat:</SidenavTextStyle2>

                    <LabelStyle id="1" htmlFor="mat">
                        <RadioButtonStyle 
                            type="checkbox" 
                            id="mat" 
                            className="button"
                            onClick={(e) => this.changeIcon(e, "zero")} 
                            name="teemat" 
                            value="option1" 
                            defaultChecked>
                        </RadioButtonStyle>
                        <CircleStyle className="circleSpan"></CircleStyle>
                        <RadioButtonText>Materiaalikierrot</RadioButtonText>
                    </LabelStyle><br></br>
                                      
                    <LabelStyle id="2" htmlFor="bio">
                        <RadioButtonStyle 
                            type="checkbox" 
                            id="bio" 
                            className="button" 
                            onClick={(e) => this.changeIcon(e, "one")}
                            name="teemat" 
                            value="option2" 
                            defaultChecked>
                        </RadioButtonStyle>
                        <CircleStyle className="circleSpan"></CircleStyle>
                        <RadioButtonText>Biotalous</RadioButtonText>
                    </LabelStyle><br></br>                  
                    
                    <LabelStyle htmlFor="nrg">
                        <RadioButtonStyle 
                            type="checkbox" 
                            id="nrg" 
                            className="button" 
                            onClick={(e) => this.changeIcon(e, "two")}
                            name="teemat" 
                            value="option3" 
                            defaultChecked>
                        </RadioButtonStyle>
                        <CircleStyle className="circleSpan"></CircleStyle>
                        <RadioButtonText>Energia</RadioButtonText>
                    </LabelStyle><br></br>                   
                    
                    <LabelStyle htmlFor="pal">
                        <RadioButtonStyle 
                            type="checkbox" 
                            id="pal" 
                            className="button" 
                            onClick={(e) => this.changeIcon(e, "three")}
                            name="teemat" 
                            value="option4" 
                            defaultChecked>
                        </RadioButtonStyle>
                        <CircleStyle className="circleSpan"></CircleStyle>
                        <RadioButtonText>Jakamistalous</RadioButtonText>
                    </LabelStyle><br></br>                   
                    
                    <LabelStyle htmlFor="edl">
                        <RadioButtonStyle
                            type="checkbox"
                            id="edl" 
                            className="button" 
                            onClick={(e) => this.changeIcon(e, "four")}
                            name="teemat" 
                            value="option5" 
                            defaultChecked>
                        </RadioButtonStyle>
                        <CircleStyle className="circleSpan"></CircleStyle>
                        <RadioButtonText>Edelläkävijyys</RadioButtonText>
                    </LabelStyle><br></br>
                </SidenavStyle> 
                <MapText>Päijät-Häme</MapText>                          
            </MainpageStyle>
        )
    }
}

export default withTranslation()(MainPage);