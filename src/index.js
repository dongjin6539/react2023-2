import React from "react";
import ReactDOM from "react-dom/client";

function Hello(props){
  return (
    <div>
      <div>{props.name}</div>
      <div>{props.text}</div>
      <div>{props.name2}</div>
      <div>{props.url}</div>
    </div>
  )
}

const name = {
  name : "dongjin",
  text : "hello",
  author : {
    name : "baby",
    url : "naver.com"
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Hello name={name.name} text={name.text} name2={name.author.name} url={name.author.url}/>);
