import axios from "axios";
import { useEffect, useState, useContext } from "react";
import "./chatOnline.css";
import { AuthContext } from "../../context/AuthContext";

export default function ChatOnline({ onlineUsers, currentId, setCurrentChat }) {
  const [friends, setFriends] = useState([]);
  const [onlineFriends, setOnlineFriends] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const getFriends = async () => {
      const res = await axios.get("http://localhost:3330/api/users/all");
      setFriends(res.data);
    };

    getFriends();
  }, [currentId]);

  useEffect(() => {
    // setOnlineFriends(friends.filter((f) => onlineUsers.includes(f._id)));
    setOnlineFriends(friends);
  }, [friends, onlineUsers]);

  const handleClick = async (userr) => {
    try {
      const res = await axios.post(
        `http://localhost:3330/api/conversations/`,
        {
          senderId: user._id,
          receiverId: userr._id
        }
      );
      setCurrentChat(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="chatOnline">
      {onlineFriends.map((o) => (
        <div className="chatOnlineFriend" onClick={() => handleClick(o)}>
          <div className="chatOnlineImgContainer">
            <img
              className="chatOnlineImg"
              src={require("../../assets/images/img_avatar.png")}
              alt=""
            />
            <div className="chatOnlineBadge"></div>
          </div>
          <span className="chatOnlineName">{o?.username}</span>
        </div>
      ))}
    </div>
  );
}
