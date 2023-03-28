import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function ProjectCard() {
    const myProjects = [{title:"Loan Calculator"},{title:"Payroll System"}, {title:"Bug Tracker"}]
    const renderProjects = myProjects.map((project, i) => {
        return (
            <div key={i}>
                <p>{project.title}</p>
            </div>
        )
    })
  return (
   <div className="projectCards">
     <Card>
      <Card.Img variant="top" src="" />
      <Card.Body>
        <Card.Title>
        {renderProjects}
        </Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="warning"><a href="">Check me out!</a></Button>{' '}
      </Card.Body>
    </Card>
   </div>
  );
}

export default ProjectCard;