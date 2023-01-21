function App() {
  return (
      <header className="App-header">
        <a href="/"> amazonia </a>
        <main>
          <h1> Featuresd  </h1>
          {products.map((product) => (
            <div key={product._id} className="product">
              <a href={`/product/${product._id}`}>
                <img className="product-image" src={product.image} alt="product" />
              </a>
              
        </main>
      </header>
  
  );
}

export default App;
