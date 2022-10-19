import React, { useState , useEffect } from 'react'
import { Tittle , Search , Menu , MRank , MName , MPrice , PriceChange , MVolume , MMarketCap , CoinGecko, MBio, MData } from './styles'
import axios from 'axios';
import Coin from './Coin'


export default function Home() {

    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState('')

    useEffect(()=> {
        axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
        .then(res =>{
          setCoins(res.data)
        }).catch(error=>console.log(error))
      }, []);

    const handleChange = (e) => {
      setSearch(e.target.value)
    };

    const filterCoins = coins.filter(coin=>
      coin.name.toLowerCase().includes(search.toLowerCase())
      );



  return (
    <>
    <Tittle>Cryptocurrency Prices by Market Cap</Tittle>
    <Search>
        <form><input placeholder='Search' type='text' onChange={handleChange}/></form>
    </Search>
    <Menu>
        <MBio>
          <MRank>#</MRank>
          <MName>Coin</MName>
        </MBio>
        <MData>
          <MPrice>Price</MPrice>
          <PriceChange>24h</PriceChange>
          <MVolume>Volume 24h</MVolume>
          <MMarketCap>Market Cap</MMarketCap>
        </MData>
        

    </Menu>
    {filterCoins.map(coin=>{
        return (
          <Coin key={coin.id} 
          rank={coin.market_cap_rank}
          name={coin.name} 
          image={coin.image}
          symbol={coin.symbol}
          volume={coin.total_volume}
          price={coin.current_price}
          priceChange={coin.price_change_percentage_24h}
          mktcap={coin.market_cap}
          />
        )
      })}
      <CoinGecko>Powered by CoinGecko</CoinGecko>
    </>

  )
}
