import React from 'react'
import { MdOutlineDelete} from "react-icons/md";
const DeleteItem = ({deleteItem}) => {
  return (
    <div>
      <button
      onClick={deleteItem}
                    className="p-2 rounded-full 
                     bg-red-500 text-white 
                     hover:bg-red-600 
                     transition"
                  >
                    <MdOutlineDelete size={18} />
                  </button>
    </div>
  )
}

export default DeleteItem
