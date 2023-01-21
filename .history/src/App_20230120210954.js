
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
         
          <Route path ="/product/:sl" element={<HomeScreen />}></Route>
          <Route path ="/cart/:id?" element={<HomeScreen />}></Route>
          <Route path ="/signin" element={<HomeScreen />}></Route>
          <Route path ="/register" element={<HomeScreen />}></Route>
          <Route path ="/shipping" element={<HomeScreen />}></Route>
          <Route path ="/payment" element={<HomeScreen />}></Route>
          <

        </Routes>
      </main>
      </div>
       
    </BrowserRouter>

    
  );
}

export default App;