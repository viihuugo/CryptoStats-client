import styled from "styled-components";

export const Wrapper = styled.div`    
    width:100%;
    display:flex;
    justify-content:center;
`;

export const Container = styled.div`
    height:500px;
    width:500px;
    margin:60px;
    background:#1D1D2E;
    border-radius:5px;
    

    #inputComment {
        width: 450px;
        height: 45px;
        background: #D9D9D9;
        border-radius: 5px;
        font-size:18px;
    }
`;

export const Header = styled.div`    
    display:flex;
    justify-content:center;
`;

export const Access = styled.div`    
    font-weight: 700;
    font-size: 32px;
    color: #7a7a7a;
    margin:35px 25px 10px 25px;
    cursor:pointer;
`;

export const Register = styled.div`    
    font-weight: 700;
    font-size: 32px;
    color: #FFFFFF;
    margin:35px 25px 10px 25px;
    padding-bottom:5px;
`;

export const Content = styled.div`    
    width:500px;
    margin-left:25px;

    input:focus {
    outline: none;
    }
`;

export const Username = styled.div`    
    font-weight: 700;
    font-size: 20px;
    color: #FFFFFF;
    margin:40px 0 20px 0;
`;

export const Button = styled.button`    
    width: 450px;
    height:50px;
    margin:45px 0;
    font-size:20px;
    font-weight:700;
    color:#FFFFFF;
    background: #0c8c66;
    border-radius: 5px;
    align-items:center;
    cursor:pointer;
    transition: all .5s ease;

    &:hover {
        background: #20C997;
    }
`;