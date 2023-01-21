import data from './data';
function App() {
  return (
      <header className="App-header">
        <a href="/"> amazonia </a>
        <main>
        
          <div className="products">
          {data.products.map((product) => (
            <div className="product" key={product.slug}>
              <a href={`/product/${product._id}`}>
                <img className="product-image" src={product.image} alt="product" />
              </a>
              <div className="product-name">
                <a href={`/product/${product._id}`}>{product.name}</a>
              </div>
              <div className="product-brand">{product.brand}</div>
              <div className="product-price">${product.price}</div>
              <div className="product-rating">
                {product.rating} Stars ({product.numReviews} Reviews)
              </div>
            </div>

            
          ))}
          </div>

        </main>
      </header>
  
  );
}

export default App;
