import React, {useState} from "react";

export default function Button() {
 //const customers={text:'click me'}
 //state={name:'muthy'} 
 //this.setState , react will react
 
  const [buttonText, setButtonText] = useState("Click me, please");
  const [color, setColor] = useState("red");
  
  function handleClick(){
    return [setButtonText("Thanks, been clicked!"),setColor("blue")]
   }

  return <button onClick={handleClick} style={{color:color}} >{buttonText}</button>
}










//useState
//useRef
//useContext
//useEffect
//useReducer
//useFetch
//.....