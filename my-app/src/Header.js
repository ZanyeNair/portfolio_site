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
                <Col md={{span:2, offset:6}}>
                    <Navbar bg="dark" data-bs-theme="dark">
                        <Container>
                        
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                            id = "nav"
                        >
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/projects">Projects</Nav.Link>
                            <Nav.Link href="/resume">Resume</Nav.Link>
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
