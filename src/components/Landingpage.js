import React from "react";
import "./Landingpage.css";
import { Grid, Cell } from "react-mdl";

function Landingpage() {
  return (
    <div style={{ width: "60%", margin: "auto" }}>
      <Grid className="landingpageGrid">
        <Cell col={12}>
          <img
            src="https://i.ibb.co/m6Q881w/nalFoto.png"
            alt="Nazaqat's Foto"
            className="nalFotoFoo"
          />
          <div className="frontEndDiv">
            <h2>Teknisk Supporter | Frontend Web Udvikler</h2>
            <hr />
            <p>
              {" "}
              React js | Node js | React Bootstrap | Javascript | Knex js |
              Express js | MySQL | Html5 | CSS3 | Wordpress | Github <br></br>{" "}
              NAV | AX | C5 | E-conomic | Bogholderi | Kunde support | Microsoft
              Office Ekspert | Holdspiller & Selvdrevet | Proaktiv | Ambitiøs...
            </p>
            <div className="social-links">
              {/* linkedin ********************************************************/}
              <a
                href="https://www.linkedin.com/in/nazaqat-ali/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i
                  className="fa fa-linkedin-square icon"
                  aria-hidden="true"
                ></i>
              </a>

              {/* Github **************************************************************/}
              <a
                href="https://github.com/Nazaqat?tab=repositories"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fa fa-github-square icon" aria-hidden="true"></i>
              </a>

              {/* Youtube **********************************************************/}
              <a
                href="https://www.youtube.com/feed/my_videos"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fa fa-youtube-square icon" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </Cell>
        <Cell col={12}></Cell>
      </Grid>
    </div>
  );
}

export default Landingpage;
