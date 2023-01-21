import React from 'react'
import { useParams } from 'react-router-dom'

const ProductScreen = () => {
    const params = useParams()
    const {slug} = params
    console.log(slug)


  return (
    <div>
       <h1>{sl}</h1>

        
        {slug}
        
        </div>
  )
}

export default ProductScreen