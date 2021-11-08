import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import "./conversation.css";

export default function Conversations({ conv, currentUser }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const friendId = conv.members.find((m) => m !== currentUser._id);

    const getUser = async () => {
      try {
        const res = await axios("/users?userId=" + friendId);
        setUser(res.data)
        // console.log(res);
      } catch (error) {
        console.log(error);
      }
    };
    getUser();
  }, [conv, currentUser]);
  return (
    <div className="conversation">
      <img
        className="conversationImg"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe5PABjXc17cjIMOibECLM7ppDwMmiDg6Dw&usqp=CAU"
        alt="profil-img"
      />
      <span className="conversationName"> {user.username} </span>
    </div>
  );
}
