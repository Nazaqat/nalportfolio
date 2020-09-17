import React from "react";
import "./App.css";
import {
  Layout,
  Header,
  Navigation,
  Drawer,
  Content,
  Footer,
  FooterSection,
  FooterDropDownSection,
  FooterLinkList,
} from "react-mdl";
import Router from "./components/Router";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="demo-big-content">
      <Layout className="layoutStyle">
        <Header
          className="header-color"
          title={
            <Link style={{ textDecoration: "none", color: "white" }} to="/">
              Nazaqat's Portfolio
            </Link>
          }
          scroll
        >
          <Navigation>
            <Link to="/Resume">Resume</Link>
            <Link to="/Projects">Projects</Link>
            <Link to="/Skills">Skills</Link>
            <Link to="/Contact">Contact</Link>
          </Navigation>
        </Header>
        <Drawer
          title={
            <Link style={{ textDecoration: "none", color: "black" }} to="/">
              Portfolio
            </Link>
          }
        >
          <Navigation>
            <Link to="/Resume">Resume</Link>
            <Link to="/Projects">Projects</Link>
            <Link to="/Skills">Skills</Link>
            <Link to="/Contact">Contact</Link>
          </Navigation>
        </Drawer>
        <Content>
          <div className="page-content" />
          <Router />
        </Content>

        {/* Footer Section  */}

        <Footer size="mega" className="footerFoo">
          {/* First footer section  */}
          <FooterSection type="middle">
            <FooterDropDownSection title="Quick Links">
              <FooterLinkList>
                <Link to="/Resume">Resume</Link>
                <Link to="/Projects">Projects</Link>
                <Link to="/Skills">Skills</Link>
                <Link to="/Contact">Contact</Link>
              </FooterLinkList>
            </FooterDropDownSection>
            <FooterDropDownSection title="FAQ">
              <FooterLinkList>
                <a href="/">Questions</a>
              </FooterLinkList>
            </FooterDropDownSection>
          </FooterSection>
          {/* Second footer section  */}
          <FooterSection type="bottom" logo="">
            <FooterLinkList>
              <p> &copy; Nazaqat 2020</p>
            </FooterLinkList>
          </FooterSection>
        </Footer>
      </Layout>
    </div>
  );
}

export default App;
