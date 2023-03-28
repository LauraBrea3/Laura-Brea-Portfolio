import React from 'react'
import ProjectCard from './ProjectCard'

export default function Projects() {
  const myProjects = [{title:"Loan Calculator"},{title:"Payroll System"}, {title:"Bug Tracker"}]


  return (
    <div>
      <h2 className="projects">Projects</h2>
        {myProjects.map(project => <ProjectCard/>)}
      
    </div>
  )
}
