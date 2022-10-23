import styled from "styled-components";

export const InfoBoxDiv = styled.div`
    width: 20%;
    background-color: #fff;
    border: 1px solid grey;
    box-shadow: 3px 3px 10px grey;
    border-radius: 15px;
    position: absolute;
    text-align: left;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 3;

    @media (max-width: 1100px) {
        width: 30%;
        height: 20%;
    }
    @media (max-width: 450px) {
        width: 35%;
        height: 25%;
    }
`;

export const InfoBoxHead = styled.h2`
    font-size: 20px;
    font-weight: bold;
    padding-left: 20px;
    padding-right: 20px;
    font-family: 'Montserrat', sans-serif;

    @media (max-width: 450px) {
        font-size: 10px;
        padding-left: 10px;
        padding-right: 10px;
    }
`;

export const InfoBoxText = styled.p`
    font-size: 15px;
    padding-left: 20px;
    padding-right: 20px;
    font-family: 'Montserrat', sans-serif;

    @media (max-width: 450px) {
        font-size: 7px;
        padding-left: 10px;
        padding-right: 10px;
    }
`;

export const ButtonDiv = styled.div`
    display: flex;
    justify-content: center;
`;

export const InfoBoxButton = styled.button`
    color: white;
    font-size: 15px;
    padding: 5px 40px;
    margin-bottom: 10px;
    border: none;
    border-radius: 20px;
    font-family: 'Montserrat', sans-serif;
    background-color: #0e434b;
    &:hover {
        cursor: pointer;
        background-color: #f2c143;
    }

    @media (max-width: 450px) {
        font-size: 7px;
    }
`;