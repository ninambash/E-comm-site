import data from './data';
import { BrowserRouter, Route, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div>

      <header className='header'>
      <a href="/"> amazonia </a>

      </header>

      <main>
        <Routes>
          
          <Route path="/product/:id" element={<ProductScreen/>}></Route>
          <Route path="/" element={<HomeScreen/>}></Route>


        </Routes>
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
    </BrowserRouter>
    
  );
}

export default App;
