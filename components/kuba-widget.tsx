"use client";

import { FormEvent, useEffect, useId, useRef, useState } from "react";
import { ArrowRight, Bot, Loader2, Send, X } from "lucide-react";

interface ChatMessage {
  id: string;
  from: "kuba" | "user";
  text: string;
}

const initialMessage: ChatMessage = {
  id: "welcome",
  from: "kuba",
  text: "Hello. I’m Kuba, the AI representative for Realtegic. How can I help you today?",
};

const suggestions = [
  "What is Realtegic?",
  "What products do you offer?",
  "Tell me about SuperKuba",
];

export default function KubaWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([initialMessage]);
  const [conversationId, setConversationId] = useState<string>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const panelId = useId();
  const statusId = useId();
  const launcherRef = useRef<HTMLButtonElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const messageEndRef = useRef<HTMLDivElement>(null);
  const restoreLauncherFocusRef = useRef(false);

  useEffect(() => {
    window.dispatchEvent(
      new CustomEvent("kuba-chat-visibility", { detail: open })
    );

    if (open) {
      inputRef.current?.focus();
    } else if (restoreLauncherFocusRef.current) {
      restoreLauncherFocusRef.current = false;
      launcherRef.current?.focus();
    }

    return () => {
      if (open) {
        window.dispatchEvent(
          new CustomEvent("kuba-chat-visibility", { detail: false })
        );
      }
    };
  }, [open]);

  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ block: "nearest" });
  }, [messages, loading]);

  async function send(text = input) {
    const value = text.trim();
    if (!value || loading) {
      return;
    }

    const userMessage: ChatMessage = {
      id: crypto.randomUUID(),
      from: "user",
      text: value,
    };
    setMessages((current) => [...current, userMessage]);
    setInput("");
    setError("");
    setLoading(true);

    try {
      const response = await fetch("/api/superkuba/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: value, conversationId }),
      });
      const result = (await response.json()) as {
        ok?: boolean;
        response?: string;
        conversationId?: string;
        error?: string;
      };

      if (!response.ok || !result.ok || !result.response) {
        throw new Error(
          result.error || "Kuba is unavailable right now. Please try again shortly."
        );
      }

      setConversationId(result.conversationId);
      setMessages((current) => [
        ...current,
        {
          id: crypto.randomUUID(),
          from: "kuba",
          text: result.response!,
        },
      ]);
    } catch (requestError) {
      setError(
        requestError instanceof Error
          ? requestError.message
          : "Kuba is unavailable right now. Please try again shortly."
      );
    } finally {
      setLoading(false);
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    void send();
  }

  function closeChat() {
    restoreLauncherFocusRef.current = true;
    setOpen(false);
  }

  if (!open) {
    return (
      <button
        ref={launcherRef}
        type="button"
        className="kuba-float"
        onClick={() => setOpen(true)}
        aria-label="Open Kuba AI chat"
        aria-expanded="false"
        aria-controls={panelId}
      >
        <span className="kuba-float-icon" aria-hidden="true">
          <Bot size={23} />
        </span>
        <span className="kuba-float-copy">
          <strong>Kuba AI</strong>
          <small>Ask Realtegic</small>
        </span>
      </button>
    );
  }

  return (
    <section
      className="kuba-chat"
      id={panelId}
      aria-label="Kuba AI chat"
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          closeChat();
        }
      }}
    >
      <div className="kuba-chat-header">
        <div className="kuba-brand">
          <div className="kuba-avatar" aria-hidden="true">
            <Bot size={21} />
          </div>
          <div>
            <strong>Kuba AI</strong>
            <small>
              <i aria-hidden="true" /> Realtegic AI
            </small>
          </div>
        </div>

        <button
          type="button"
          className="kuba-close"
          onClick={closeChat}
          aria-label="Close Kuba AI chat"
        >
          <X size={20} aria-hidden="true" />
        </button>
      </div>

      <div className="kuba-welcome">
        <span>REALTEGIC AI WORKFORCE</span>
        <h2>How can I help?</h2>
        <p>Ask me anything about Realtegic, our products or working with us.</p>
      </div>

      <div className="kuba-suggestions" aria-label="Suggested questions">
        {suggestions.map((suggestion) => (
          <button
            type="button"
            key={suggestion}
            onClick={() => void send(suggestion)}
            disabled={loading}
          >
            {suggestion} <ArrowRight size={14} aria-hidden="true" />
          </button>
        ))}
      </div>

      <div className="kuba-messages" role="log" aria-live="polite" aria-relevant="additions">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`kuba-msg ${message.from === "user" ? "kuba-user" : ""}`}
          >
            <span className="kuba-visually-hidden">
              {message.from === "user" ? "You" : "Kuba"}:{" "}
            </span>
            {message.text}
          </div>
        ))}
        {loading ? (
          <div className="kuba-msg kuba-thinking">
            <Loader2 size={15} aria-hidden="true" />
            Kuba is thinking…
          </div>
        ) : null}
        <div ref={messageEndRef} />
      </div>

      <form className="kuba-input" onSubmit={handleSubmit}>
        <label className="kuba-visually-hidden" htmlFor={`${panelId}-input`}>
          Message Kuba AI
        </label>
        <input
          ref={inputRef}
          id={`${panelId}-input`}
          value={input}
          placeholder="Ask Kuba..."
          maxLength={1000}
          onChange={(event) => setInput(event.target.value)}
          aria-describedby={error ? statusId : undefined}
          disabled={loading}
        />
        <button
          type="submit"
          disabled={loading || !input.trim()}
          aria-label="Send message"
        >
          <Send size={17} aria-hidden="true" />
        </button>
      </form>

      <div
        className={`kuba-status ${error ? "kuba-status--error" : ""}`}
        id={statusId}
        role="status"
        aria-live="polite"
      >
        {error || "Powered by SuperKuba · Realtegic"}
      </div>
    </section>
  );
}
