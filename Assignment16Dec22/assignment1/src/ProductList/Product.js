import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';

const Product = () => {
    const data = [
        {
            "Title": "Angels and Demons",
            "Publisher": "Penguiene Random House",
            "Author": "Dan Brown",
            "price": "409",
            "BookId": "2012"
        },
        {
            "Title": "Nurse Methdology",
            "Publisher": "Blooms Bury Publication",
            "Author": "Neil Gaiman",
            "price": "300",
            "BookId": "2019"
        }
    ]

    return (
        <div>
            < Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Publisher</th>
                        <th>Author</th>
                        <th>Price</th>
                        <th>bookId</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map(
                            (element) => {
                                return (
                                    <tr>
                                        <td>{element.Title}</td>
                                        <td>{element.Publisher}</td>
                                        <td>{element.Author}</td>
                                        <td>{element.price}</td>
                                        <td>{element.BookId}</td>
                                    </tr>
                                )
                            }
                        )}
                </tbody >
            </Table >
            <Row xs={1} md={2} className="g-4">
            {data.map(
                (element) => {
                    return (
                        <Card  style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title><h2>{element.Title}</h2></Card.Title>
                                <li>BookId : {element.BookId}</li>
                                <li>Author : {element.Author}</li>
                                <li>Publisher : {element.Publisher}</li>
                                <li>Price : {element.price}</li>
                            </Card.Body>
                        </Card>)
                })}
                </Row>
        </div>
    )
}

export default Product