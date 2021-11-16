import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ChatOnline.css";

export default function ChatOnline({ onlineUsers, currentId, setCurrentChat }) {
  const [friends, setFriends] = useState([]);
  const [onlineFriends, setOnlineFriends] = useState([]);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  useEffect(() => {
    const getFriends = async () => {
      const res = await axios.get("/users/friends/" + currentId);
      setFriends(res.data);
      // console.log(res);
    };
    getFriends();
  }, [currentId]);

  // console.log(friends);

  useEffect(() => {
    setOnlineFriends(friends.filter((f) => onlineUsers.includes(f._id)));
  }, [friends, onlineUsers]);

  // console.log(onlineUsers);

  const handleClick = async (user) => {
    const res = await axios.get(`/conversations/find/${currentId}/${user._id}`);
    console.log(res);
    // setCurrentChat(res.data);
  };

  return (
    <div className="chatOnline">
      {onlineFriends.map((o) => (
        <div className="chatOnlineFriend" onClick={() => handleClick(o)}>
          <div className="chatOnlineImgContainer">
            <img
              className="chatOnlineImg"
              src={
                o?.profilePicture
                  ? PF + o.profilePicture
                  : PF + "person/noAvatar.png"
              }
              alt="o-img"
            />
            <div className="chatOnlineBadge"></div>
          </div>
          <span className="chatOnlineName"> {o?.username} </span>
        </div>
      ))}
    </div>
  );
}
