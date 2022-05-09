import React, {useState} from 'react';
import styled from "styled-components";
import SearchIcon from '@mui/icons-material/Search';
import { motion, AnimatePresence } from "framer-motion";


function Input({users}) {

    const [searchInput, setSearchInput] = useState("");
    const [count, setCount] = useState(0);
    const [list, setList] = useState(users);
    const [isFadingOut, setIsFadingOut] = useState(false);
   
    const searchUsers = (e) => {
      setSearchInput(e.target.value);
    }

    let userData = list.filter(item => {
      return Object.keys(item).some(key => item[key].toString().toLowerCase().includes(searchInput.toString().toLowerCase()))
    })

  let removeClick = (e) => {
    let remove = e.target.getAttribute('data-remove');
    setList(list.filter(items => items.name !== remove));
    setIsFadingOut(true);
  }
 
 
  


  return (
      <Container>
        <InputWrapper >
        <InputUsers type="text" onChange={searchUsers} placeholder="Search" /> 
        <SearchIcon className="search-icon" />
        </InputWrapper>
        <UsersWrapper>
          {userData.map((item, index) => {
            return (
              <AnimatePresence exitBeforeEnter key={index}>
              <motion.div>
               <Users className={isFadingOut ? "item-fadeout" : "item"}> 
                <div onClick={() => console.log(`you have clicked ${item.name}`)}>{item.name}</div> - <Counter>{count}</Counter>
                <Button onClick={removeClick} data-remove={item.name} >X</Button>  
                </Users>
               </motion.div>
              </AnimatePresence>
            )
          })}
        </UsersWrapper>
      </Container>
  )
}

export default Input;

const Container = styled.div`
  display: flex;
  max-width: 100%;
  height: auto;
  justify-content: center;
  position: relative;
`
const InputWrapper = styled.div`
  position: relative;

  .search-icon {
    position: absolute;
    padding: 2px;
    right: 0;
    font-size: 20px;
  }


  @media (max-width: 768px) {
    position: fixed;
    top: 10px;

    .search-icon {
      padding: 5px;
    }
  }
`
const InputUsers = styled.input`
    @media (max-width: 768px) {
      padding: 5px 100px;
      text-align: center;
    }
`

const UsersWrapper = styled.div`
   display: flex;
   flex-wrap: wrap;
   flex-direction: row;
   width: 60vw;

   @media (max-width: 1026px) {
     overflow-y: scroll;
     height: 50vh;
   }
   
   @media (max-width: 768px) {
     margin-top: 50px;
     width: 65vw;
     overflow-y: scroll;
   }


`
const Users = styled.div`
  display: flex;
  justify-content: space-around;
  width: 120px;
  border: 1px solid black;
  padding: 5px;
  margin: 0 5px 5px 5px;
  
  .item {
    animation: fadeIn .3s linear forwards;
  }
  .item-fadeout {
    animation: fadeout .3s linear forwards;
  }
  @keyframes fadein {
    0% { opacity: 0; }
  100% { opacity: 1; }
  }
  @keyframes fadeout {
    0% { opacity: 1; }
  100% { opacity: 0; }
  }
  
  :hover {
    background-color: #FFDF64;
    transition: ease-in 0.3s;

    Button {
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    width: 55vw;
    justify-content: center;
  }

`
const Counter = styled.div`
  background-color: #A39594;
  display: flex;
  width: 15px;
  justify-content: center;
  border-radius: 50%;
  margin: 0 5px;
`

const Button = styled.button`
  display: flex;
  align-items: center;
  padding: 0 2px;
  cursor: pointer;
  border: none;
  background-color: transparent;
  opacity: 0;
  transition: ease-out .3s;
  

  :hover {
    color: red;
  }
`

