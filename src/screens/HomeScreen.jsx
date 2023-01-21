//import data from "../data"
import { Link } from 'react-router-dom';
import { useEffect, useReducer, useState } from 'react';
import axios from 'axios';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import Product from '../components/Product';
import { Helmet } from 'react-helmet-async';
import LoadingBox from '../components/LoadinBox';
import MessageBox from '../components/MessageBox';


const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'FETCH_SUCCESS':
      return {
        ...state,
        loading: false,
        products: action.payload,
        error: '',
      };
    case 'FETCH_ERROR':
      return {
        ...state,
        loading: false,
        products: [],
        error: 'Something went wrong',
      };
    default:
      return state;
  }
};

function HomeScreen() {
  const [{ loading, error, products }, dispatch] = useReducer(reducer, {
    loading: true,
    products: [],
    error: '',
    error: '',
  });

  // const [products, setProducts] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const result = await axios.get('/api/products');
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
      } catch (error) {
        dispatch({ type: 'FETCH_ERROR' });
      }

      //setProducts(result.data)
    };
    fetchData();
  }, []);

  return (
    <div>
      <Helmet>
        <title>Amazonia | Home</title>
      </Helmet>
      <h1>Featured Products</h1>

      <div className="products">
        {loading ? (
         
          <LoadingBox />
            
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <Row>
            {products.map((product) => (
              <Col key={product.slug} sm={6} md={4} lg={3} className="mb-3">
                <Product product={product}></Product>
              </Col>
            ))}
          </Row>
        )}
      </div>
    </div>
  );
}

export default HomeScreen;
