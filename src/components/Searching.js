import React,{useState} from "react";
import {Box,Input,Text} from '@chakra-ui/react';
import { Content } from "./Content";

export default function Search(){

    let arr = ["JavaScript","UI/UX","Excel","PHP","Python","Node.js","React.js","Angular","Vue","Java",
  "C++","C#","Bootstrap","Tailwand","Chakra UI","HTML"];
  const [searching, setSearch] = useState('');
  
       function handle(e){
        if(arr.includes(e.target.value)){
          setSearch(true)
       }else{
        setSearch(false)
       }
      }

      return(
        <Box>
      <Input width={"30"} type={"text"} onChange={handle}></Input>
      {/* <Button onClick={addItem}>Button</Button> */}
      <Text>{searching?"Found":""}</Text>
      {/* {Content.props.CampType.map((e) => (<p>{e}</p>))} */}
      </Box>
      );
}
