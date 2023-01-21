
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
          <Route path ="/admin/userlist" element={<HomeScreen />}></Route>
          <Route path ="/admin/productlist" element={<HomeScreen />}></Route>
          <Route path ="/admin/orderlist" element={<HomeScreen />}></Route>
          <Route path ="/admin/user/:id/edit" element={<HomeScreen />}></Route>
          <Route path ="/search/name/:name?" element={<HomeScreen />}></Route>
          <Route path ="/search/category/:category" element={<HomeScreen />}></Route>
          <Route path ="/search/category/:category/name/:name" element={<HomeScreen />}></Route>
          <Route path ="/search/category/:category/name/:name/min/:min/max/:max/rating/:rating/order/:order/pageNumber/:pageNumber" element={<HomeScreen />}></Route>
          <Route path ="/pageNotFound" element={<HomeScreen />}></Route>
          <Route path ="/product/:id/edit" element={<HomeScreen />}></Route>
          <Route path ="/product/:id/review" element={<HomeScreen />}></Route>
          <Route path ="/seller/:id" element={<HomeScreen />}></Route>
          <Route path ="/seller/:id/productlist" element={<HomeScreen />}></Route>
          <Route path ="/seller/:id/orderlist" element={<HomeScreen />}></Route>
          <Route path ="/cart/:id/edit" element={<HomeScreen />}></Route>
          <Route path ="/map" element={<HomeScreen />}></Route>
          <Route path ="/chat" element={<HomeScreen />}></Route>
          <Route path ="/chat/:id" element={<HomeScreen />}></Route>
          <Route path ="/chat/:id/:sellerId" element={<HomeScreen />}></Route>
          <Route path ="/chat/:id/:sellerId/:orderId" element={<HomeScreen />}></Route>
          <Route path ="/chat/:id/:sellerId/:orderId/:productId" element={<HomeScreen />}></Route>
          <Route path ="/chat/:id/:sellerId/:orderId/:productId/:productName" element={<HomeScreen />}></Route>
          <Route path ="/chat/:id/:sellerId/:orderId/:productId/:productName/:productImage" element={<HomeScreen />}></Route>
          <Route path ="/chat/:id/:sellerId/:orderId/:productId/:productName/:productImage/:productPrice" element={<HomeScreen />}></Route>
          <Route path ="/chat/:id/:sellerId/:orderId/:productId/:productName/:productImage/:productPrice/:productCountInStock" element={<HomeScreen />}></Route>
          <Route path ="/chat/:id/:sellerId/:orderId/:productId/:productName/:productImage/:productPrice/:productCountInStock/:productQuantity" element={<HomeScreen />}></Route>
          <Route path ="/chat/:id/:sellerId/:orderId/:productId/:productName/:productImage/:productPrice/:productCountInStock/:productQuantity/:productSeller" element={<HomeScreen />}></Route>
          <Route path ="/chat/:id/:sellerId/:orderId/:productId/:productName/:productImage/:productPrice/:productCountInStock/:productQuantity/:productSeller/:productCategory" element={<HomeScreen />}></Route>
          <Route path ="/chat/:id/:sellerId/:orderId/:productId/:productName/:productImage/:productPrice/:productCountInStock/:productQuantity/:productSeller/:productCategory/:productDescription" element={<HomeScreen />}></Route>
          
          <Route path="/" element={<HomeScreen />}></Route>

          

         


        </Routes>
      </main>
      </div>
       
    </BrowserRouter>

    
  );
}

export default App;
