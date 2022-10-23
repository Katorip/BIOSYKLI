import React, { Component } from 'react'
import {  
    SidenavStyle, 
    SidenavHeading,
    SidenavTextStyle,
    SidenavTextStyle2,
    RadioButtonStyle,
    LabelStyle,
    CircleStyle,
    RadioButtonText
} from "../styles/mainpageStyles"

class Sidenav extends Component {
    render() {
        return (
            <div>
                <SidenavStyle>
                    <SidenavHeading>BIOSYKLI:</SidenavHeading>
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
                            defaultChecked
                        >
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
                            defaultChecked
                        >
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
                            defaultChecked
                        >
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
                            defaultChecked
                        >
                        </RadioButtonStyle>
                        <CircleStyle className="circleSpan"></CircleStyle>
                        <RadioButtonText>Uudet palvelut</RadioButtonText>
                    </LabelStyle><br></br>                   
                    
                    <LabelStyle htmlFor="edl">
                        <RadioButtonStyle 
                            type="checkbox" 
                            id="edl" 
                            className="button" 
                            onClick={(e) => this.changeIcon(e, "four")}
                            name="teemat" 
                            value="option5" 
                            defaultChecked
                        >
                        </RadioButtonStyle>
                        <CircleStyle className="circleSpan"></CircleStyle>
                        <RadioButtonText>Edelläkävijyys</RadioButtonText>
                    </LabelStyle><br></br>
                </SidenavStyle>
            </div>
        )
    }
}

export default Sidenav