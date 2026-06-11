"use client";

import { useState } from "react";

type Message = {
  role: "user" | "assistant";
  content: string;
};

export default function AiAssistant() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hi, I am your AI Crime Assistant. Describe any crime incident and I will suggest category, risk level, and action.",
    },
  ]);
  const [loading, setLoading] = useState(false);

  async function analyzeCrime() {
    if (!input.trim()) return;

    const userMessage: Message = {
      role: "user",
      content: input,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/ai", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          description: input,
        }),
      });

      const data = await res.json();

      const assistantMessage: Message = {
        role: "assistant",
        content: data.success
          ? data.response
          : "Sorry, I could not analyze this incident.",
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Something went wrong. Please try again.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="h-[calc(100vh-120px)] flex flex-col bg-[#0B1120] text-white">
      <div className="flex-1 overflow-y-auto px-4 md:px-20 py-6 space-y-6">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${
              message.role === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-3xl rounded-2xl px-5 py-4 whitespace-pre-line leading-relaxed ${
                message.role === "user"
                  ? "bg-blue-600 text-white"
                  : "bg-[#111827] border border-gray-800 text-gray-200"
              }`}
            >
              {message.content}
            </div>
          </div>
        ))}

        {loading && (
          <div className="flex justify-start">
            <div className="bg-[#111827] border border-gray-800 rounded-2xl px-5 py-4 text-gray-400">
              Analyzing...
            </div>
          </div>
        )}
      </div>

      <div className="border-t border-gray-800 bg-[#0B1120] px-4 md:px-20 py-4">
        <div className="max-w-5xl mx-auto flex gap-3">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            rows={1}
            placeholder="Describe a crime incident..."
            className="flex-1 resize-none p-4 rounded-2xl bg-[#111827] border border-gray-700 text-white outline-none focus:border-blue-500"
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                analyzeCrime();
              }
            }}
          />

          <button
            onClick={analyzeCrime}
            disabled={loading}
            className="bg-blue-600 hover:bg-blue-700 px-6 rounded-2xl font-semibold disabled:opacity-60"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}