import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import "./conversation.css";

export default function Conversation({ conv, currentUser }) {
  const [user, setUser] = useState("null");
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  useEffect(() => {
    const friendId = conv.members.find((m) => m !== currentUser._id);

    const getUser = async () => {
      try {
        const res = await axios("/users?userId=" + friendId);
        setUser(res.data);
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
        src={
          user.profilePicture ? user.profilePicture : PF + "person/noAvatar.png"
        }
        alt="PF-img"
      />
      <span className="conversationName"> {user.username} </span>
    </div>
  );
}
