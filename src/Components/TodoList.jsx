import React, { useState, useRef, useEffect } from 'react'

const TodoList = ({ items, deleteItem, updateItem, toggleComplete }) => {
  const [editIdx, setEditIdx] = useState(null)
  const [editText, setEditText] = useState('')
  const inputRef = useRef(null)

  // 🔥 Edit click par input auto-focus
  useEffect(() => {
    if (editIdx !== null && inputRef.current) {
      inputRef.current.focus()
    }
  }, [editIdx])

  const handleEdit = (idx, text) => {
    setEditIdx(idx)
    setEditText(text)
  }

  const handleSave = (idx) => {
    if (!editText.trim()) return
    updateItem(idx, editText)
    setEditIdx(null)
    setEditText('')
  }

  return (
    <div className="space-y-3 mt-4">
      {items.map((item, idx) => (
        <div
          key={idx}
          className={`flex items-center gap-3 px-4 py-3 rounded-xl shadow
            ${item.completed ? 'bg-green-200 line-through' : 'bg-pink-200'}
          `}
        >
          {/* ✅ COMPLETE CHECKBOX */}
          <input
            type="checkbox"
            checked={item.completed}
            onChange={() => toggleComplete(idx)}
          />

          {/* ✏️ INLINE EDIT */}
          {editIdx === idx ? (
            <input
              ref={inputRef}
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              className="flex-1 px-2 py-1 rounded"
            />
          ) : (
            <span className="flex-1">{item.text}</span>
          )}

          {/* BUTTONS */}
          <div className="flex gap-2">
            {editIdx === idx ? (
              <button
                onClick={() => handleSave(idx)}
                className="px-2 py-1 bg-green-500 text-white rounded"
              >
                Save
              </button>
            ) : (
              <button
                onClick={() => handleEdit(idx, item.text)}
                className="px-2 py-1 bg-yellow-400 text-white rounded"
              >
                ✏️
              </button>
            )}

            <button
              onClick={() => deleteItem(idx)}
              className="px-2 py-1 bg-red-500 text-white rounded"
            >
              ❌
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default TodoList
