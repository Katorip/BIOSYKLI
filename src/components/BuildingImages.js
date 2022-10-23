import React, { Component } from 'react'
// Styled components
import {
    FazerImg,
    HartwallImg,
    LabioImg,
    LahtiAquaImg,
    LahtiEnergiaImg,
    PHJImg,
    StiImg,
    TarpaperImg
} from "../styles/buildingImagesStyles"
// Icons
import FazerIcon from "../images/icons/Fazer_icon.svg";
import HartwallIcon from "../images/icons/Hartwall_icon.svg";
import LabioIcon from "../images/icons/Labio_icon.svg";
import LahtiAquaIcon from "../images/icons/LahtiAqua_icon.svg";
import LahtiEnergiaIcon from "../images/icons/LahtiEnergia_icon.svg";
import PHJIcon from "../images/icons/PHJ_icon.svg";
import St1Icon from "../images/icons/St1_icon.svg";
import TarpaperIcon from "../images/icons/Tarpaper_icon.svg";

// Images of the buildings in the map
class BuildingImages extends Component {

    constructor(props){
        super(props);

        this.state = {
            show: 0
        }

        this.changePosition = this.changePosition.bind(this)
    }

    changePosition(e, page, show) {
        this.props.functionCallFromParent(e, page, show);
    }

    render() {
        return (
            <div style={{display: this.props.isMobile ? "none" : "block"}}>
                <div>
                    <FazerImg 
                        id="Fazer"
                        className="icons"
                        src={FazerIcon} 
                        alt="fazer-icon"
                        style={{display: this.props.one ? "block" : "none"}}
                        onClick={(e) => this.changePosition(e, "Page2", 3)}/>
                </div>
                <div>
                    <HartwallImg 
                        id="Hartwall"
                        className="icons" 
                        src={HartwallIcon} 
                        alt="hartwall-icon"
                        style={{display: this.props.one ? "block" : "none"}}
                        onClick={(e) => this.changePosition(e)}/>
                </div>
                 <div>
                    <LahtiAquaImg 
                        id="Lahtiaqua"
                        className="icons"
                        src={LahtiAquaIcon}
                        alt="lahtiaqua-icon"
                        style={{display: this.props.three ? "block" : "none"}}
                        onClick={(e) => this.changePosition(e)}/>
                </div>
                <div>
                    <LahtiEnergiaImg 
                        id="Lahtienergia"
                        className="icons" 
                        src={LahtiEnergiaIcon} 
                        alt="lahtienergia-icon"
                        style={{display: this.props.two ? "block" : "none"}}
                        onClick={(e) => this.changePosition(e)}/>
                </div>
                <div>
                    <PHJImg 
                        id="PHJ"
                        className="icons" 
                        src={PHJIcon} 
                        alt="phj-icon"
                        style={{display: this.props.four ? "block" : "none"}}
                        onClick={(e) => this.changePosition(e)}/>
                </div>
                <div>
                    <LabioImg 
                        id="Labio"
                        className="icons" 
                        src={LabioIcon} 
                        alt="labio-icon"
                        style={{display: this.props.one ? "block" : "none"}}
                        onClick={(e) => this.changePosition(e)}/>
                </div>
                <div>
                    <StiImg 
                        id="St1"
                        className="icons" 
                        src={St1Icon} 
                        alt="st1-icon"
                        style={{display: this.props.four ? "block" : "none"}}
                        onClick={(e) => this.changePosition(e)}/>
                </div>
                <div>
                    <TarpaperImg 
                        id="Tarpaper"
                        className="icons" 
                        src={TarpaperIcon} 
                        alt="tarpaper-icon"
                        style={{display: this.props.four ? "block" : "none"}}
                        onClick={(e) => this.changePosition(e)}/>
                </div>
            </div>
        )
    }
}

export default BuildingImages