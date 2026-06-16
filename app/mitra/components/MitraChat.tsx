"use client";

import { useState } from "react";
import {
  MessageCircle,
  Send,
  X,
  Bot,
  User,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

export default function MitraChat() {
  const [open, setOpen] = useState(false);

  const [input, setInput] = useState("");

  const [loading, setLoading] =
    useState(false);

  const [messages, setMessages] =
    useState<ChatMessage[]>([
      {
        role: "assistant",
        content:
          "Halo Partner 👋 Saya dapat membantu informasi armada, booking, pendapatan, performa bisnis, dan aktivitas penyewaan Anda.",
      },
    ]);

  async function sendMessage(text?: string) {
    const message = text ?? input;

    if (!message.trim()) return;

    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        content: message,
      },
    ]);

    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/mitra-ai", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message,
        }),
      });

      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            data.message ??
            "Maaf, saya tidak dapat memproses permintaan.",
        },
      ]);
    } catch (error) {
      console.error(error);

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Terjadi kesalahan saat menghubungi VoltRide AI.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* FLOATING BUTTON */}

      <Button
        onClick={() =>
          setOpen(true)
        }
        className="
          fixed
          bottom-6
          right-6
          z-50
          h-14
          w-14
          rounded-full
          shadow-xl
        "
      >
        <MessageCircle
          size={22}
        />
      </Button>

      {/* CHAT WINDOW */}

      {open && (
        <div
          className="
            fixed
            bottom-24
            right-6
            w-100
            h-120
            bg-white
            rounded-3xl
            shadow-2xl
            border
            z-50
            flex
            flex-col
            overflow-hidden
          "
        >
          {/* HEADER */}

          <div className="p-4 border-b flex justify-between items-center bg-white">
            <div>
              <h3 className="font-bold text-lg">
                VoltRide AI
              </h3>

              <p className="text-xs text-green-500">
                Online
              </p>
            </div>

            <Button
              variant="ghost"
              size="icon"
              onClick={() =>
                setOpen(false)
              }
            >
              <X size={18} />
            </Button>
          </div>

          {/* QUICK ACTION */}

          <div className="p-3 border-b flex flex-wrap gap-2">
            <Button
              size="sm"
              variant="outline"
              onClick={() =>
                sendMessage(
                  "berapa total armada saya"
                )
              }
            >
              Armada
            </Button>

            <Button
              size="sm"
              variant="outline"
              onClick={() =>
                sendMessage(
                  "berapa booking aktif saya"
                )
              }
            >
              Booking
            </Button>

            <Button
              size="sm"
              variant="outline"
              onClick={() =>
                sendMessage(
                  "revenue dari booking milik mitra"
                )
              }
            >
              Revenue
            </Button>

            <Button
              size="sm"
              variant="outline"
              onClick={() =>
                sendMessage(
                  "mobil paling sering disewa"
                )
              }
            >
              Top Car
            </Button>
          </div>

          {/* CHAT BODY */}

          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-zinc-50">
            {messages.map(
              (
                message,
                index
              ) => (
                <div
                  key={index}
                  className={`flex ${
                    message.role ===
                    "user"
                      ? "justify-end"
                      : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm whitespace-pre-wrap shadow-sm ${
                      message.role ===
                      "user"
                        ? "bg-primary text-white"
                        : "bg-white border text-zinc-800"
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      {message.role ===
                      "assistant" ? (
                        <Bot
                          size={14}
                        />
                      ) : (
                        <User
                          size={14}
                        />
                      )}

                      <span className="text-xs font-semibold">
                        {message.role ===
                        "assistant"
                          ? "VoltRide AI"
                          : "You"}
                      </span>
                    </div>

                    {
                      message.content
                    }
                  </div>
                </div>
              )
            )}

            {loading && (
              <div className="flex justify-start">
                <div className="bg-white border rounded-2xl px-4 py-3 text-sm shadow-sm">
                  🤖 Sedang berpikir...
                </div>
              </div>
            )}
          </div>

          {/* INPUT */}

          <form
            onSubmit={(e) => {
              e.preventDefault();
              sendMessage();
            }}
            className="border-t p-3 bg-white"
          >
            <div className="flex gap-2">
              <Input
                value={input}
                onChange={(e) =>
                  setInput(
                    e.target.value
                  )
                }
                placeholder="Tanyakan sesuatu..."
              />

              <Button
                type="submit"
                disabled={
                  loading
                }
              >
                <Send
                  size={16}
                />
              </Button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}