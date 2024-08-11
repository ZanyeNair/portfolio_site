import React from 'react'
import Button from 'react-bootstrap/Button';

function NoPage() {
    function goToProjects(){
        window.location.href = "/";
    }
  return (
    <div>
        <div>
        <p>The page you are looking for does not exist. Click on the button below to head to the main page</p>
        </div>
        <Button onClick= {goToProjects} variant="outline-primary">Home Page</Button>{' '}
     </div>
    
  )
}

export default NoPage
