import styled from "styled-components";

export const BoxStyle = styled.div`
    width: 30%;
    height: 40%;
    top: 55%;
    left: 200px;
    background-color: #fff;
    border: 1px solid grey;
    box-shadow: 3px 3px 10px grey;
    border-radius: 15px;
    position: absolute;
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 2;

    @media (max-width: 1100px) {
        width: 50%;
        height: 25%;
    }
    @media (max-width: 800px) {
        width: 50%;
        height: 30%;
    }
    @media (max-width: 450px) {
        width: 55%;
        height: 45%;
        top: 45%;
        left: 130px;
    }
    @media (max-width: 375px) {
        height: 45%;
        top: 45%;
        left: 130px;
    }
`;

export const CloseButtonDiv = styled.div`
    width: 100%;
    text-align: left;
    padding-top: 0;
    margin-top: 0;
`;

export const CloseButtonStyle = styled.span`
    font-weight: bold;
    float: right;
    font-size: 22px;
    line-height: 20px;
    cursor: pointer;
    transition: 0.3s;
    padding-right: 20px;
    padding-top: 2%;
    &:hover {
        color: #f2c143;
    }
`;

export const TabTextDiv = styled.div`
    width: 100%;
    text-align: left;
    padding-top: 0;
    margin-top: 0;
`;

export const TabHeadStyle = styled.h3`
    font-size: 140%;
    padding-left: 8%;
    padding-top: 0;
    margin: 0;
    font-weight: bold;
    font-family: 'Montserrat', sans-serif;

    @media (max-width: 450px) {
        font-size: 80%;
    }
`;

export const TabTextStyle = styled.p`
    font-size: 90%;
    padding-left: 8%;
    padding-right: 8%;
    font-family: 'Montserrat', sans-serif;
    margin: 3% 0;

    @media (max-width: 450px) {
        font-size: 60%;
    }
`;

export const TabButton = styled.button`
    color: white;
    font-size: 15px;
    padding: 5px 40px;
    border: none;
    border-radius: 20px;
    font-family: 'Montserrat', sans-serif;
    background-color: #0e434b;
    &:hover {
        cursor: pointer;
        background-color: #f2c143;
    }

    @media (max-width: 450px) {
        font-size: 10px;
    }
`;