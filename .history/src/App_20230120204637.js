import data from './data';
import { BrowserRouter, Route, Link } from 'react-router-dom';
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

          <Route path="/" element={<HomeScreen />}></Route>
          <Route path="/product/:id" element={<ProductScreen />}></Route>


        </Routes>
       
    </BrowserRouter>
    
  );
}

export default App;
