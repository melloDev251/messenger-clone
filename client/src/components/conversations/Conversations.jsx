import React from "react";
import "./conversation.css";

export default function Conversations() {
  return (
    <div className="conversation">
      <img
        className="conversationImg"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe5PABjXc17cjIMOibECLM7ppDwMmiDg6Dw&usqp=CAU"
        alt="profil-img"
      />
      <span className="conversationName">John Doe</span>
    </div>
  );
}
