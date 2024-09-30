import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Resume() {
  return (
    <Container>
      <Row>
        <Col>
          <h1>Resume</h1>
          <div id = "resume">
      <embed src="resumezmn.pdf" width="800px" height="1100px" />
    </div>
        </Col>
        <Col>
          <Container>
            <Row>
              <Col>
              <button>
                <a href="resumezmn.pdf" download>Download</a>
              </button>
              </Col>
            </Row>
            <Row>
              <button>
                <a href="https://github.com/ZanyeNair" target="_blank">Open Github</a>
              </button>
            </Row>
          </Container>
        </Col>
      </Row>
      
    </Container>
    
  )
}

export default Resume
