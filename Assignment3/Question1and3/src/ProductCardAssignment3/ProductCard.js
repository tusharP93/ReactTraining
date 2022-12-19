import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';

const ProductCard = () => {
    const data = [
        {
            "Model": "Google Pixel2 ",
            "Price": "62000",
            "Ram": "4 GB",
            "Camera": "12.2",
            "OS": "Android",
            "Processor": "Snapdragon"
        },
        {
            "Model": "Apple Iphone X",
            "Price": "98000",
            "Ram": "3 GB",
            "Camera": "12",
            "OS": "IOS",
            "Processor": "A11"
        }
    ]

    const showDetails=(e,model)=> {
        e.preventDefault();
        console.log("clicked")
        data.map(
            (element) => {
                if (element.Model === model) {
                    return (
                        <div>
                            <li>Ram : {element.Ram}</li>
                            <li>Camera : {element.Camera}</li>
                            <li>OS : {element.OS}</li>
                            <li>Processor : {element.Processor}</li>
                        </div>
                    )
                }
                return null;
            })
    }

    return (
        <div>
            <Row xs={1} md={2} className="g-4">
                {data.map(
                    (element) => {
                        return (
                            <Card style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title><h2>{element.Model}</h2></Card.Title>
                                    <li>price : {element.Price}</li>
                                    {/* <li>Ram : {element.Ram}</li>
                                <li>Camera : {element.Camera}</li>
                                <li>OS : {element.OS}</li>
                                <li>Processor : {element.Processor}</li> */}
                                    <br />
                                    <Button variant="primary" onClick={(e)=>{showDetails(e,element.Model)}}> ShowDetails</Button>
                                </Card.Body>
                            </Card>
                        )
                    })}
            </Row>
        </div>
    )
}

export default ProductCard