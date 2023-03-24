import React from 'react'
import { useParams } from 'react-router-dom'
import Button from 'react-bootstrap/Button';

export default function Hero() {
    const heroStyles = {backgroundColor:"rgb(206,130,255)", height:"100vh"}

  return (
    <div style={heroStyles}>
        <div>
            Laura Elena Brea
        </div>
        <div>
            Software Engineer : Back-End Developer
        </div>
        <Button variant="warning"><a href="https://www.linkedin.com/in/laura-brea-b55b9a186/">Contact Me!</a></Button>{' '}
    </div>
  )
}
