import { Bot } from "lucide-react";

function ChatBox({ children }) {
  return (
    <div className="chatbox">
      <div className="chatbox-avatar">
        <Bot size={20} color="var(--white)" />
      </div>
      <div className="chatbox-bubble">{children}</div>
    </div>
  );
}

export default ChatBox;
