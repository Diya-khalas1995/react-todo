import React from 'react'

const Todo = ({AddItems,text,settext}) => {
   return (
    <div className='flex gap-2 mb-5'>
      <input value={text}
       onChange={(e)=>settext(e.target.value)}
       onKeyDown={(e)=>e.key==="Enter" && AddItems()}
       placeholder='what do yo want to do today?'
        className="flex-1 px-4 py-3 rounded-xl bg-gray-800 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-pink-400 transition shadow-inner"/>
      <button onClick={AddItems} className='px-6 py-3 bg-pink-500 hover:bg-pink-600 text-white rounded-xl font-semibold shadow-md cursor-pointer'>  ➕Add</button>
    </div>
  )
}

export default Todo
