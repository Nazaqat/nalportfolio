import React from "react";

import {
  Tabs,
  Tab,
  CardGroup,
  Card,
  ButtonGroup,
  Button,
} from "react-bootstrap";
import "./Projects.css";
import seasonyImage from "../img/seasony.JPG";
import todojs from "../img/todojs.JPG";
import navidoc from "../img/navidoc.JPG";
import modtagfaktura from "../img/modtagfaktura.JPG";
import reacttodo from "../img/reacttodo.JPG";
import bilstereo from "../img/bilstereo.JPG";
import påvej from "../img/påvej.jpg";
import plan from "../img/plan.jpg";
function Projects() {
  return (
    <div>
      <Tabs
        defaultActiveKey="React JS"
        transition={false}
        id="noAnimationTab"
        style={{ display: "flex", justifyContent: "center", padding: "1rem" }}
      >
        {/* React js Tab  ********************************************************/}
        <Tab eventKey="React JS" title="React JS">
          <CardGroup>
            {/* React js first card  *******************************************/}
            <Card className="CardStyling">
              <Card.Img variant="top" src={seasonyImage} />
              <Card.Body>
                <Card.Title>Hack Your Future Final Project</Card.Title>
                <Card.Text>
                  React JS, Node JS, Express JS, Knex JS, Firebase, Javascript,
                  Html5, Css3, MySQL, Github
                </Card.Text>
              </Card.Body>
              <ButtonGroup aria-label="Basic example">
                <Button variant="secondary" disabled>
                  Code Pen
                </Button>
                <Button
                  variant="info"
                  href="https://github.com/Nazaqat/FP-class11-1"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Github
                </Button>
                <Button variant="secondary" disabled>
                  Live Preview
                </Button>
              </ButtonGroup>
            </Card>
            {/* React js second card  ****************************************/}
            <Card className="CardStyling">
              <Card.Img variant="top" src={bilstereo} />
              <Card.Body>
                <Card.Title>Bilstereo Experten</Card.Title>
                <Card.Text>
                  React JS, Node JS, React-mdl, Javascript, Html5, Css3, Github
                </Card.Text>
              </Card.Body>
              <ButtonGroup aria-label="Basic example">
                <Button variant="secondary" disabled>
                  Code Pen
                </Button>
                <Button
                  variant="secondary"
                  disabled
                  href="https://github.com/Nazaqat/FP-class11-1"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Github
                </Button>
                <Button
                  variant="info"
                  href="https://bilstereo.netlify.app/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Live Preview
                </Button>
              </ButtonGroup>
            </Card>

            {/* React js third card  *************************************************/}
            <Card className="CardStyling">
              <Card.Img variant="top" src={påvej} />
              <Card.Body>
                <Card.Title>Teriprøve</Card.Title>
                <Card.Text>
                  Reactjs, Nodejs, Expressjs, MySQL,Javascript, Html5, Css3,
                  Github
                </Card.Text>
              </Card.Body>
              <ButtonGroup aria-label="Basic example">
                <Button variant="secondary" disabled>
                  Code Pen
                </Button>
                <Button
                  variant="secondary"
                  disabled
                  href="https://github.com/Nazaqat/todoreact"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Github
                </Button>
                <Button variant="secondary" disabled>
                  Live Preview
                </Button>
              </ButtonGroup>
            </Card>
          </CardGroup>
        </Tab>

        {/*********** Javascript first card  **************************************/}
        <Tab eventKey="JavaScript" title="JavaScript">
          <CardGroup>
            <Card className="CardStyling">
              <Card.Img variant="top" src={todojs} />
              <Card.Body>
                <Card.Title>todo list </Card.Title>
                <Card.Text>
                  Javascript, Html5, Css3, Github pages deployment
                </Card.Text>
              </Card.Body>
              <ButtonGroup aria-label="Basic example">
                <Button variant="secondary" disabled>
                  Code Pen
                </Button>
                <Button
                  variant="info"
                  href="https://github.com/Nazaqat/todojs"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Github
                </Button>
                <Button
                  variant="info"
                  href="https://nazaqat.github.io/todojs/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Live Preview
                </Button>
              </ButtonGroup>
            </Card>

            {/* Javascript second card  ***************************************/}
            <Card className="CardStyling">
              <Card.Img variant="top" src={reacttodo} />
              <Card.Body>
                <Card.Title>Todo App</Card.Title>
                <Card.Text>Javascript, Html5, Css3, Github</Card.Text>
              </Card.Body>
              <ButtonGroup aria-label="Basic example">
                <Button variant="secondary" disabled>
                  Code Pen
                </Button>
                <Button
                  variant="info"
                  href="https://github.com/Nazaqat/todoapp"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Github
                </Button>
                <Button variant="secondary" disabled>
                  Live Preview
                </Button>
              </ButtonGroup>
            </Card>

            {/* Javascript third card *************************************/}
            <Card className="CardStyling">
              <Card.Img variant="top" src={plan} />
              <Card.Body>
                <Card.Title>Something Exciting</Card.Title>
                <Card.Text>Javascript, Jquiry, Html5, CSS3</Card.Text>
              </Card.Body>
              <ButtonGroup aria-label="Basic example">
                <Button variant="secondary" disabled>
                  Code Pen
                </Button>
                <Button
                  variant="secondary"
                  disabled
                  href="https://github.com/Nazaqat/FP-class11-1"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Github
                </Button>
                <Button variant="secondary" disabled>
                  Live Preview
                </Button>
              </ButtonGroup>
            </Card>
          </CardGroup>
        </Tab>

        {/* Wordpress first card  ************************************/}
        <Tab eventKey="Wordpress" title="Wordpress">
          <CardGroup>
            <Card className="CardStyling">
              <Card.Img variant="top" src={modtagfaktura} />
              <Card.Body>
                <Card.Title>Navidoc Support Webpage</Card.Title>
                <Card.Text>
                  Wordpress Dashboard Management, Import/Export database, Theme
                  Management, Multilanguage pages, Documentation, Security...
                </Card.Text>
              </Card.Body>
              <ButtonGroup aria-label="Basic example">
                <Button variant="secondary" disabled>
                  Code Pen
                </Button>
                <Button variant="secondary" disabled>
                  Github
                </Button>
                <Button
                  variant="info"
                  href="https://www.modtagfaktura.dk/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Live Preview
                </Button>
              </ButtonGroup>
            </Card>

            {/* Wordpress second card  ****************************************/}
            <Card className="CardStyling">
              <Card.Img variant="top" src={navidoc} />
              <Card.Body>
                <Card.Title>Navidoc Homepage</Card.Title>
                <Card.Text>
                  Wordpress updation, Import/Export of database, Theme
                  Management, Security & Contents updation..
                </Card.Text>
              </Card.Body>
              <ButtonGroup aria-label="Basic example">
                <Button variant="secondary" disabled>
                  Code Pen
                </Button>
                <Button variant="secondary" disabled>
                  Github
                </Button>
                <Button
                  variant="info"
                  href="https://www.navidoc.dk/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Live Preview
                </Button>
              </ButtonGroup>
            </Card>
          </CardGroup>
        </Tab>
      </Tabs>
    </div>
  );
}

export default Projects;
