"use client";
import { useState, useRef, useEffect, ChangeEvent, KeyboardEvent } from "react";

import axios from "axios";

const ChatInput = () => {
  const [text, setText] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const focusOnInput = () => inputRef.current?.focus();

  useEffect(() => {
    focusOnInput();
  }, []);

  const getChatResponse = async (e: KeyboardEvent<HTMLInputElement>) => {
    if (!text.trim().length || e.key !== "Enter") return;

    setIsLoading(true);

    try {
      const data = await axios.post("/api/chat", {
        data: [
          {
            role: "user",
            content: "Hi",
          },
        ],
      });
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
      focusOnInput();
    }
  };

  return (
    <input
      type="text"
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      onChange={(e: ChangeEvent<HTMLInputElement>) => setText(e.target.value)}
      onKeyDown={getChatResponse}
      disabled={isLoading}
      ref={inputRef}
    />
  );
};

export default ChatInput;
