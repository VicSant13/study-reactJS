import { useState } from "react";

type Props = {
    data: string[]; //array de strings
    onSelect?:(elemento:string)=>void;
}

function List({data,onSelect}: Props) {
   const [index,setIndex]= useState(0) // este es un hook
  const handleClick = (i:number,elemento:string) => {
    setIndex(i);
    onSelect?.(elemento);
  }
  
  return (
    <ul className="list-group">
        {data.map((elemento,i)=>(
            <li 
                className={`list-group-item ${i == index ? 'active' : ''}`}
                key={elemento}
                onClick={()=> handleClick(i,elemento)}
            >{elemento}
            </li>
        ))}
    </ul>
  )
}

export default List

