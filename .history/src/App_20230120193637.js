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
                
              
              

            
          ))}
          </div>

        </main>
      </header>
  
  );
}

export default App;
