import React, { useEffect, useState, useContext } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Wrapper, Username, PostedComment, Flexx, Crypto, Comment, Button } from './styles'
import axios from 'axios'
import { AuthContext } from "../../helpers/AuthContext";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'

export default function Profile() {

    let { id } = useParams()
    let navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [listOfComments, setListOfComments] = useState([]);

    const { authState } = useContext(AuthContext);
    

    useEffect(() => {
        axios.get(`http://localhost:3001/auth/basicInfo/${id}`).then((response) => {
          setUsername(response.data.username);
        });

        axios.get(`http://localhost:3001/comments/byuserId/${id}`).then((response) => {
          setListOfComments(response.data);
        });
    
      }, []);


    const deleteComment = (id)=>{
      axios.delete(`http://localhost:3001/comments/${id}`, {
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
    <Wrapper>
    <Username> {username} </Username>
    {listOfComments.map((coin, key)=>{
        return (
          <PostedComment>
            
            <Flexx>
              <Crypto onClick={()=>{navigate(`/currencies/${coin.crypto}`)}}>{coin.crypto}</Crypto>
             
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
    </Wrapper>
    </>
  )
}
