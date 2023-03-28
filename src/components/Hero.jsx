import React from 'react'
import { useParams } from 'react-router-dom'
import Button from 'react-bootstrap/Button';

export default function Hero() {
    const heroStyles = {backgroundColor:"rgb(206,130,255)", height:"50vh"}

  return (
    <div className="heroStyles">
        <div className="myName">
            Laura Elena Brea
        </div>
        <div className="goals">
            Back-End Developer
        </div>
        
    </div>
  )
}
