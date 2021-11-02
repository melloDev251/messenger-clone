import React from "react";
import "./ChatOnline.css";

export default function chatOnline() {
  return (
    <div className="chatOnline">
      <div className="chatOnlineFriend">
        <div className="chatOnlineImgContainer">
          <img
            className="chatOnlineImg"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe5PABjXc17cjIMOibECLM7ppDwMmiDg6Dw&usqp=CAU"
            alt="chat-img"
          />
          <div className="chatOnlineBadge"></div>
        </div>
        <span className="chatOnlineName">Mello Dev</span>
      </div>
      <div className="chatOnlineFriend">
        <div className="chatOnlineImgContainer">
          <img
            className="chatOnlineImg"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe5PABjXc17cjIMOibECLM7ppDwMmiDg6Dw&usqp=CAU"
            alt="chat-img"
          />
          <div className="chatOnlineBadge"></div>
        </div>
        <span className="chatOnlineName">Mello Dev</span>
      </div>
      <div className="chatOnlineFriend">
        <div className="chatOnlineImgContainer">
          <img
            className="chatOnlineImg"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe5PABjXc17cjIMOibECLM7ppDwMmiDg6Dw&usqp=CAU"
            alt="chat-img"
          />
          <div className="chatOnlineBadge"></div>
        </div>
        <span className="chatOnlineName">Mello Dev</span>
      </div>
    </div>
  );
}
