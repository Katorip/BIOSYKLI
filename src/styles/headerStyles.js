import styled from "styled-components";
import dropImage from "../images/icons/drop.svg";

export const HeaderDiv = styled.div`
    width: 100%;
    height: 7%;
    min-height: 50px;
    background-color: #0e434b;
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    align-items: center;

    @media (max-width: 1100px) {
        height: 8%;
    }
    @media (max-width: 800px) {
        flex-direction: column;
        align-items: flex-start;
        height: 10%;
    }
    @media (max-width: 450px) {
        flex-direction: row;
        height: 25%;
    }
    @media (max-width: 320px) {
        height: 25%;
    }
`;

export const HeaderDiv2 = styled.div`
    width: 100%;
    height: 7vh;
    background-color: #0e434b;
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    align-items: center;

    @media (max-width: 1100px) {
        height: 8vh;
    }
    @media (max-width: 800px) {
        flex-direction: column;
        align-items: flex-start;
        height: 10vh;
    }
    @media (max-width: 450px) {
        flex-direction: row;
        height: 25vh;
    }
    @media (max-width: 320px) {
        height: 25vh;
    }
`;

export const HeaderButtonDiv = styled.div`
    width: 22%;
    padding-left: 2%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;

    @media (max-width: 1100px) {
        margin-left: 55px;
    }
    @media (max-width: 800px) {
        padding-left: 6%;
        padding-top: 10px;
    }
    @media (max-width: 450px) {
        padding-left: 0;
        margin-left: 0;
        width: 55%;
        flex-direction: column;
    }
    @media (min-width: 1200px) {
        width: 22%;
        padding-left: 2%;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
    }
`;

export const HeaderButtons = styled.button`
    background-color: #0e434b;
    color: white;
    margin-left: 10px;
    padding: 5px 10px;
    border: none;
    border-radius: 10px;
    font-size: 15px;
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    &:hover {
        background-color: #209aad;
        cursor: pointer;
    }

    @media (max-width: 450px) {
        font-size: 8px;
    }
`;

export const LangImagesDiv = styled.div`
    display: flex;
    flex-direction: row;

    @media (max-width: 450px) {
        justify-content: center;
    }
`;

export const LangImages = styled.img`
    width: 20px;
    height: 20px;
    padding-left: 10px;
    padding-top: 3px;
    &:hover {
        opacity: 50%;
        cursor: pointer;
    }

    @media (max-width: 375px) {
        padding-left: 15px;
    }
`;

export const SliderContainer = styled.div`
    width: 20%;
    height: 40%;
    margin-left: 15%;
    background-color: #fff;
    border-radius: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 1%;
    padding-right: 1%;

    @supports not (-ms-ime-align: auto) {
        justify-content: space-evenly;
        padding-left: 0;
        padding-right: 0;
    }
    @media (max-width: 1100px) {
        height: 30%;
        width: 25%;
        margin-left: 11%;
    }
    @media (max-width: 800px) {
        height: 25%;
        width: 35%;
        margin-top: 10px;
        margin-left: 20px;
    }
    @media (max-width: 450px) {
        height: 17%;
        width: 35%;
        margin-top: 25%;
        margin-left: 7px;
    }
`;

export const Slider = styled.input`
    width: 70%;
    background-color: #4baf4f;
    height: 20px;
    -webkit-appearance: none;
    background: linear-gradient(to right, #4baf4f 0%, #4baf4f 50%, #fff 50%, #fff 100%);  
    
    @supports not (-ms-ime-align: auto) {
        height: 20%;
        margin: 0;  
    border: none;
    outline: none;
    }
    ::-webkit-slider-runnable-track {
        -webkit-appearance: none;
    }
    ::-webkit-slider-thumb {
        width: 10px;
        -webkit-appearance: none;
        height: 10px;
        border-radius: 50%;
        background: #209aad;
        cursor: pointer;
    }
    ::-moz-range-track {
        -webkit-appearance: none; 
    }
    ::-moz-range-thumb {  
        width: 10px;
        -webkit-appearance: none;
        height: 10px;
        border-radius: 50%;
        background: #209aad;
        cursor: pointer;
    }
    ::-ms-track {
        width: 300px;
        height: 5px;
        background: transparent;
        background-color: transparent;
        border-color: transparent;
        border-width: 6px 0;
        color: transparent;
    }
    ::-ms-fill-lower {
        background: #777;
    }
    ::-ms-fill-upper {
        background: #ddd;
    }
    ::-ms-thumb { 
        border: none; 
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: #209aad;
        cursor: pointer;
    }
    :focus::-ms-fill-lower {
        background: #888;
    }
    :focus::-ms-fill-upper {
        background: #ccc;
    }
`;

export const DropDiv = styled.output`
    width: 40px;
    height: 40px;
    background-image: url(${dropImage});
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    text-align: center;
    position: absolute;
    z-index: 2;
`;

export const DropText = styled.p`
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    font-size: 75%;
    color: white;
    padding-top: 15%;
`;

export const SliderDiv = styled.div`
    width: 70%;
    height: 20%;
    background-color: #ddd;
`;

export const BarDiv = styled.div`
    height: 100%;
    width: 50%;
    background-color: #4baf4f;
`;

export const LittleCircle = styled.div`
    height: 10px;
    width: 10px;
    background-color: #209aad;
    border-radius: 50%;
    cursor: pointer;
    transition: 0.3s;
    &:hover {
        background-color: #0e434b;
    }

    @media (max-width: 450px) {
        height: 7px;
        width: 7px;
    }
`;

export const BigCircle = styled.div`
    height: 15px;
    width: 15px;
    background-color: #209aad;
    border-radius: 50%;
    cursor: pointer;
    transition: 0.3s;
    &:hover {
        background-color: #0e434b;
    }

    @media (max-width: 450px) {
        height: 12px;
        width: 12px;
    }
`;

export const HeaderImageEU = styled.img`
    width: 28%;
    height: 53%;
    padding-top: 10%;
`;

export const HeaderImageEU2 = styled.img`
    width: 35%;
    height: 45%;
    padding-top: 10%;
`;

export const ImageDiv = styled.div`
    width: 15%;
    height: 15%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    position: absolute;
    top: 0;
    left: 80%;
    border: 1px solid grey;
    background-color: #fff;
    z-index: 2;

    @media (max-width: 1100px) {
        height: 10%;
        width: 25%;
        left: 70%;
    }
    @media (max-width: 450px) {
        height: 10%;
        width: 30%;
        left: 59%;
    }
`;