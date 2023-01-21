import React from 'react'
import { useParams } from 'react-router-dom'

const ProductScreen = () => {
    const params = useParams()
    const {slug} = params
    console.log(slug)


  return (
    <div>
       h

        
        {slug}
        
        </div>
  )
}

export default ProductScreen