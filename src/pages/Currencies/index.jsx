import React , { useState , useEffect, useContext} from 'react'
import { Container, Tag, Result, CoinImg, Name, Symbol, Price , Coinbox, CreateComment, Tittle, CommentBox, Submit , PostedComment, Comment, User, Button, Flexx, TopRow, MidRow, Stat, BotRow, PriceBox, HeaderRow } from './styles'
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { PriceChange, AthChange, AtlChange, FullyValuation, MSupply } from './changes';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { AuthContext } from "../../helpers/AuthContext";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'


export default function Currencies() {

  const { authState } = useContext(AuthContext);
  
  
  const [coins, setCoins] = useState([]);
  let navigate = useNavigate();

  useEffect(()=> {
      axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
      .then(res =>{
        setCoins(res.data)
      }).catch(error=>console.log(error))
    }, []);

  let { crypto } = useParams();
  let coin = { crypto }  
 
  const found = coins.find(obj => {
    return obj.name === (coin.crypto);
  }); 


  const [listOfComments, setListOfComments] = useState([]);

  useEffect(()=>{
    axios.get(`https://crypto-stats-viihuugo.herokuapp.com/comments/byCrypto/${crypto}`).then((response)=>{
      setListOfComments(response.data);
    })
  }, [])

 


  
  
  const initialValues = {
    commentsText: "",
    crypto: `${crypto}`
  };


  const onSubmit = (data) => {
    axios.post("https://crypto-stats-viihuugo.herokuapp.com/comments", {
        commentsText: `${data.commentsText}`,
        crypto: `${crypto}`,
      },
      {
        headers: { acessToken: localStorage.getItem("acessToken"),
       },
      }
  )
  .then((response)=>{
    if (response.data.error) {
      console.log(response.data.error);
    } else {
      navigate("/")
      }
    });
   
  
};

const validationSchema = Yup.object().shape({
  commentsText: Yup.string().required(),
  crypto: Yup.string().required(),
});

 

const deleteComment = (id)=>{
  axios.delete(`https://crypto-stats-viihuugo.herokuapp.com/comments/${id}`, {
    headers: { acessToken: localStorage.getItem("acessToken") },
  }).then(()=>{
      setListOfComments(
        listOfComments.filter((val) => {
          return val.id != id;
        })
      );
  });
};
  

  return (
    <>
    {found &&
    <div>
    <Container>
      <HeaderRow>
        <Coinbox>
          <CoinImg src={found.image}/>
          <Name>{crypto}</Name>
          <Symbol>{found.symbol.toUpperCase()}</Symbol>
        </Coinbox> 
        <PriceBox>
          <Price>${found.current_price}</Price>
          <PriceChange percentageChange={found.price_change_percentage_24h}/>
        </PriceBox>
      </HeaderRow>
      
      
      <TopRow>
        <Stat><Tag>Rank</Tag><Result>{found.market_cap_rank}</Result></Stat>
        <Stat><Tag>Market Cap</Tag><Result>${found.market_cap.toLocaleString()}</Result></Stat>
        <Stat><Tag>Volume 24h</Tag><Result>${found.total_volume.toLocaleString()}</Result></Stat>
      </TopRow>
      
      <MidRow>
        <Stat><Tag>Fully Diluted Valuation</Tag><FullyValuation fullyValuation={found.fully_diluted_valuation}/></Stat>
        <Stat><Tag>All Time High</Tag><Result>${found.ath.toLocaleString()}</Result><AthChange percentageAth={found.ath_change_percentage}/></Stat>
        <Stat><Tag>All Time Low</Tag><Result>${found.atl.toLocaleString()}</Result><AtlChange percentageAtl={found.atl_change_percentage}/></Stat>
      </MidRow>
      
      <BotRow>
        <Stat><Tag>Circulating Supply</Tag><Result>{found.circulating_supply.toLocaleString()}</Result></Stat>
        <Stat><Tag>Total Supply</Tag><Result>{found.total_supply.toLocaleString()}</Result></Stat>
        <Stat><Tag>Max Supply</Tag><MSupply maxSupply={found.max_supply}/></Stat>
      </BotRow>
      
      

    </Container>  

    <CreateComment>
      
      <Tittle>How do you feel about {found.name}?</Tittle>
      
      <CommentBox>
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
          <Form>
            <Field id="inputComment" name="commentsText" autoComplete="off"/>
            <Submit type='submit'>Post</Submit>
          </Form>
        </Formik>
        
      </CommentBox>
      
      

      
    </CreateComment>
    {listOfComments.map((coin, key)=>{
          return (
            <PostedComment>
              <Flexx>
                <User onClick={()=>{navigate(`/profile/${coin.UserId}`)}}>{coin.username}</User>
                
                {authState.username === coin.username && (
                  <>
                  <Button onClick={() => {
                          deleteComment(coin.id)
                        }}><FontAwesomeIcon icon={faTrashCan} /></Button>
                  </>
                  )}
              </Flexx>
          
              <Comment>{coin.commentsText}</Comment>
     
            </PostedComment>
          )
          
        })}

    </div>  
    }

    
    
    </>
  )
}
