import React, { useEffect, useState } from "react";
import AddItem from "./Components/addItem";
import ItemList from "./Components/itemList";

const App = () => {
  const [text, settext] = useState("");
  const [items, setitems] = useState(()=>{
    const saved = localStorage.getItem("todoItems")
    return saved ? JSON.parse(saved):[]
  });
  useEffect(()=>{
  localStorage.setItem("todoItems",JSON.stringify(items))
  },[items])
  const addItems = () => {
    if (!text.trim()) return;
    setitems([
      ...items,
      {
        text: text,
      },
    ]);
    settext("");
  };
  const deleteItem = (idx) =>{
    setitems(items.filter((items,i)=>i!==idx))
  }
  const editItem = (idx,newItem)=>{
     const updated = [...items]
     updated[idx].text =newItem
     setitems(updated)
      }
  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-gradient-to-br from-blue-800 via-white to-purple-800">
      <div
        className="w-full max-w-xl rounded-2xl p-6
                   bg-purple-50
                   border-2 border-blue-900
                   ring-2 ring-blue-500/40
                   shadow-2xl"
      >
        <AddItem addItems={addItems} text={text} settext={settext} />
        <ItemList items={items} deleteItem={deleteItem} editItem={editItem} text={text}/>
      </div>
    </div>
  );
};

export default App;
