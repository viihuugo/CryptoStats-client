import styled from "styled-components";

export const Wrapper = styled.div`
    display:flex;
    width: 100%;
    height: 150px;
    background: #202020;
    display:flex;
    margin-top:50px;
    color:#ffffff;

    @media (max-width: 785px) {
        height: 180px;
    }

    @media (max-width: 650px) {
        height: 225px;
    }
`;

export const Container = styled.div`
    width:50%;
    text-align:left;
    padding:30px 80px;

    @media (max-width: 1065px) {
        padding:20px 0 20px 80px;
    }
`;

export const Tittle = styled.div`
    font-size:24px;
`;

export const Text = styled.div`
    font-size:14px;
    width:50%;
    margin-top:2px;
`;

export const Info = styled.div`
    width:50%;
    margin-top:40px;
`;

export const Copyright = styled.div`
    width:100%;
    font-size:14px;
    text-align:center;
`;

export const Socials = styled.div`
    display:flex;
    margin-top:20px;
`;

export const Link = styled.div`
    width:50%;
    font-size:18px;
    text-align:center;

    a{
            text-decoration:none;
            color:inherit;
            cursor:pointer;
        }
`;
