import { useEffect } from "react";
import "../styles/chat.css";
import { getAllChats } from "../axios/Chat_axios";
import { useState } from "react";
import { getFormattedDate } from "../components/formatDate";

const Chat = () => {
  const [chats, setChats] = useState([]);
  const loginAdmin_id = localStorage.getItem("admin_id");
  console.log("here is login admin id", loginAdmin_id);

  useEffect(() => {
    const getChats = async () => {
      try {
        const response = await getAllChats();
        console.log("chat response", response);
        setChats(response);
      } catch (error) {
        alert(error);
      }
    };

    getChats();
  }, []);

  return (
    <div className="main">
      <div className="sidebar-chat">
        <h3>Chats</h3>

        {chats.map((chat, index) => (
          <div className="container" key={index}>
            <img
              src={
                (chat.receiver._id == loginAdmin_id
                  ? chat?.sender?.image
                  : chat?.receiver?.image) || "/profile.jpg"
              }
            />
            <div className="Name">
              <div className="myname">
                {chat.receiver._id == loginAdmin_id
                  ? chat?.sender.fullName
                  : chat?.receiver.fullName}
              </div>
              <div className="last-message">
                {chat.messages[chat.messages.length - 1].message}
              </div>
            </div>
            <div>{getFormattedDate(chat.updatedAt)}</div>
          </div>
        ))}
      </div>
      <div className="chat-view">chat view</div>
    </div>
  );
};

export default Chat;
