import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';


function Home() {

    function goToProjects(){
        window.location.href = "/projects";
    }
  return (
    <div>
        <div className = "Title">
            <h1>Zayne Nair</h1>
            <p>Junior -- Wheeler Highschool -- Class of 2026</p>
        </div>
        <br></br>
        <Container id="whoIAm">
            <Row>
                <Col>
                    <Image src="/images/pfp.JPG" thumbnail />
                </Col>
                <Col>
                    <h1>Who Am I</h1>
                    <p>General outline of who I am</p>
                </Col>
            </Row>
        </Container>

        <br/>

        <Carousel id = "slideshow" indicators = {false} slide={false}>
            <Carousel.Item>
                <Container>
                    <Row>
                        <Col>
                            <Image src="/images/pfp.JPG" thumbnail />
                        </Col>
                        <Col>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        <Button onClick= {goToProjects} variant="outline-primary">Primary</Button>{' '}
                        </Col>
                    </Row>
                </Container>
                
              
            </Carousel.Item>
            <Carousel.Item>
                <Container>
                    <Row>
                        <Col>
                            <Image src="/images/pfp.JPG" thumbnail />
                        </Col>
                        <Col>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        
                        <Button onClick= {goToProjects} variant="outline-primary">Primary</Button>{' '}
                        </Col>
                    </Row>
                </Container>
                
               
            </Carousel.Item>
            <Carousel.Item>
            
            <Container>
                    <Row>
                        <Col>
                            <Image src="/images/pfp.JPG" thumbnail />
                        </Col>
                        <Col>
                        <h3>Third slide label</h3>
                         <p>
                             Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                          </p>
                          <Button onClick= {goToProjects} variant="outline-primary">Projects</Button>{' '}
                        </Col>

                    </Row>
                </Container>
                
       
            </Carousel.Item>
        </Carousel>

      
    </div>
  )
}

export default Home
