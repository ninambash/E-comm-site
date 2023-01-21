//import data from "../data"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"


function HomeScreen ( ) {
    const [products, setProducts] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios.get("/api/products")
            setProducts(data)
        }
        fetchData()
    }, [])


        
    return (
        <div>
        
             <h1>Featured Products</h1>

                    <div className="products">
                    
                    {products.map((product) => (

                        <div className="product" key={product.slug}>

                            <Link to={`/product/${product.slug}`} >

                        <img src={product.image} alt={product.name} />
                        </Link>

                        <Link to={`/product/${product.slug}`}></Link>
                      

                       
                        <div className='product-info'>
                            <button>Add to cart</button>
                            
                        <p>{product.name} </p>

                        <p> <strong>${product.price}</strong></p>

                        </div>
                        
                        </div>
                    ))}


                    </div>
        </div>
    )
}

        
        
 


export default HomeScreen