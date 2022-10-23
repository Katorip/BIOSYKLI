import styled from "styled-components";

export const FooterStyle = styled.div`
    width: 40%;
    height: 6%;
    position: absolute;
    top: 94%;
    left: 60%;
    background-color: #0e434b;
    border-top-left-radius: 90px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    z-index: 2;

    @media (max-width: 1100px) {
        height: 4%;
        top: 96%;
    }

    @media (max-width: 450px) {
        height: 2%;
        top: 98%;
    }
`;

export const FooterStyle2 = styled.div`
    width: 50%;
    height: 8%;
    min-height: 65px;
    background-color: #0e434b;
    border-top-left-radius: 90px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    z-index: 2;
`;

export const FooterImage = styled.img`
    width: 25%;
    height: 60%;
    padding-right: 20px;

    @media (max-width: 1100px) {
        width: 35%;
        height: 55%;
    }
`;