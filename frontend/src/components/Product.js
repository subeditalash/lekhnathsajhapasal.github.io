import React from 'react'
import { Button, Card } from 'react-bootstrap'
import Rating from './Rating'
import { Link } from 'react-router-dom'

const Cproduct={
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
    margin: '10px',
    padding: '20px',
    width: '100%',
    maxHeight: '600px',
    minWidth: '100px',
    backgroundColor: 'white',
    zIndex: 1
}
const Cimg={
    maxHeight: '200px',
    width: '100%',
    objectFit: 'contain',
    marginBottom: '15px'
}


function Product({ product }) {

    
    
    return (
        <Card className="my-3 p-3 rounded" style={Cproduct}>
            <Link to={`/product/${product._id}`}>
                <Card.Img src={product.image} style={Cimg} />
            </Link>

            <Card.Body>
                <Link to={`/product/${product._id}`}>
                    <Card.Title as="div">
                        <strong>{product.name}</strong>
                    </Card.Title>
                </Link>

                <Card.Text as="div">
                    <div className="my-3">
                        <Rating value={product.rating} text={`${product.numReviews} reviews`} color={'#f8e825'} />
                    </div>
                </Card.Text>


                <Card.Text as="h3">
                    Rs.{product.price}
                </Card.Text>

                
                
                

               

                
            </Card.Body>
        </Card>
    )
}

export default Product
