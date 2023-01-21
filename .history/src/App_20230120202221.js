import data from './data';
function App() {
  return (
    <div>

      <header className='header'>
      <a href="/"> amazonia </a>

      </header>

      <main>
        

        <div className="products">
          
          {data.products.map((product) => (
            <div className="product" key={product.slug}>
              <img src={product.image} alt={product.name} />
              <p>{product.name}</p>
              <p>{product.price}</p>
              
            </div>
          ))}
        </div>
      </main>
    </div>
    
  );
}

export default App;
