import styled from "styled-components";

export const InfoPageMainDiv = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: #f8f7f7;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    align-content: center;
`;

export const HeaderImgDiv = styled.div`
    width: 100%;
    height: 200px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 80% 60%;

    @media (max-width: 450px) {
        height: 100px;
        min-height: 100px;
    }
`;

export const HeaderImage = styled.img`
    width: 100%;
    height: 450%;
`;

export const InfoTextDiv = styled.div`
    width: 700px;
    flex: 1;
    background-color: white;
    text-align: left;

    @media (max-width: 1100px) {
        width: 55%;
    }

    @media (max-width: 450px) {
        width: 60%;
        margin-left: 30%;
    }
`;

export const InfoHead = styled.h1`
    font-size: 45px;
    padding-left: 40px;
    font-family: 'Montserrat', sans-serif;

    @media (max-width: 450px) {
        font-size: 15px;
        padding-left: 20px;
        padding-right: 20px;
    }
`;

export const InfoText = styled.p`
    font-size: 15px;
    font-weight: bold;
    padding-left: 40px;
    padding-right: 40px;
    font-family: 'Montserrat', sans-serif;

    @media (max-width: 450px) {
        font-size: 8px;
        padding-left: 20px;
        padding-right: 20px;
    }
`;

export const InfoTextItalic = styled.p`
    font-size: 20px;
    font-weight: bold;
    font-style: italic;
    padding-left: 40px;
    padding-right: 40px;
    font-family: 'Montserrat', sans-serif;
    color: #f2c143;

    @media (max-width: 450px) {
        font-size: 9px;
        padding-left: 20px;
        padding-right: 20px;
    }
`;

export const InfoTextLink = styled.a`
    /* padding-left: 40px;
    padding-right: 40px;

    @media (max-width: 450px) {
        padding-left: 20px;
        padding-right: 20px;
    } */
`;

export const InfoTextUL = styled.ul`
    margin: 0;
    padding-left: 50px;

    @media (max-width: 450px) {
        padding-left: 30px;
        padding-right: 30px;
    } 
`;

export const InfoTextList = styled.li`
    padding: 0;
    margin: 0;
    font-size: 15px;
    font-weight: bold;
    font-family: 'Montserrat', sans-serif;

    @media (max-width: 450px) {
        font-size: 8px;
    }
`;

export const InfoTextImage = styled.img`
    margin-left: 40px;
    width: 90%;

    @media (max-width: 1100px) {
        width: 80%;
    }

    @media (max-width: 450px) {
        margin: 15px;
        width: 70%;
    }
`;

export const InfoPageSidenav = styled.div`
    width: 18%;
    height: 63%;
    background-color: #e8e1df;
    position: absolute;
    top: 265px;
    left: 6%;
    text-align: left;

    @media (max-width: 1100px) {
        left: 3%;
    }

    @media (max-width: 450px) {
        width: 27%;
        height: 50%;
        top: 230px;
    }
`;

export const SideNavHead = styled.p`
    font-size: 30px;
    font-weight: bold;
    padding-left: 40px;
    padding-right: 40px;
    font-family: 'Montserrat', sans-serif;

    @media (max-width: 1100px) {
        padding-left: 20px;
    }

    @media (max-width: 800px) {
        font-size: 20px;
    }

    @media (max-width: 450px) {
        font-size: 10px;
        padding-left: 20%;
        padding-right: 10px;
    }
`;

export const SideNavUL = styled.ul`

    @media (max-width: 450px) {
        padding-left: 20%;
    }
`;

export const SideNavList = styled.li`
    margin-left: 20px;
    list-style-type: circle;
    &:hover {
        cursor: pointer;
        color: #209aad;
    }

    @media (max-width: 1100px) {
        margin-left: 0;
    }

    @media (max-width: 450px) {
        font-size: 8px;
        margin-bottom: 15%;
        margin-right: 5px;
    }
`;