import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Button, Card, Form } from 'react-bootstrap';
import trips from '../trips';

const Trip = ({match}) => {
  const trip = trips.find((p) => p._id == match.params.id )
  return (
    <div> 

       <Link to='/' className='btn btn-light my-3'>Go Back</Link>
       <div>
       <Row>
           <Col md={6}>
               <Image src={trip.image} alt={trip.name} fluid />
           </Col>
        </Row>
        </div>
    
    </div>
  )
}

export default Trip