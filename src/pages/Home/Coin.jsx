import React from 'react';
import { Container , Row , CoinBox , Rank , Name , Symbol , CoinImg , Price , CoinData , Volume , Negative , Positive , MarketCap  } from './styles';
import { useNavigate } from 'react-router-dom';

export default function Coin({rank, name, image, symbol, price, volume, priceChange , mktcap }) {

  let navigate = useNavigate();

  return (
    <>
    <Container  onClick={()=>{navigate(`/currencies/${name}`)}}>
        <Row>
            <CoinBox>
                
                <Rank>{rank}</Rank>
                <CoinImg src={image} alt='crypto'></CoinImg>
                <Name>{name}</Name>
                <Symbol>{symbol.toUpperCase()}</Symbol>
            </CoinBox>
            <CoinData>
                <Price>${price}</Price>                
                {priceChange < 0 ? (
                  <Negative>{priceChange.toFixed(2)}%</Negative>
                ) : (
                  <Positive>{priceChange.toFixed(2)}%</Positive>
                )}
                <Volume>${volume.toLocaleString()}</Volume>
                <MarketCap>${mktcap.toLocaleString()}</MarketCap>
            </CoinData>
        </Row>
    </Container>
    </>
  )
}
