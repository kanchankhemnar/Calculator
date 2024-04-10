import Heading from "./components/heading";
import Input from "./components/input";
import "./App.css";
import { useState } from "react";

let array = [
  [7, 8, 9, "+"],
  [4, 5, 6, "-"],
  [1, 2, 3, "*"],
  [0, ".", "^", "/"],
  ["AC", "ENTER"],
];
function Calculator() {

  // console.log(event.target.innerText);

let [inputText,inputState]=useState([]);

const onClickChange=(event)=>{

  let n=event.target.innerText;

  let newText = inputText + n;
  if (n==="AC") {
    newText="";
  }
  else if (n==="Enter") {
    newText=eval(inputText);
  }
  else if (n==="^") {
    newText=inputText+"**";
  }
  inputState(newText);
  document.getElementById("inp123").value=newText;
  console.log(document.getElementById("inp123").value);
  
}
  return (
    <>
      <center>
        <Heading></Heading>
        <input type="text"  name="input" id="inp123" readOnly/>
        <Input arr={array[0]} onClick1={onClickChange} ></Input>
        <Input arr={array[1]} onClick1={onClickChange}></Input>
        <Input arr={array[2]} onClick1={onClickChange }></Input>
        <Input arr={array[3]} onClick1={onClickChange}></Input>
        <button type="button " className="btn btn-primary btn-lg button2" onClick={onClickChange}>
         AC
        </button>
        
        <button type="button " className="btn btn-secondary btn-lg " onClick={onClickChange}>
          Enter
        </button>
      </center>
    </>
  );
}

export default Calculator;
