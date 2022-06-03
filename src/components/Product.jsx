import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

const Product = () => {

const {id}=useParams()
const [value,setValue]=useState([])

useEffect(()=>{
fetch(`http://localhost:8080/products/${id}`)
.then(res=>res.json())
.then((data)=>{
    setValue(data)
})
},[id])
  return (
    <div>Product {id}  :   {value.name}</div>
  )
}

export default Product