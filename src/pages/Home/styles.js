import styled from "styled-components";

export const Tittle = styled.div`
    font-size:32px;
    font-weight:700;
    color:#ffffff;
    text-align:center;
    margin:50px;
`;

export const Search = styled.div`
    text-align:center;
    margin-bottom:50px;

    input {
        padding-left: 16px;
        width: 300px;
        height: 40px;
        border-radius: 4px;
        border: none;
        background:#2D2D4B;
        color:#FFF9F9;
        font-size:16px;
    }

    input:focus{
    outline: none;
}
`;

export const Menu = styled.div`   
    margin:0 80px;
    background:#151522;
    height: 60px; 
    font-size:14px;
    font-weight:600;
    color:#9E9E9E;   
    display:flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 1360px) {
        margin:0 40px;
    }
    
`;

export const MBio = styled.div`
    display: flex;
    align-items: center;
    width: 480px;
    height:100%;  
  
    @media (max-width: 1520px) {
        width: 430px;
    }

    @media (max-width: 1205px) {
        width: 150px;
    }
`;

export const MRank = styled.div`
    width:40px;
    text-align:center;    

    @media (max-width: 1205px) {
        padding:0 15px;
    }
`;

export const MName = styled.div`
    width: 450px;
`;

export const MData = styled.div`
    display:flex;  
`;

export const MPrice = styled.div`
    padding:30px 0;
    width:170px;
    text-align:right;

    @media (max-width: 800px) {
        padding-right:10px;
    }
`;

export const PriceChange = styled.div`
    padding:30px 0;
    width:150px;
    text-align:right;

    @media (max-width: 950px) {
        display:none;
    }   
`;

export const MVolume = styled.div`
    padding:30px 0;
    width:260px;
    text-align:right;
    

    @media (max-width: 1480px) {
        display:none;
    }
`;

export const MMarketCap = styled.div`
    text-align:right;
    padding:30px 0;
    padding-right:9px;
    width:250px;

    @media (max-width: 800px) {
        display:none;
    }
`;

export const Container = styled.div`
    display: flex;
    justify-content: center;
    background:#1D1D2E;
    margin:0 80px;

    @media (max-width: 1360px) {
        margin:0 40px;
    }
`;

export const Row = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    height: 60px;
    border-bottom: 3px solid #414040;
    width:100%;

    .star {
        font-size:18px;
        color:#9E9E9E;
        width:20px;
        padding-left:10px;
    }

    .star:hover {
        color:#B9A80D;
    }
`;

export const CoinBox = styled.div`
    display: flex;
    align-items: center;
    width: 510px;
    height:100%;
    padding-left:10px;
    cursor:pointer;    
`;

export const Rank = styled.div`
    font-size:14px;
    font-weight:600;
    color:#9E9E9E;
    width:20px;
    
`;

export const Name = styled.div`
    font-size:14px;
    font-weight:600;
    color:#FFF9F9;
    cursor:pointer;
`;

export const Symbol = styled.div`
    font-size:12px;
    font-weight:600;
    color:#9E9E9E;
    padding:15px;

    
`;

export const CoinImg = styled.img`   
    heigh:20px;
    width:20px; 
    margin:0 15px 0 10px; 
`;

export const CoinData = styled.div`
    display:flex;
    cursor:pointer;  
`;


export const Price = styled.div`
    font-size:14px;
    font-weight:600;
    color:#9E9E9E;
    padding:30px 0;
    width:170px;
    text-align:right;

    @media (max-width: 800px) {
        padding-right:10px;
    }
`;

export const Volume = styled.div`
    font-size:14px;
    font-weight:600;
    color:#9E9E9E;
    padding:30px 0;
    width:260px;
    text-align:right;

    @media (max-width: 1480px) {
        display:none;
    }
`;

export const Negative = styled.div`
    font-size:14px;
    font-weight:400;
    color:#E03232;
    padding:30px 0;
    width:150px;
    text-align:right;

    @media (max-width: 950px) {
        display:none;
    }
`;

export const Positive = styled.div`
    font-size:14px;
    font-weight:400;
    color:#38D02A;
    padding:30px 0;
    width:150px;
    text-align:right;

    @media (max-width: 950px) {
        display:none;
    }
`;

export const MarketCap = styled.div`
    font-size:14px;
    font-weight:600;
    color:#9E9E9E;
    padding:30px 0;
    padding-right:9px;
    width:250px;
    text-align:right;

    @media (max-width: 800px) {
        display:none;
    }
`;

export const CoinGecko = styled.div`
    font-size:20px;
    color:#9E9E9E;
    margin:30px 80px;
    text-align:right;

    @media (max-width: 1360px) {
        margin:30px 40px;
    }
`;



