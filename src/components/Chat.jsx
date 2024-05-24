// Chat.jsx
import React, { useState, useRef, useEffect } from 'react';

export default function CharacterProfile() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSendMessage = () => {
    if (message.trim() !== '') {
      setMessages([...messages, message, "HI"]); // Add "HI" as a response
      setMessage('');
    }
  };

  return (
    <div>
      <div className="md:col-span-2">
        <div className="bg-white shadow rounded-lg p-4 mb-4" >
          <div className="text-lg font-semibold mb-4">Chat with MediCom</div>
          <div className="bg-gray-200 h-96 rounded mb-4 " style={{ maxHeight: "400px", overflowY: "auto" }}>
            {messages.map((msg, index) => (
              <div key={index} className={index % 2 === 0 ? "text-right" : "text-left"}>
                <div className={index % 2 === 0 ? "bg-blue-200 rounded-lg p-2 mb-2 inline-block" : "bg-green-200 rounded-lg p-2 mb-2 inline-block"}>{msg}</div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          
          <div className="flex">
            <input
              type="text"
              placeholder="Ask about the patient..."
              value={message}
              onChange={handleMessageChange}
              className="border border-gray-300 rounded-l-lg p-2 flex-grow"
            />
            <button onClick={handleSendMessage} className="bg-blue-500 text-white rounded-lg mr-3 ml-3 px-4">SEND</button>
          </div>

        </div>
      </div>
    </div>
  );
}

