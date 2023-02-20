import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Trips = ({trip}) => {
  return (
    <Card className="my-3 p-3 rounded">
        <Link to={`/trip/${trip._id}`}>
            <Card.Img src={trip.image} />
        </Link>

        <Card.Body>
                <Link to={`/trip/${trip._id}`}>
                    <Card.Title as="div">
                        <strong>{trip.name}</strong>
                    </Card.Title>
                </Link>

                <Card.Text as="h6">
                     Arrival date : {trip.arrival_date}
                </Card.Text>

                <Card.Text as="h6">
                Departure date : {trip.departure_date}
                 </Card.Text>
            </Card.Body>
    </Card>
  )
}

export default Trips