import React from "react";
import "./message.css";

export default function Message({own}) {
  return (
    <div className={own ? "message own" : "message"}>
      <div className="messageTop">
        <img
          className="messageImg"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe5PABjXc17cjIMOibECLM7ppDwMmiDg6Dw&usqp=CAU"
          alt=""
        />
        <p className="messageText">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto
          vitae officia dolore. Harum nam repellendus ut molestiae! Ipsam,
          magnam totam!
        </p>
      </div>
      <div className="messageBottom">1 hour ago</div>
    </div>
  );
}
