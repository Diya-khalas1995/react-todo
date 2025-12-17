import React, { useState } from 'react'
import TodoList from './Components/TodoList'
import Todo from './Todo'

const App = () => {
  const [text, settext] = useState('')
  const [items, setitems] = useState([])

  const AddItems = () => {
    if (!text.trim()) return
    setitems([
      ...items,
      { text: text, completed: false }
    ])
    settext('')
  }

  const deleteItem = (idx) => {
    setitems(items.filter((_, i) => i !== idx))
  }

  const updateItem = (idx, newText) => {
    const updated = [...items]
    updated[idx].text = newText
    setitems(updated)
  }

  const toggleComplete = (idx) => {
    const updated = [...items]
    updated[idx].completed = !updated[idx].completed
    setitems(updated)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-700 to-blue-900 flex items-center justify-center p-6">
      <div className="w-full max-w-xl bg-gray-900/70 backdrop-blur-md rounded-3xl shadow-2xl p-6">
        <h1 className="text-center text-3xl font-extrabold text-white mb-6">
          ✨Manage Your Todos✨
        </h1>

        <Todo AddItems={AddItems} text={text} settext={settext} />

        <TodoList
          items={items}
          deleteItem={deleteItem}
          updateItem={updateItem}
          toggleComplete={toggleComplete}
        />
      </div>
    </div>
  )
}

export default App
