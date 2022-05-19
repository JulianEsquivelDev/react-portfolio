import React from "react";
import Footer from '../Footer';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

function Portfolio() {
    return (
        <>
    <Card style={{ width: '200px' }}>
    <Card.Img variant="top" src="" />
    <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
        Some quick example text to build on the card title and make up the bulk of
        the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
    </Card.Body>
    </Card>

           <Footer />
        </>
    )
}

export default Portfolio;