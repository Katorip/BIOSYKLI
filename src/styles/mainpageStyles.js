import styled from "styled-components";

export const MainpageStyle = styled.div`
    width: 100vw;
    height: 100%;
    background-color: #f3fafd;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
`;

export const MapDivStyle = styled.div`
    width: 50%;
    height: 70%;
    position: relative;
    display: block;
    background-color: #f3fafd;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    cursor: all-scroll;
    z-index: 1;
`;

export const Video = styled.video`
    width: 100%;
    height: 100%;
    z-index: 1;
`;

export const SidenavStyle = styled.div`
    margin: 0;
    padding: 0;
    width: 20%;
    height: 80%;
    background-color: #fff;
    border-bottom-right-radius: 30px;
    box-shadow: 3px 3px 10px grey;
    top: 0;
    left: 0;
    text-align: left;
    position: absolute;
    z-index: 2;

    @media (max-width: 1100px) {
        height: 50%;
    }
    @media (max-width: 800px) {
        width: 22%;
    }
    @media (max-width: 450px) {
        width: 28%;
    }
    @media (max-width: 375px) {
        width: 32%;
        height: 60%;
    }
`;

export const SidenavHeading = styled.h2`
    padding-top: 10%;
    padding-left: 10%;
    margin: 0;
    font-size: 200%;
    font-family: 'Montserrat', sans-serif;

    @media (max-width: 800px) {
        font-size: 180%;
    }
    @media (max-width: 450px) {
        font-size: 100%;
    }
`;

export const SidenavTextStyle = styled.p`
    font-size: 150%;
    padding-left: 10%;
    font-family: 'Montserrat', sans-serif;

    @media (max-width: 1100px) {
        font-size: 110%;
    }

    @media (max-width: 800px) {
        font-size: 100%;
    }
    @media (max-width: 450px) {
        font-size: 60%;
    }
`;

export const SidenavTextStyle2 = styled.p`
    font-size: 100%;
    padding-left: 10%;
    font-weight: bold;
    font-family: 'Montserrat', sans-serif;

    @media (max-width: 800px) {
        font-size: 60%;
    }
`;

export const RadioButtonStyle = styled.input`
    position: absolute;
    opacity: 0;
    cursor: pointer;
`;

export const LabelStyle = styled.label`
    display: block;
    position: relative;
    height: 5px;
    padding-left: 10%;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    &:hover input ~ .circleSpan {
        background-color: #209aad;
    }
    input:checked ~ .circleSpan {
        background-color: #fff;
    }
    input:checked ~ .circleSpan:after {
        display: block;
    }
    .circleSpan:after {
        top: 2px;
        left: 2px;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: #f2c143;

        @media (max-width: 450px) {
            top: 1px;
            left: 1px;
            width: 3px;
            height: 3px;
        }
    }
`;

export const CircleStyle = styled.span`
    position: absolute;
    height: 12px;
    width: 12px;
    background-color: white;
    border-radius: 50%;
    border: 3px solid #0e434b;
    &:after {
        content: "";
        position: absolute;
        display: none;
    }

    @media (max-width: 450px) {
        height: 5px;
        width: 5px;
        border: 2px solid #0e434b;
    }
`;

export const RadioButtonText = styled.p`
    font-family: 'Montserrat', sans-serif;
    font-size: 90%;
    font-weight: bold;
    padding-left: 25px;
    margin: 0;

    @media (max-width: 450px) {
        font-size: 55%;
        padding-left: 15px;
    }
`;

export const MapText = styled.h2`
    position: absolute;
    top: 5%;
    left: 25%;
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    font-size: 170%;
    z-index: 4;

    @media (max-width: 450px) {
        left: 35%;
        top: 3%;
        font-size: 150%;
    }
`;