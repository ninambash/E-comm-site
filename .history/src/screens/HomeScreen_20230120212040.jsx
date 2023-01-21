import data from "../data"
import { Link } from "react-router-dom"

function HomeScreen ( ) {
    return (
        <div>
        
             <h1>Featured Products</h1>

                    <div className="products">
                    
                    {data.products.map((product) => (

                        <div className="product" key={product.slug}>
                            <ink to={`/product/${product.slug}`} 

                        <link

                        <img src={product.image} alt={product.name} />
                        </a>
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