import React from 'react';
import {Card} from "react-bootstrap";
import  '././Footer.css';


function Footer() {
    return (
        <div>
            <Card className="text-center">
                <Card.Body>
                    <Card.Title><h3>Contact Us</h3></Card.Title>
                    <Card.Text>
                        GoodBook.lk<br/>
                        HelpLine(+94)112345678<br/>
                        Email : info@GoodBook.lk  
                    </Card.Text>
                    <Card.Text>
                         Copyright 2021 < b>GoodBook.lk</b> All Right Reserved.
                    </Card.Text>
                </Card.Body>
                
            </Card>
        </div>
    )
}
export default Footer;