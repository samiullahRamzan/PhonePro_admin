import { useEffect, useRef } from "react";
import "../styles/chat.css";
import { getAllChats, sendMessage } from "../axios/Chat_axios";
import { useState } from "react";
import { getFormattedDate } from "../components/formatDate";
import { IoSend } from "react-icons/io5";
import { FaPaperclip } from "react-icons/fa";
import socket from "../util/socketServices";

const Chat = () => {
  const [chats, setChats] = useState([]);
  const [chat, setChat] = useState(null);
  const [message, setMessage] = useState();
  const loginAdmin_id = localStorage.getItem("admin_id");
  console.log("here is login admin id", loginAdmin_id);

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom(); // Scroll to bottom whenever messages update
  }, [chat?.messages]);

  useEffect(() => {
    scrollToBottom();
  }, []);

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
  }, [message]);

  useEffect(() => {
    socket.on("chat message", (msg) => {
      console.log("Raw message received:", msg);

      // Enrich the received message with local metadata
      const enrichedMessage = {
        ...msg, // Contains `from` and `text`
        receiver: chat.receiver, // Enrich with receiver details
        sender: chat.sender, // Enrich with sender details
        sentAt: new Date(), // Add timestamp if not provided
      };

      // Update the chat object for consistency (optional)
      setChat((prevChat) => ({
        ...prevChat,
        messages: [...prevChat.messages, enrichedMessage],
      }));
    });

    return () => {
      socket.off("chat message"); // Clean up listener on unmount
    };
  }, [chat]);

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

  const send_Message = async (receiverId, message) => {
    if (!message.trim()) return; // Prevent sending empty messages

    try {
      // Step 1: Send message to the backend via API
      const newMessage = {
        from: loginAdmin_id,
        to: receiverId,
        message: message,
        sentAt: new Date(),
      };

      // Step 2: Broadcast the message in real-time via Socket.IO
      socket.emit("chat message", newMessage);
      setMessage(""); // Clear the input field

      const response = await sendMessage(receiverId, message); // Make API request
      console.log(response); // Logs backend confirmation
    } catch (error) {
      alert("Failed to send message: " + error.message);
    }
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

            <div className="name-message">
              <div className="Name">
                <div>{findName(chat) || "dummy Name"}</div>
                <div className="date">{getFormattedDate(chat.updatedAt)}</div>
              </div>
              <div className="last-message">
                {chat.messages[chat.messages.length - 1].message}
              </div>
            </div>
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
            {chat.messages.map((messages, index) => (
              <div
                className={`message ${
                  messages.fromType == "User" || messages.fromType == "Shops"
                    ? "User"
                    : "admin"
                }`}
                key={index}
              >
                {messages.message}
              </div>
            ))}
            <div ref={messagesEndRef} />
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
              <IoSend
                onClick={() =>
                  send_Message(
                    chat.receiver._id == loginAdmin_id
                      ? chat.sender._id
                      : chat.receiver._id,
                    message
                  )
                }
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chat;
