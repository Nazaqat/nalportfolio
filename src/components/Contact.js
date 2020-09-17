import React from "react";
import { Accordion, Card, Button } from "react-bootstrap";
import emailjs from "emailjs-com"; // npm install emailjs-com --save

function Contact() {
  // Lines of code to send email via emailjs
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "business_order_inquiry", //Template ID can be found from user / email template
        e.target,
        "user_suFpPm9c2FYr8pxkCRxTY" // User ID visible under API KEYS / Account settings
      )
      .then(
        (result) => {
          alert("Thank you for contacting me - I'll return asap!");
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset(); // to reset contact form lines when send message button is clicked
  }
  return (
    <div>
      <Accordion style={{ padding: "3rem", justifyContent: "center" }}>
        {/* First card - Mobile ************************************/}
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              <i class="fa fa-phone-square" aria-hidden="true"></i> Mobile
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              You are welcome to contact me between 08:00 - 18:00 at +45 53 63
              70 61
            </Card.Body>
          </Accordion.Collapse>
        </Card>

        {/* Second card - Linkedin  **************************************/}
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="2">
              <a
                href=" https://www.linkedin.com/in/nazaqat-ali/"
                rel="noopener noreferrer"
                target="_blank"
                style={{ color: "#0e76a8" }}
              >
                <i
                  className="fa fa-linkedin-square"
                  style={{ color: "#0e76a8" }}
                  aria-hidden="true"
                ></i>{" "}
                LinkedIn
              </a>{" "}
            </Accordion.Toggle>
          </Card.Header>
        </Card>
        {/* Thrid card - Skype **************************************/}
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="3">
              <i class="fa fa-skype" aria-hidden="true"></i> Skype
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="3">
            <Card.Body>+45 53 63 70 61</Card.Body>
          </Accordion.Collapse>
        </Card>
        {/* Fourth  card - whatsapp ************************************/}
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="4">
              <i class="fa fa-whatsapp" aria-hidden="true"></i> Whatsapp
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="4">
            <Card.Body>+45 52 69 32 74</Card.Body>
          </Accordion.Collapse>
        </Card>
        {/* Fifth card - send message ***************************************/}
        <Card>
          <div className="container">
            <form onSubmit={sendEmail}>
              <div className="row pt-5 mx-auto">
                {/* Name input  ************************************/}
                <div className="col-12 form-group mx-auto">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    name="name"
                  />
                </div>
                {/* Email input  ************************************/}
                <div className="col-12 form-group pt-2 mx-auto">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email Address"
                    name="email"
                  />
                </div>
                {/* subject input  **************************************/}
                <div className="col-12 form-group pt-2 mx-auto">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Subject"
                    name="subject"
                  />
                </div>
                {/* Message area input  ***********************************/}
                <div className="col-12 form-group pt-2 mx-auto">
                  <textarea
                    className="form-control"
                    id=""
                    cols="30"
                    rows="8"
                    placeholder="Your message"
                    name="message"
                  ></textarea>
                </div>
                {/* send message button  *******************************/}
                <div className="col-12 pt-3 mx-auto">
                  <input
                    type="submit"
                    className="btn btn-info"
                    value="Send Message"
                  ></input>
                </div>
              </div>
            </form>
          </div>
        </Card>
      </Accordion>
    </div>
  );
}

export default Contact;
