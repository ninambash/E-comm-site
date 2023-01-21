
import { BrowserRouter,  Routes, Route, Link } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';

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
          <Route path ="/product/:id" element={<HomeScreen />}></Route>
          <Route path ="/cart/:id?" element={<HomeScreen />}></Route>
          <Route path ="/signin" element={<HomeScreen />}></Route>
          <Route path ="/register" element={<HomeScreen />}></Route>
          <Route path ="/shipping" element={<HomeScreen />}></Route>
          <Route path ="/payment" element={<HomeScreen />}></Route>
          <Route path ="/placeorder" element={<HomeScreen />}></Route>
          <Route path ="/order/:id" element={<HomeScreen />}></Route>
          <Route path ="/profile" element={<HomeScreen />}></Route>
          <Route path ="/orderhistory" element={<HomeScreen />}></Route>
          
          <Route path="/" element={<HomeScreen />}></Route>

          

         


        </Routes>
      </main>
      </div>
       
    </BrowserRouter>

    
  );
}

export default App;
