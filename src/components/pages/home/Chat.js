import React from "react";
import Styles from "./chat.module.css"

const Chat = () => {
  return (
    <div className={Styles.container_chat} id="chat">
      <h2>Chat</h2>
      <iframe
        title="iframe chat"
        className={Styles.chat_iframe}
        src="https://www3.cbox.ws/box/?boxid=3505794&boxtag=SJtgS1"
        allowtransparency="yes"
        allow="autoplay"
        scrolling="auto"
      ></iframe>
    </div>
  );
};

export default Chat;
