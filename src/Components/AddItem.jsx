import React from "react";
import { IoAddSharp } from "react-icons/io5";

const AddItem = ({ addItems, text, setText }) => {
  return (
    <div className="flex w-full">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && addItems()}
        placeholder="What do you want to do today?"
        className="flex-1 h-14 px-5 rounded-l-2xl border-2 border-purple-800 text-purple-900 font-bold text-lg focus:outline-none"
      />
      <button
        onClick={addItems}
        className="h-14 px-4 rounded-r-2xl bg-green-500 text-white font-bold hover:bg-green-600 transition"
      >
        <IoAddSharp size={22} />
      </button>
    </div>
  );
};

export default AddItem;
