import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  CardMenu,
  IconButton
} from "react-mdl";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className='projects-grid'>
          {/* Bootstrap */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background: "url(./images/projectImg3.png) center / cover"
              }}
            ></CardTitle>
            <CardText>
              Clone of Tinder dating website. Optimized for mobile and web using
              HTML5, CSS3 and Bootstrap.
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>

              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: "white" }}>
              <IconButton name='share' />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div className='projects-grid'>
          {/* NodeJS */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background: "url(./images/projectImg1.png) center / cover"
              }}
            ></CardTitle>
            <CardText>
              Allows users to sign up for an email list. NodeJS, and EJS is used
              to template the application and Heroku to deploy.
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>

              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name='share' />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div className='projects-grid'>
          {/* MongoDB */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background: "url(./images/projectImg4.png) center / cover"
              }}
            ></CardTitle>
            <CardText>
              A web app for tracking daily goals. Mongoose and MongoDB Atlas to
              store and serve data.
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>

              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name='share' />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 3) {
      return (
        <div className='projects-grid'>
          {/* WordPress */}

          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "white",
                height: "176px",
                background: "url(./images/projectImg2.png) center / cover"
              }}
            ></CardTitle>
            <CardText>
              WordPress website for making transport reservations. The page is
              responsive, SEO friendly, has contact and google maps integration.
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>

              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: "white" }}>
              <IconButton name='share' />
            </CardMenu>
          </Card>
        </div>
      );
    }
  }
  render() {
    return (
      <div>
        <Tabs
          activeTab={this.state.activeTab}
          onChange={(tabId) => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>Bootstrap</Tab>
          <Tab>NodeJS</Tab>
          <Tab>MongoDB</Tab>
          <Tab>WordPress</Tab>
        </Tabs>
        <Grid>
          <Cell col={12}>
            <div className='content'>{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}
export default Projects;
