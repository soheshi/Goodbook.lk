import React from 'react';
import{Card,Button} from "react-bootstrap";
import "././AddNew.css"

function AddNew() {
    return (
        <div>
            <Card className="c1" >
                <Card.Body>
                    <Card.Title><h3 classname="h1">Adding New Books</h3></Card.Title>
                </Card.Body>
                    <Button variant="outline-light" href="http://127.0.0.1:5500/src/Components/Auth.html">Click me</Button>
            </Card>
        </div>
    )
}
export default AddNew;