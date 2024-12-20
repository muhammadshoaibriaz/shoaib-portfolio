import React from "react";

export default function ChatBubble({ item }) {
  return (
    <div
      className={`px-4 py-2 max-w-max mb-2 flex ${
        item?.id % 2 === 0
          ? "bg-green-500 self-end rounded-tl-3xl rounded-tr-3xl rounded-bl-3xl"
          : "bg-white self-start rounded-tl-3xl rounded-tr-3xl rounded-br-3xl"
      }`}
    >
      <p
        style={{ color: item?.id % 2 === 0 ? "#fff" : "black" }}
        className="font-medium text-sm"
      >
        {item?.text}
      </p>
    </div>
  );
}
