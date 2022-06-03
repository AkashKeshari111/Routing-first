import React, { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'


const Products = () => {
const [info,setInfo]=useState([])

useEffect(()=>{
    fetch(` http://localhost:8080/products`)
    .then(res=>res.json())
    .then((data)=>{
        setInfo(data)
        console.log(data)
    })
},[])

  return (
    <div>
         {info.map((el)=>(
        <Link to={`/Products/${el.id}`}>{el.name}</Link>
         ))}
    </div>
  )
}

export default Products