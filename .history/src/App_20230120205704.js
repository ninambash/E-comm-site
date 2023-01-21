
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
          <Route path="/" element={<HomeScreen />}></Route>

          

         


        </Routes>
      </main>
      </div>
       
    </BrowserRouter>

    
  );
}

export default App;
