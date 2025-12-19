import React, { useRef, useState, useEffect } from "react";
import DeleteItem from "./deleteItem";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineSaveAlt } from "react-icons/md";

const ItemList = ({ items, deleteItem, editItem ,toggleCompleted}) => {
  const [editIdx, setEditIdx] = useState(null);
  const [editText, setEditText] = useState('');
  const inputRef = useRef(null);


  useEffect(() => {
    if (editIdx !== null && inputRef.current) {
      inputRef.current.focus();
    }
  }, [editIdx]);

  const handleEdit = (idx, text) => {
    setEditIdx(idx);
    setEditText(text); 
  };

  const handleSave = (idx) => {
    if (!editText.trim()) return; 
    editItem(idx, editText);
    setEditIdx(null);
    setEditText('');
  };

  return (
    <div className="flex flex-col gap-2 mt-4">
      {items.map((item, idx) => (
        <div
          key={idx}
          className="w-full max-w-xl rounded-xl px-4 py-3 
                     bg-purple-50 hover:bg-purple-100
                     border-2 border-blue-900
                     ring-2 ring-blue-400/40
                     shadow-2xl text-purple-900 font-bold flex items-center justify-between"
        >
          <div className="flex items-center gap-3 flex-1">
           <input type="checkbox" checked={item.completed} onChange={()=>toggleCompleted(idx)} className="w-5 h-5 accent-green-600"/> 
          {editIdx === idx ? (
            <input
              ref={inputRef} 
              value={editText} 
              onChange={(e) => setEditText(e.target.value)}
              className="flex-1 px-2 py-1 border border-blue-800 ring-1 ring-blue-800 rounded m-1"
              onKeyDown={(e) => e.key === "Enter" && handleSave(idx)}
            />
          ) : (
            <span className={`flex-1 ml-3 ${item.completed?"line-through text-gray-400" : ""}`}>{item.text}</span>
          )}
</div>
          <div className="flex gap-2">
            {editIdx === idx ? (
              <button
                onClick={() => handleSave(idx)}
                className="p-2 rounded-full bg-yellow-500 text-white hover:bg-yellow-600 transition"
              >
               <MdOutlineSaveAlt />
              </button>
            ) : (
              <button
                onClick={() => handleEdit(idx, item.text)} 
                className="p-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition"
              >
                <FaRegEdit size={18} />
              </button>
            )}

            <DeleteItem deleteItem={() => deleteItem(idx)} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;