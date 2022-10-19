import styled from "styled-components";

export const Container = styled.div`
    height:650px;
    margin:80px;
    background:#1D1D2E;
    display:flex;

    @media (max-width: 1250px) {
        margin:40px;
        height:700px;
    }

    @media (max-width: 760px) {
        margin:20px;
        height:730px;
    }
`;

export const HeaderRow = styled.div`
    display:flex;
    position:absolute;
    top: 240px;
    width:90%;
    margin-left: 60px;
    
    @media (max-width: 1250px) {
        margin-left:40px;
    }

    @media (max-width: 1090px) {
        margin-left:20px;
    }
`;

export const Coinbox = styled.div`
    width: 52%;
    display:flex;
`;

export const CoinImg = styled.img`    
    width:50px;    
    padding:0 20px;
    height:50px;
`;

export const Name = styled.div`
    font-family: 'Roboto';
    font-weight: 700;
    font-size: 36px;
    color: #FFFFFF;
`;

export const Symbol = styled.div`
    font-weight: 700;
    font-size: 20px;
    color: #FFFFFF;
    margin:10px 20px;
`;

export const PriceBox = styled.div`
    display:flex;
    width:40%;
    justify-content: space-around;
`;

export const Price = styled.div`
    font-weight: 700;
    font-size: 36px;
    line-height: 42px; 
    color: #A8A8A8;
`;

export const Percentage = styled.div`
    font-weight: 700;
    font-size: 32px;
    line-height: 38px;
   
`;

export const AthPercentage = styled.div`
    margin-top:15px;
    font-weight: 700;
    font-size: 20px;
`;

export const AtlPercentage = styled.div`
    margin-top:15px;
    font-weight: 700;
    font-size: 20px;
`;

export const Positive = styled.div`
    color:#38D02A;    

`;

export const Negative = styled.div`
    color:#E03232;
`;

export const Tag = styled.div`
    font-weight: 700;
    font-size: 24px;
    color: #FFFFFF;
`;

export const Result = styled.div`
    font-weight: 700;
    font-size: 20px;
    color: #A8A8A8;
    margin-top:15px;
`;

export const CreateComment = styled.div`
    height:250px;
    margin:80px;
    background:#1D1D2E;

    @media (max-width: 1250px) {
        margin:40px;
    }
`;

export const Tittle = styled.div`
    font-weight: 500;
    font-size: 28px;
    color: #FFFFFF;
    margin:2%;
    padding-top:20px;
`;

export const CommentBox = styled.div`
    #inputComment {
        height:80px;
        width:95%;
        margin-left:2%;
        background:#2d2d4b;
        border: none;
        color: #FFFFFF;
        font-size:24px;
        padding-left: 16px;
    }

    

    input:focus{
    outline: none;
    }
`;

export const Submit = styled.button`
    height:40px;
    width:100px;
    margin-left:2%;
    margin-top:20px;
    border-radius:5px;
    font-size:16px;
    font-weight:600;
    background: #0c8c66;
    color:#FFFFFF;
    border:none;
    cursor:pointer;

    &:hover {
        background: #20C997;
    }

`;

export const PostedComment = styled.div`
    height:150px;
    margin:0 80px;    
    background:#1D1D2E;
    border-bottom: 3px solid #414040;

    @media (max-width: 1250px) {
        margin:40px;
    }
`;

export const Flexx = styled.div`   
    display:flex;   
    justify-content: space-between; 
`;

export const User = styled.div`   
    font-size:24px;
    font-weight:600;
    color: #ffffff; 
    padding:30px 20px;
    cursor:pointer;
`;

export const Comment = styled.div`   
    font-size:20px;
    color: #A8A8A8; 
    padding:0 20px; 
`;

export const Button = styled.button`   
    font-size:20px;
    color: #A8A8A8; 
    background: none;
    border:none;
    cursor:pointer; 
    margin-right:30px;
`;

export const Flex = styled.div`   
    display:flex: 
`;

export const TopRow = styled.div`   
    display:flex;
    position:absolute;
    top:384px;
    width:90%;
    justify-content: space-between;
    margin-left: 60px;

    @media (max-width: 1250px) {
        margin-left:40px;
    }

    @media (max-width: 1090px) {
        margin-left:20px;
    }
    
`;

export const MidRow = styled.div`   
    display:flex;
    position:absolute;
    top: 531px;
    width:90%;
    justify-content: space-between;
    margin-left: 60px;

    @media (max-width: 1250px) {
        margin-left:40px;
    }

    @media (max-width: 1090px) {
        margin-left:20px;
    }    
`;

export const BotRow = styled.div`   
    display:flex;
    position:absolute;
    top: 695px;  
    width:90%;
    justify-content: space-between;
    margin-left: 60px;
    
    @media (max-width: 1250px) {
        margin-left:40px;
    }

    @media (max-width: 1090px) {
        margin-left:20px;
    }
`;

export const Stat = styled.div`   
   width:25%;
`;




