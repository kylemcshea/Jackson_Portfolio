import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
function Projects() {
  return (
    <div className="projects-container">
      <div className="projects">
        <ul>
          <li>ALL</li>
          <li>ACOUSTIC/ORCHESTRAL</li>
          <li>ELECTRONIC</li>
          <li>ADVERTISING</li>
        </ul>
      </div>
      <div className="card-container">
        <Card>
          <Card.Img
            variant="top"
            src={process.env.PUBLIC_URL + "/img/music.webp"}
          />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src={process.env.PUBLIC_URL + "/img/music.webp"}
          />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src={process.env.PUBLIC_URL + "/img/music.webp"}
          />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src={process.env.PUBLIC_URL + "/img/music.webp"}
          />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src={process.env.PUBLIC_URL + "/img/music.webp"}
          />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src={process.env.PUBLIC_URL + "/img/music.webp"}
          />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
export default Projects;
