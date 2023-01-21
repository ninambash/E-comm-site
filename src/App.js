import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';


function App() {
  return (
    <BrowserRouter>
      <div className='d-flex flex-column site-container'>
        <header className="header">
          <Navbar bg="dark" variant="dark">
            <Container>
              <LinkContainer to="/">
              <Navbar.Brand>amazonia</Navbar.Brand>
              </LinkContainer>
              </Container>
          </Navbar>
        </header>
        <main>
          <Container className='mt-3'>
          <Routes>
            <Route path="/product/:slug" element={<ProductScreen />}></Route>
            <Route path="/" element={<HomeScreen />}></Route>
          </Routes>
          </Container>
        </main>
        <footer className="footer">
          <Container>
            <div className='text-center'>
            All rights reserved.
            </div>
          </Container>
        </footer>

      </div>
    </BrowserRouter>
  );
}

export default App;
