import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useReducer, useState} from 'react';
import axios from 'axios';
import { Badge, ListGroup, Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import Product from '../components/Product';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import Rating from '../components/Rating';
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
        product: action.payload,
        error: '',
      };
    case 'FETCH_ERROR':
      return {
        ...state,
        loading: false,
        product: [],
        error: 'Something went wrong',
      };
    default:
      return state;
  }
};

const ProductScreen = () => {
    const params = useParams()
    const {slug} = params
    
    const [{ loading, error, product }, dispatch] = useReducer(reducer, {
    loading: true,
    products: [],
    error: '',
    error: '',

    });
 
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const result = await axios.get(`/api/products/slug/${slug}`);
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
      } catch (error) {
        dispatch({ type: 'FETCH_ERROR', payload: error.response && error.response.data.message ? error.response.data.message : error.message });
      }
    };
    fetchData();
  }, [slug]);


  return (loading ? (
         
    <LoadingBox />
      
  ) : error ? (
    <MessageBox variant="danger">{error}</MessageBox>
  ) : (
      <div>
        <Row>
          <Col md={6}>
            <img className='img-large' src={product.image} alt={product.name} />
          </Col>

          <Col md={3}>

            <ListGroup variant='flush'>
              <ListGroup.Item>

                <Helmet>
                  <title>{product.name}</title>
                </Helmet>
                <h1>{product.name}</h1>

              </ListGroup.Item>
            
              <ListGroup.Item>
                <Rating rating={product.rating}numReviews={product.numReviews}> </Rating></ListGroup.Item>

              <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
              <ListGroup.Item>
                Description:
                <p>{product.description}</p>
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={3}>
            <Card>
              <ListGroup variant='flush'>
                <ListGroup.Item>
                  <Row>
                    <Col>Price:</Col>
                    <Col><strong>${product.price}</strong></Col></Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Status:</Col>
                    <Col>{product.countInStock > 0 ? 
                    (

                    <Badge bg='success'>In Stock</Badge> 
                        ): (



                    <Badge bg='danger'>Out of Stock</Badge>

                    )}
                    </Col>


                    
                    </Row>   
                </ListGroup.Item>
                {product.countInStock > 0 && (
                  <ListGroup.Item>
                    <div className='d-grid'>
                      <Button variant='primary'>
                        Add to Cart
                      </Button>
                    </div>
                  </ListGroup.Item>
                )}
                    


                </ListGroup>

                <Card.Body>
                </Card.Body>
                </Card>
                 </Col>
                  </Row>


            </div>
    
  

    )

  )

  
}




export default ProductScreen