import data from './data';
import 

function App() {
  return (
    <div>

      <header className='header'>
      <a href="/"> amazonia </a>

      </header>

      <main>
        <h1>Featured Products</h1>

        <div className="products">
          
          {data.products.map((product) => (
            <div className="product" key={product.slug}>
              <a href={`/product/${product.slug}`}>

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
      </main>
    </div>
    
  );
}

export default App;
