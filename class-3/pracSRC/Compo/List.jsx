import React from 'react'

function List() {

  let listItems;

  const listProperty =[
    {title :"Apple",isFruits : true , key : 1},
    {title :"Mango",isFruits : true , key : 2},
    {title :"Brinjal",isFruits : false , key : 3},
  ]

  listItems = listProperty.map((items)=>
      <li key={items.key} 
        style={{color : items.isFruits? "red" : "cyan"}}>{items.title}</li>
  )
console.log(listItems);
  return (
   <ul>
    {listItems}
   </ul> 
  )
}

export default List
