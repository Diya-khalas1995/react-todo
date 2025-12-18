import React from "react"
import { IoAddSharp } from "react-icons/io5"

const AddItem = ({ addItems, text, settext }) => {
  return (
    <div className="flex w-full">

      <input
        value={text}
        onChange={(e) => settext(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && addItems()}
        placeholder="What do you want to do today?"
        className="
          flex-1 h-14 px-5
          rounded-l-2xl
          border-2 border-r-0 border-purple-800
          text-purple-900 font-bold text-lg
          placeholder-purple-400
          focus:outline-none
          focus:ring-2 focus:ring-blue-300
          focus:z-10
          transition
        "
      />

      <button
        onClick={addItems}
        className="
          h-14 px-3
          flex items-center gap-1
          rounded-r-2xl
          border-2 border-green-600
          ring-1 ring-green-500
          bg-green-400
          text-purple-900 font-bold
          hover:bg-green-500
          transition cursor-pointer
        "
      >
        <IoAddSharp size={24} />
        Add
      </button>

    </div>
  )
}

export default AddItem
