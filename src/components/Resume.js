import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import { Tabs, Tab, Media, ProgressBar } from "react-bootstrap";
import "./Resume.css";

function ResumeTest() {
  const reactLevel = 70;
  const JavascriptLevel = 80;
  const expertLevel = 90;
  const Dansk = 80;
  const English = 90;
  const Urdu = 100;
  return (
    <div>
      <Grid fluid className="resumeGrid">
        <Row>
          <Col lg={4} className="leftCol">
            <img
              src="https://i.ibb.co/m6Q881w/nalFoto.png"
              alt="Nazaqat's Foto"
              className="nalFotoFoo"
            />
            <h4>Teknisk Supporter | Frontend Web Udvikler</h4>
            <p>
              {" "}
              React js | Node js | React Bootstrap | Javascript | Knex js |
              Express js | MySQL | Html5 | CSS3 | Wordpress | Github | NAV | AX
              | C5 | E-conomic | Bogholderi | Kunde support | Microsoft Office
              Ekspert | Holdspiller & Selvdrevet | Proaktiv | Ambitiøs...
            </p>
            {/* social links section  *************************************/}
            <div className="social-links">
              {/* linkedin *************************************************/}
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

              {/* Github **************************************************/}
              <a
                href="https://github.com/Nazaqat"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fa fa-github-square icon" aria-hidden="true"></i>
              </a>

              {/* Youtube **************************************************/}
              <a
                href="https://www.youtube.com/feed/my_videos"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fa fa-youtube-square icon" aria-hidden="true"></i>
              </a>

              {/* E-mail **************************************************/}
              <a href="mailto:naa.dk@yahoo.com">
                <i className="fa fa-envelope icon" aria-hidden="true"></i>
              </a>
            </div>{" "}
          </Col>
          <Col lg={7} className="rightCol">
            <div>
              {/* summary section  **************************************************/}
              <Tabs defaultActiveKey="Summary">
                <Tab eventKey="Summary" title="Summary" className="summaryTab">
                  <p>
                    Talentfuld med behagelig personlighed der har flere år
                    erfaring som kundesupport konsulent til erhvervskunder og
                    stærke baggrund inden for økonomi og frontend web udvikling.
                    Dedikeret til at spar tiden på kredit- bogholderi & at
                    styrke virksomhedens processerne gennem automatisering af
                    forretningsprocesser.
                  </p>
                </Tab>
                {/* Experience Section  **************************************************/}
                <Tab eventKey="Experience" title="Experience">
                  <div className="Experience">
                    <h5>
                      {/* Teknisk Supporter Experience *************************************/}
                      <a href="https://www.navidoc.dk/">
                        Kundesupport Konsulent | NaviDoc Aps | 11.2017 Till Dato
                      </a>
                    </h5>
                    <p>
                      <span style={{ color: "#302b63" }}>
                        <i
                          class="fa fa-arrow-circle-right"
                          aria-hidden="true"
                        ></i>
                      </span>{" "}
                      &nbsp; 1st niveau support til alle Navidocs kunder vedr.
                      bogholderi via e-mail, telefon og webmøder <br />
                      <span style={{ color: "#302b63" }}>
                        <i
                          class="fa fa-arrow-circle-right"
                          aria-hidden="true"
                        ></i>
                      </span>{" "}
                      &nbsp; Implementerings opgaver i.e. importere Kunde data,
                      opret ERP Connector & task Schedule og opret firma &
                      bruger i NaviDoc workflow, i forbindelse med af nye
                      kundeinstallationer samt opdatering af eksisterende kunder{" "}
                      <br />
                      <span style={{ color: "#302b63" }}>
                        <i
                          class="fa fa-arrow-circle-right"
                          aria-hidden="true"
                        ></i>
                      </span>{" "}
                      &nbsp; Være med til at ”designe” nye funktioner og moduler
                      i NaviDoc sammen med udvikler <br />
                      <span style={{ color: "#302b63" }}>
                        <i
                          class="fa fa-arrow-circle-right"
                          aria-hidden="true"
                        ></i>
                      </span>{" "}
                      &nbsp; QA og aftestning af nye funktioner og moduler i
                      NaviDoc - funktionalitet test af applikationer og NaviDoc
                      moduler, test i forskellige miljøer, herunder web og mobil
                      & 3skrive fejlrapporter
                      <br />
                      <span style={{ color: "#302b63" }}>
                        <i
                          class="fa fa-arrow-circle-right"
                          aria-hidden="true"
                        ></i>
                      </span>
                      &nbsp; Optimering af værktøjer som kunderne kan bruge,
                      herunder udvikling af wiki <br />
                      <span style={{ color: "#302b63" }}>
                        <i
                          class="fa fa-arrow-circle-right"
                          aria-hidden="true"
                        ></i>
                      </span>
                      &nbsp; Ansvarlig for Navidoc hjemmesider i.e. udvikling,
                      indhold opdatering og sikkerhed{" "}
                    </p>
                    {/* Teknisk suppport experience results ******************************* */}
                    <h6>Resultater</h6>
                    <span style={{ color: "#302b63" }}>
                      <i
                        class="fa fa-arrow-circle-right"
                        aria-hidden="true"
                      ></i>
                    </span>{" "}
                    &nbsp;Reduceret problemløsningstid til 50% <br />
                    <span style={{ color: "#302b63" }}>
                      <i
                        class="fa fa-arrow-circle-right"
                        aria-hidden="true"
                      ></i>
                    </span>{" "}
                    &nbsp;Introduceret Knowledge based article system I firm{" "}
                    <br />
                    <span style={{ color: "#302b63" }}>
                      <i
                        class="fa fa-arrow-circle-right"
                        aria-hidden="true"
                      ></i>
                    </span>{" "}
                    &nbsp; Vendte ulykkelige kunder ind i Wow kunder gennem
                    værditilvækst support <br />
                  </div>
                  {/* Experience as Chauffør ***************************************/}
                  <div className="Experience">
                    <h5>
                      <a href="https://taxa.dk/">
                        Chauffør | Copenhagen Taxi Company (4X35) |
                        04.2013-11.2017
                      </a>
                    </h5>
                    <p>
                      <span style={{ color: "#302b63" }}>
                        <i
                          class="fa fa-arrow-circle-right"
                          aria-hidden="true"
                        ></i>
                      </span>{" "}
                      &nbsp;Upheld standarder for professionalisme og
                      diskretion, når man arbejder med højtstående kunder.{" "}
                      <br />
                      <span style={{ color: "#302b63" }}>
                        <i
                          class="fa fa-arrow-circle-right"
                          aria-hidden="true"
                        ></i>
                      </span>{" "}
                      &nbsp; Håndhævet den on-time transport af gæster og varer
                      til at skabe exceptionelle kundeoplevelser. <br />
                      <span style={{ color: "#302b63" }}>
                        <i
                          class="fa fa-arrow-circle-right"
                          aria-hidden="true"
                        ></i>
                      </span>{" "}
                      &nbsp;Mappede effektive ruter med minimal forstyrrelse af
                      passagerer eller tidsplaner.
                    </p>
                  </div>
                  {/* Experience as Revisor  ***************************************/}
                  <div className="Experience">
                    <h5>
                      <a href="https://www.facebook.com/hajimuradtrusteyehospital/">
                        Revisor | Murad Trust Eye Hospital, Pakistan |
                        05.2007-08.2010
                      </a>
                    </h5>
                    <p>
                      <span style={{ color: "#302b63" }}>
                        <i
                          class="fa fa-arrow-circle-right"
                          aria-hidden="true"
                        ></i>
                      </span>{" "}
                      &nbsp;Finansbogholderi <br />
                      <span style={{ color: "#302b63" }}>
                        <i
                          class="fa fa-arrow-circle-right"
                          aria-hidden="true"
                        ></i>
                      </span>{" "}
                      &nbsp; Debitor & Kreditorstyring <br />
                      <span style={{ color: "#302b63" }}>
                        <i
                          class="fa fa-arrow-circle-right"
                          aria-hidden="true"
                        ></i>
                      </span>{" "}
                      &nbsp;Afstemninger
                      <br />
                      <span style={{ color: "#302b63" }}>
                        <i
                          class="fa fa-arrow-circle-right"
                          aria-hidden="true"
                        ></i>
                      </span>{" "}
                      &nbsp;Fakturering
                    </p>
                  </div>
                  {/* Experience as Teacher  ***************************************/}
                  <div className="Experience">
                    <h5>
                      <a href="https://elitecolleges.edu.pk/">
                        Lærer i handel | Elite Group of Colleges Gujranwala,
                        PAK| 07.2007-08.2010
                      </a>
                    </h5>
                    <p>
                      <span style={{ color: "#302b63" }}>
                        <i
                          class="fa fa-arrow-circle-right"
                          aria-hidden="true"
                        ></i>
                      </span>{" "}
                      &nbsp;Levere forelæsninger til bachelorstuderende på emner
                      som finansielt regnskab & forretningsprincipper. <br />
                      <span style={{ color: "#302b63" }}>
                        <i
                          class="fa fa-arrow-circle-right"
                          aria-hidden="true"
                        ></i>
                      </span>{" "}
                      &nbsp; Moderat kursusmateriale, undervisningsmetoder og
                      diskussioner i klasserummet <br />
                      <span style={{ color: "#302b63" }}>
                        <i
                          class="fa fa-arrow-circle-right"
                          aria-hidden="true"
                        ></i>
                      </span>{" "}
                      &nbsp;Samarbejd med kollegaer og medlemmer af
                      erhvervslivet for at løse forskningsudfordringer og
                      udvikle nye programmer og give student adgang til
                      læringsmuligheder som praktikophold.
                      <br />
                      <span style={{ color: "#302b63" }}>
                        <i
                          class="fa fa-arrow-circle-right"
                          aria-hidden="true"
                        ></i>
                      </span>{" "}
                      &nbsp;Relevante opgaver som at designe pensum, kompilere,
                      administrere og karakter eksamener og Karriere rådgivning
                      til studerende.
                    </p>
                  </div>
                </Tab>

                {/* Skill set section  ***************************************/}
                <Tab eventKey="Skills" title="Skills">
                  <h4>Skill Set !!</h4>
                  <div>
                    {/* Technial skills section ****************************** */}
                    <span>Technical Skills</span>
                    <ProgressBar
                      className="progressBarStylingx"
                      now={reactLevel}
                      variant="info"
                      label={`${reactLevel}% React js`}
                    />{" "}
                    <br />
                    <ProgressBar
                      className="progressBarStylingx"
                      now={reactLevel}
                      variant="info"
                      label={`${reactLevel}% Node js`}
                    />
                    <br />
                    <ProgressBar
                      className="progressBarStylingx"
                      now={reactLevel}
                      variant="info"
                      label={`${reactLevel}% React Bootstrap | Knex js | Express js`}
                    />
                    <br />
                    <ProgressBar
                      className="progressBarStylingx"
                      now={reactLevel}
                      variant="info"
                      label={`${reactLevel}% MySql | Wordpress | Github `}
                    />
                    <br />
                    <ProgressBar
                      className="progressBarStylingx"
                      now={JavascriptLevel}
                      variant="info"
                      label={`${JavascriptLevel}% Javascript | Html5 | Css3 `}
                    />
                  </div>
                  <br />
                  <div>
                    {/* ERP skills section ****************************** */}
                    <span>ERP Skills</span>
                    <ProgressBar
                      className="progressBarStylingx"
                      now={JavascriptLevel}
                      variant="info"
                      label={`${JavascriptLevel}% NAV | AX | C5 | E-conomic `}
                    />{" "}
                    <br />
                    <ProgressBar
                      className="progressBarStylingx"
                      now={JavascriptLevel}
                      variant="info"
                      label={`${JavascriptLevel}% Bogholderi `}
                    />
                  </div>
                  <br />
                  <div>
                    {/* Soft skills section ****************************** */}
                    <span>Soft Skills</span>
                    <ProgressBar
                      className="progressBarStylingx"
                      now={expertLevel}
                      variant="info"
                      label={`${expertLevel}% Microsoft Office Ekspert`}
                    />{" "}
                    <br />
                    <ProgressBar
                      className="progressBarStylingx"
                      now={expertLevel}
                      variant="info"
                      label={`${expertLevel}% Holdspiller & Selvdrevet`}
                    />
                    <br />
                    <ProgressBar
                      className="progressBarStylingx"
                      now={expertLevel}
                      variant="info"
                      label={`${expertLevel}% Proaktiv `}
                    />
                    <br />
                    <ProgressBar
                      className="progressBarStylingx"
                      now={expertLevel}
                      variant="info"
                      label={`${expertLevel}% Ambitiøs...`}
                    />
                  </div>
                </Tab>

                {/* Courses Section  ********************************************/}
                <Tab eventKey="Courses" title="Courses">
                  {/* Full stack web Development courese  *********************/}
                  <div className="Experience">
                    <h5>
                      <a href="https://www.hackyourfuture.dk/">
                        Full-stack Development | Foreningen Hack Your Future |
                        08.2019-04.2020
                      </a>
                    </h5>
                    <p>
                      <span style={{ color: "#302b63" }}>
                        <i
                          class="fa fa-arrow-circle-right"
                          aria-hidden="true"
                        ></i>
                      </span>{" "}
                      &nbsp; React js |React Bootstrap | Node js | Express js |
                      Knex js <br />
                      <span style={{ color: "#302b63" }}>
                        <i
                          class="fa fa-arrow-circle-right"
                          aria-hidden="true"
                        ></i>
                      </span>{" "}
                      &nbsp; JavaScript | TypeScript | JQuery
                      <br />
                      <span style={{ color: "#302b63" }}>
                        <i
                          class="fa fa-arrow-circle-right"
                          aria-hidden="true"
                        ></i>
                      </span>{" "}
                      &nbsp; Rest API’er <br />
                      <span style={{ color: "#302b63" }}>
                        <i
                          class="fa fa-arrow-circle-right"
                          aria-hidden="true"
                        ></i>
                      </span>{" "}
                      &nbsp; MySql
                      <br />
                      <span style={{ color: "#302b63" }}>
                        <i
                          class="fa fa-arrow-circle-right"
                          aria-hidden="true"
                        ></i>
                      </span>{" "}
                      &nbsp; HTML5 | CSS3
                    </p>
                  </div>
                  {/* wordpress web Development courese  **********************************/}
                  <div className="Experience">
                    <h5>
                      <a href="https://www.youtube.com/watch?v=8AZ8GqW5iak&t=1565s">
                        WordPress Website Development | Tyler Moore Youtube
                        Channel | 07.2020-08.2020
                      </a>
                    </h5>
                    <p>
                      <span style={{ color: "#302b63" }}>
                        <i
                          class="fa fa-arrow-circle-right"
                          aria-hidden="true"
                        ></i>
                      </span>{" "}
                      &nbsp; Wordpress Installation & Updation <br />
                      <span style={{ color: "#302b63" }}>
                        <i
                          class="fa fa-arrow-circle-right"
                          aria-hidden="true"
                        ></i>
                      </span>{" "}
                      &nbsp; Wordpress Dashboard Management: Theme Management |
                      Webpages Customization
                      <br />
                      <span style={{ color: "#302b63" }}>
                        <i
                          class="fa fa-arrow-circle-right"
                          aria-hidden="true"
                        ></i>
                      </span>{" "}
                      &nbsp; Import | Export database <br />
                      <span style={{ color: "#302b63" }}>
                        <i
                          class="fa fa-arrow-circle-right"
                          aria-hidden="true"
                        ></i>
                      </span>{" "}
                      &nbsp; Import demo theme contents
                      <br />
                      <span style={{ color: "#302b63" }}>
                        <i
                          class="fa fa-arrow-circle-right"
                          aria-hidden="true"
                        ></i>
                      </span>{" "}
                      &nbsp; Webpage Security
                    </p>
                  </div>
                  {/* Google Chrome Developer Tools Crash Course ******************/}
                  <div className="Experience">
                    <h5>
                      <a href="https://www.youtube.com/watch?v=x4q86IjJFag&list=LLGeuBZxo8N7wdMvqLuJXZ-g&index=5&t=0s">
                        Google Chrome Developer Tools Crash Course | Traversy
                        Media | 06.2020
                      </a>
                    </h5>
                    <p>
                      <span style={{ color: "#302b63" }}>
                        <i
                          class="fa fa-arrow-circle-right"
                          aria-hidden="true"
                        ></i>
                      </span>{" "}
                      &nbsp; Inspect | Examine | Edit HTML/CSS
                      <br />
                      <span style={{ color: "#302b63" }}>
                        <i
                          class="fa fa-arrow-circle-right"
                          aria-hidden="true"
                        ></i>
                      </span>{" "}
                      &nbsp; Enable/Disabled styles | Move & Delete Elements
                      <br />
                      <span style={{ color: "#302b63" }}>
                        <i
                          class="fa fa-arrow-circle-right"
                          aria-hidden="true"
                        ></i>
                      </span>{" "}
                      &nbsp; Console Logs | Other Commands |Special Console
                      Symbols <br />
                      <span style={{ color: "#302b63" }}>
                        <i
                          class="fa fa-arrow-circle-right"
                          aria-hidden="true"
                        ></i>
                      </span>{" "}
                      &nbsp; Examine Network & Resources | Use Snippets
                      <br />
                      <span style={{ color: "#302b63" }}>
                        <i
                          class="fa fa-arrow-circle-right"
                          aria-hidden="true"
                        ></i>
                      </span>{" "}
                      &nbsp; Workspaces & Permanent Changes | View & Remove
                      Browser Storage
                      <br />
                      <span style={{ color: "#302b63" }}>
                        <i
                          class="fa fa-arrow-circle-right"
                          aria-hidden="true"
                        ></i>
                      </span>{" "}
                      &nbsp; Perform Audits
                    </p>
                  </div>
                  <div className="Experience">
                    {/* Microsoft Dynamics Navision Course  *********************/}
                    <h5>
                      <a href="https://www.udemy.com/">
                        Microsoft Dynamics Navision | Udemy.com <br />
                        Application Setup in Microsoft Dynamics NAV
                        2015|12.2018-01.2019
                      </a>
                    </h5>
                    <p>
                      <span style={{ color: "#302b63" }}>
                        <i
                          class="fa fa-arrow-circle-right"
                          aria-hidden="true"
                        ></i>
                      </span>{" "}
                      &nbsp; Oprettelse af ny kundevirksomhed ved hjælp af Rapid
                      Start Services <br />
                      <span style={{ color: "#302b63" }}>
                        <i
                          class="fa fa-arrow-circle-right"
                          aria-hidden="true"
                        ></i>
                      </span>{" "}
                      &nbsp; Konfigurer et datterselskab
                      <br />
                      <span style={{ color: "#302b63" }}>
                        <i
                          class="fa fa-arrow-circle-right"
                          aria-hidden="true"
                        ></i>
                      </span>{" "}
                      &nbsp; Administrer brugerrettigheder og profiler <br />
                      <span style={{ color: "#302b63" }}>
                        <i
                          class="fa fa-arrow-circle-right"
                          aria-hidden="true"
                        ></i>
                      </span>{" "}
                      &nbsp; Establishment of postal groups and dimensions
                      <br />
                      <span style={{ color: "#302b63" }}>
                        <i
                          class="fa fa-arrow-circle-right"
                          aria-hidden="true"
                        ></i>
                      </span>{" "}
                      &nbsp; Etablering af numre serie & trail koder
                    </p>
                  </div>
                </Tab>

                {/* Education section  **************************************************/}
                <Tab eventKey="Education" title="Education">
                  <div className="Experience">
                    <h5>
                      Kandidat | International Logistik & Supply Chain
                      Management
                    </h5>
                    <a href="https://ju.se/en/about-us/jonkoping-international-business-school.html">
                      Jönköping International Business School | Sverige |
                      08.2010-02.2013
                    </a>
                  </div>
                  <div className="Experience">
                    <h5>Bachelor | Erhvervsøkonomi </h5>

                    <a href="http://pugc.edu.pk/website/">
                      University of the Punjab Gujranwala Campus, Pakistan |
                      03.2003-07.2007
                    </a>
                  </div>
                </Tab>

                {/* Languages section ********************************************************/}
                <Tab
                  eventKey="Languages"
                  title="Languages"
                  style={{ paddingTop: "3%" }}
                >
                  <div>
                    <span>Dansk</span>
                    <ProgressBar
                      className="progressBarStylingx"
                      now={Dansk}
                      variant="info"
                      label={`${Dansk}% `}
                    />{" "}
                    <br />
                    <span>English</span>
                    <ProgressBar
                      className="progressBarStylingx"
                      now={English}
                      variant="info"
                      label={`${English}% `}
                    />{" "}
                    <br />
                    <span>Urdu / Hindi</span>
                    <ProgressBar
                      className="progressBarStylingx"
                      now={Urdu}
                      variant="info"
                      label={`${Urdu}% `}
                    />{" "}
                    <br />
                  </div>
                </Tab>
                {/* Recommendations section  **********************************************/}
                <Tab eventKey="Recommendations" title="Recommendations">
                  <ul className="list-unstyled">
                    <Media as="li" className="recommendtCell">
                      <img
                        width={50}
                        height={50}
                        className="mr-3"
                        src="https://i.ibb.co/MC88FLM/circle-cropped.png"
                        alt="Generic placeholder"
                      />
                      <Media.Body>
                        <h5>
                          Anders Løkkegaard | Forretningskonsulent | Navidoc ApS
                          | alo@navidoc.dk | +45 53 70 70 61
                        </h5>

                        <p className="Experience">
                          I highly recommend Nazaqat as a candidate for
                          employment. He is employed by Navidoc ApS as a
                          Technical Supporter from 2017 - todate. He was
                          responsible for Customer support. He has excellent
                          communication skills. In addition, he is extremely
                          organized, reliable and computer literate. He is
                          teamplayer and can work independently and is able to
                          follow through to ensure that the job gets done.
                        </p>
                      </Media.Body>
                    </Media>

                    <Media as="li" className="recommendtCell">
                      <img
                        width={50}
                        height={50}
                        className="mr-3"
                        src="https://i.ibb.co/MC88FLM/circle-cropped.png"
                        alt="Generic placeholder"
                      />
                      <Media.Body>
                        <h5>
                          Muhammad Touseef | Programmør | Navidoc ApS |
                          mt@navidoc.dk | +45 53 76 70 61
                        </h5>
                        <p className="Experience">
                          I decidedly recommend Nazaqat as a candidate for hire.
                          I have been working with him as full stack web
                          developer since November 2017 to date. He is
                          responsible for technical customer support. He has
                          excellent communication skills, flexibility and
                          willing to work on any project that is assigned to
                          him. He is quick to volunteer to assist in other areas
                          of company operations, as well. He would be a
                          tremendous asset for your company and has my highest
                          recommendation. If you have any further questions with
                          regard to his background or qualifications, please do
                          not hesitate to call me.
                        </p>
                      </Media.Body>
                    </Media>

                    <Media as="li" className="recommendtCell">
                      <img
                        width={50}
                        height={50}
                        className="mr-3"
                        src="https://i.ibb.co/MC88FLM/circle-cropped.png"
                        alt="Generic placeholder"
                      />
                      <Media.Body>
                        <h5>
                          Benjamin Hughes | Programmør & Lærer | Hack Your
                          Future
                        </h5>
                        <p className="Experience">
                          Nazaqat Ali has been a student in our program for the
                          last 6 months. Here he has demonstrated skill, strong
                          dedication and motivation to learning web development.
                          Nazaqat is known as being positive, hard working and
                          well liked by his classmates. He constantly strives
                          towards improving his skills within web development.
                        </p>
                      </Media.Body>
                    </Media>
                  </ul>
                </Tab>
              </Tabs>
            </div>
          </Col>
        </Row>
      </Grid>
    </div>
  );
}

export default ResumeTest;
