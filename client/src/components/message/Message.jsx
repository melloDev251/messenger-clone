import React from "react";
import "./message.css";
import {format} from "timeago.js"

export default function Message({own, msg}) {
  return (
    <div className={own ? "message own" : "message"}>
      <div className="messageTop">
        <img
          className="messageImg"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe5PABjXc17cjIMOibECLM7ppDwMmiDg6Dw&usqp=CAU"
          alt=""
        />
        <p className="messageText">
          {msg.text}
        </p>
      </div>
      <div className="messageBottom"> {format(msg.createdAt)} </div>
    </div>
  );
}
