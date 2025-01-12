import { useEffect } from "react";
import "../styles/chat.css";
import { getAllChats } from "../axios/Chat_axios";
import { useState } from "react";
import { getFormattedDate } from "../components/formatDate";
import { IoSend } from "react-icons/io5";
import { FaPaperclip } from "react-icons/fa";

const Chat = () => {
  const [chats, setChats] = useState([]);
  const [chat, setChat] = useState(null);
  const [message, setMessage] = useState();
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

  const findProfileImg = (chat) => {
    return chat.receiver._id == loginAdmin_id
      ? chat?.sender?.image
      : chat?.receiver?.image;
  };

  const findName = (chat) => {
    return chat.receiver._id == loginAdmin_id
      ? chat?.sender.fullName || chat?.sender?.shopName
      : chat?.receiver.fullName || chat?.sender.shopName;
  };

  const handleChat = async (chat1) => {
    console.log("here is chat in handle chat..", chat1);
    setChat(chat1);
  };

  return (
    <div className="main">
      <div className="sidebar-chat">
        <h3>Chats</h3>

        {chats.map((chat, index) => (
          <div
            className="container"
            key={index}
            onClick={() => handleChat(chat)}
          >
            <img src={findProfileImg(chat) || "/profile.jpg"} />
            <div className="Name">
              <div>{findName(chat) || "dummy Name"}</div>
              <div className="last-message">
                {chat.messages[chat.messages.length - 1].message}
              </div>
            </div>
            <div>{getFormattedDate(chat.updatedAt)}</div>
          </div>
        ))}
      </div>

      {/* here is a chatview */}
      {chat && (
        <div className="chat-view">
          <div className="heading">
            {console.log("chat in chatView", chat)}
            <img src={findProfileImg(chat) || "/profile.jpg"} />
            <div className="myname">{findName(chat) || "dummy Name"}</div>
          </div>
          <div className="middle">
            <div className="scroll">
              {chat.messages.map((messages, index) => (
                <div
                  className={`message ${
                    messages.fromType == "User" ? "User" : "admin"
                  }`}
                  key={index}
                >
                  {console.log(
                    "here is message fromType in every message",
                    messages.fromType
                  )}
                  {messages.message}
                </div>
              ))}
            </div>
          </div>
          <div className="bottom">
            <input
              type="text"
              id="message"
              placeholder="Type a message"
              className="message-input"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
            <div>
              <FaPaperclip />
              <IoSend />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chat;
