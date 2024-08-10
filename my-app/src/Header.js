import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <div class="header">
       <Container>
            <Row>
                <Col md={4}>
                    <h1>
                        Zayne Nair Portfolio
                    </h1>
                </Col>
                <Col md={{span:2, offset:4}}>
                    <Navbar bg="dark" data-bs-theme="dark">
                        <Container>
                        
                        <Nav 
                            className="me-auto"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                        </Nav>
                        </Container>
                    </Navbar>
                </Col>
            </Row>
            
       </Container>
    
    </div>
  )
}

export default Header
