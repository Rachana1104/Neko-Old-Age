import React, { useState } from "react";
import { ChatEngine, getOrCreateChat } from "react-chat-engine";
import '../../Interfaces/Chat.css';

export default function DirectChat() {
  const [username, setUsername] = useState("");

  function implementingDirectChat(creds) {
    getOrCreateChat(
      creds,

      { is_direct_chat: true, usernames: [username] },
      () => setUsername("")
    );
  }

  const displayChatInterface = (creds) => {
    return (
      <div>
        <input
          type="text"
          placeholder="Find username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <button onClick={() => implementingDirectChat(creds)}>
          Create Chat
        </button>
      </div>
    );
  };

  return (
    <>
      <ChatEngine
        height="80vh"
        width="100vw"
        // Accessing the stored environment variables
        //projectID={process.env.CHAT_APP_PROJECT_ID}
        userName="Admin"
        //userSecret={process.env.CHAT_APP_USER_SECRET}
        userSecret="black"
        projectID="cb2183c3-8b10-4f55-b50d-e96466996897"
        displayNewChatInterface={(creds) => displayChatInterface(creds)}
      />
    </>
  );
}
