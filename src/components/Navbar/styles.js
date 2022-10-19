import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 80px;
    background: #202020;
    display:flex;
    align-items:center;
`;

export const Logo = styled.div`
    font-size:28px;
    font-weight: 500;
    color: #FFFFFF;
    margin-left:80px;
    width:50%;
    cursor:pointer;
`;

export const Menu = styled.div`
    font-weight: 400;
    font-size: 20px;
    color: #FFFFFF;
    width:50%;
    display:flex;
    align-items:center;
    justify-content: flex-end;
    margin-rigth:60px;
    cursor:pointer;
`;

export const Item = styled.div`
    padding:0px 20px;
`;

export const SignUp = styled.div`
    margin:0 80px 0 20px;
    font-weight: 500;
`;