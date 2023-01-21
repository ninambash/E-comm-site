import data from './data';
function App() {
  return (
      <header className="App-header">
        <a href="/"> amazonia </a>
        <main>
        
          <div className="products">
          {data.products.map((product) => (
            <div className="product" key={product.slug}>

             
                <img src={product.image} alt={product.name} />
                <p>{product.name}</p>
                <p>{product.price}</p>
                <p>{product.description}</p>
                <p>{product.brand}</p>
                <p>{product.rating}</p>
                <p>{product.numReviews}</p>
                <p>{product.countInStock}</p>
                <p>{product.category}</p>
                <p>{product.slug}</p>
                </div>
              
              

            
          ))}
          </div>

        </main>
      </header>
  
  );


export default App;
