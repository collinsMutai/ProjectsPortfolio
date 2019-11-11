import React from "react";
import ReactDom from "react-dom";
import "react-mdl/extra/material.css";
import "react-mdl/extra/material.js";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import { Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Main from "./components/main";
import "./App.css";

const App = () => {
  return (
    <div className='demo-big-content'>
      <Layout>
        <Header
          className='header-color'
          title={
            <Link style={{ textDecoration: "none", color: "white" }} to='/'>
              Portfolio
            </Link>
          }
          scroll
        >
          <Navigation>
            <Link to='/resume'>Resume</Link>
            <Link to='/about'>About</Link>
            <Link to='/projects'>Projects</Link>
            <Link to='/contact'>Contact</Link>
          </Navigation>
        </Header>
        <Drawer
          title={
            <Link style={{ textDecoration: "none", color: "black" }} to='/'>
              Portfolio
            </Link>
          }
        >
          <Navigation>
            <Link to='/resume'>Resume</Link>
            <Link to='/about'>About</Link>
            <Link to='/projects'>Projects</Link>
            <Link to='/contact'>Contact</Link>
          </Navigation>
        </Drawer>
        <Content>
          <div className='page-content' />
          <Main />
        </Content>
      </Layout>
    </div>
  );
};

ReactDom.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.querySelector("#root")
);
