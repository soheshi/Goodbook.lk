import React from 'react';
import { Navbar,NavbarBrand,Nav,Button,} from "react-bootstrap";


function Na() {
    return (
        <div>
            <>
            <Navbar bg="dark" variant="dark">
                    <NavbarBrand href=""><h2>GoodBook.lk</h2></NavbarBrand>
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#Books">Books</Nav.Link>
                        <Nav.Link href="src/Components/Auth.html" target="_blank">Add Book</Nav.Link>
                        <Nav.Link href="footer.js">Contact Us</Nav.Link>
                    </Nav>
                    
                        <Button variant="outline-success">Sign Up</Button> n
                        <Button variant="outline-primary">Sign In</Button>
                    
                  
                     
                </Navbar>
            </>

        </div>
    )
}
export default Na;