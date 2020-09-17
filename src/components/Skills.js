import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { ProgressBar } from "react-bootstrap";
import "./Skills.css";

function Skills() {
  const reactLevel = 70;
  const JavascriptLevel = 80;
  const expertLevel = 90;
  return (
    <div className="skillSetSec">
      <h4>Skill Set !!</h4>
      <div>
        {/* Technical Skills section **************************************** */}
        <span className="technicalSet">Technical Skills</span>
        <ProgressBar
          className="progressBarStyling"
          now={reactLevel}
          variant="info"
          label={`${reactLevel}% React js`}
        />{" "}
        <br />
        <ProgressBar
          className="progressBarStyling"
          now={reactLevel}
          variant="info"
          label={`${reactLevel}% Node js`}
        />
        <br />
        <ProgressBar
          className="progressBarStyling"
          now={reactLevel}
          variant="info"
          label={`${reactLevel}% React Bootstrap | Knex js | Express js`}
        />
        <br />
        <ProgressBar
          className="progressBarStyling"
          now={reactLevel}
          variant="info"
          label={`${reactLevel}% MySql | Wordpress | Github `}
        />
        <br />
        <ProgressBar
          className="progressBarStyling"
          now={JavascriptLevel}
          variant="info"
          label={`${JavascriptLevel}% Javascript | Html5 | Css3 `}
        />
      </div>
      <br />
      <div>
        {/* ERP Skills section **************************************** */}
        <span className="technicalSet">ERP Skills</span>
        <ProgressBar
          className="progressBarStyling"
          now={JavascriptLevel}
          variant="info"
          label={`${JavascriptLevel}% NAV | AX | C5 | E-conomic `}
        />{" "}
        <br />
        <ProgressBar
          className="progressBarStyling"
          now={JavascriptLevel}
          variant="info"
          label={`${JavascriptLevel}% Bogholderi `}
        />
      </div>
      <br />
      <div>
        {/* soft Skills section **************************************** */}
        <span className="technicalSet">Soft Skills</span>
        <ProgressBar
          className="progressBarStyling"
          now={expertLevel}
          variant="info"
          label={`${expertLevel}% Microsoft Office Ekspert`}
        />{" "}
        <br />
        <ProgressBar
          className="progressBarStyling"
          now={expertLevel}
          variant="info"
          label={`${expertLevel}% Holdspiller & Selvdrevet`}
        />
        <br />
        <ProgressBar
          className="progressBarStyling"
          now={expertLevel}
          variant="info"
          label={`${expertLevel}% Proaktiv `}
        />
        <br />
        <ProgressBar
          className="progressBarStyling"
          now={expertLevel}
          variant="info"
          label={`${expertLevel}% Ambitiøs...`}
        />
      </div>
      <br />
    </div>
  );
}

export default Skills;
