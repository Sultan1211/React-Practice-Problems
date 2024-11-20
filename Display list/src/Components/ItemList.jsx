import React from 'react'

function ItemList() {
    const items = ["Milk", "Eggs", "Bread", "Apples", "Chicken", "Rice", "Carrots"];
  return (
    <div>
        <ol>
           { items.map((item,index)=>{
                return <li key={index}>{item}</li>

            })}
        </ol>
    </div>
  )
}

export default ItemList