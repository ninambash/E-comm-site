
import { BrowserRouter,  Routes, Route, Link } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';


function App() {
  return (
    <BrowserRouter>
    <div>

      <header className='header'>
      <a href="/"> amazonia </a>

      </header>

      <main>
        <Routes>

         <Route path ="/" element={<HomeScreen />}></Route>
         
          <Route path ="/product/:slug" element={<ProductScreen />}></Route>
          

        </Routes>
      </main>
      </div>
       
    </BrowserRouter>

    
  );
}

export default App;
