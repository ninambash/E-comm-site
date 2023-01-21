import data from './data';
function App() {
  return (
      <header className="App-header">
        <a href="/"> amazonia </a>
        <main>
        
          <div className="products">
          {data.products.map((product) => (
            
            
          ))}
          </div>

        </main>
      </header>
  
  );
}

export default App;
