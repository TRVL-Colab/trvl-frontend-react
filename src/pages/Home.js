import React from 'react';
import { Row, Col } from 'react-bootstrap';

import  Trip from '../components/Trip';
import  trips from '../trips';


const Home = () => {
  return (
    <div>
    <h1>Latest trips</h1>
            <div>
                <Row>
                   {trips.map(trip => (
                    <Col key={trip._id} sm={12} md={6} lg={4} xl={3}>
                        <Trip trip={trip} />
                    </Col>
                   ))}
                </Row>
             
            </div>
   </div>
  )
}

export default Home