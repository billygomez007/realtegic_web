"use client";

import { useState } from "react";
import { Bot, X, Send, ArrowRight } from "lucide-react";

export default function KubaWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      from: "kuba",
      text: "Hello. I’m Kuba, the AI representative for Realtegic. How can I help you today?",
    },
  ]);

  const send = (text = input) => {
    const value = text.trim();
    if (!value) return;

    setMessages((m) => [
      ...m,
      { from: "user", text: value },
      {
        from: "kuba",
        text: "I can help you explore Realtegic, our products, our technology, and how you can work with us.",
      },
    ]);

    setInput("");
  };

  if (!open) {
    return (
      <button className="kuba-float" onClick={() => setOpen(true)}>
        <span className="kuba-float-icon">
          <Bot size={24} />
        </span>
        <span>
          <strong>Kuba AI</strong>
          <small>Ask Realtegic</small>
        </span>
      </button>
    );
  }

  return (
    <div className="kuba-chat">
      <div className="kuba-chat-header">
        <div className="kuba-brand">
          <div className="kuba-avatar">
            <Bot size={22} />
          </div>
          <div>
            <strong>Kuba AI</strong>
            <small>
              <i /> Realtegic AI
            </small>
          </div>
        </div>

        <button onClick={() => setOpen(false)}>
          <X size={20} />
        </button>
      </div>

      <div className="kuba-welcome">
        <span>REALTEGIC AI WORKFORCE</span>
        <h3>How can I help?</h3>
        <p>
          Ask me anything about Realtegic, our products or working with us.
        </p>
      </div>

      <div className="kuba-suggestions">
        <button onClick={() => send("What is Realtegic?")}>
          What is Realtegic? <ArrowRight size={14} />
        </button>

        <button onClick={() => send("What products do you offer?")}>
          What products do you offer? <ArrowRight size={14} />
        </button>

        <button onClick={() => send("Tell me about Kuba AI")}>
          Tell me about Kuba AI <ArrowRight size={14} />
        </button>
      </div>

      <div className="kuba-messages">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`kuba-msg ${
              message.from === "user" ? "kuba-user" : ""
            }`}
          >
            {message.text}
          </div>
        ))}
      </div>

      <div className="kuba-input">
        <input
          value={input}
          placeholder="Ask Kuba..."
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") send();
          }}
        />

        <button onClick={() => send()}>
          <Send size={17} />
        </button>
      </div>

      <div className="kuba-powered">
        Powered by <strong>Kuba AI</strong> · Realtegic
      </div>
    </div>
  );
}
