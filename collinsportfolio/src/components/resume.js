import React from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";

class Resume extends React.Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: "centre" }}>
              <img
                className='avatar-img'
                alt='profile'
                src='./images/avatar.png'
                style={{ height: "200px" }}
              />
              <h2 style={{ paddingTop: "2em" }}>Collins Mutai</h2>
              <h4 style={{ color: "grey" }}>Programmer</h4>
              <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
              <p>
                I'm a Frontend web developer based in Nairobi, Kenya. I have a
                great passion in web development. I love to code and develop
                websites that are fast, interactive, and SEO friendly. My
                expertise includes HTML, CSS, JavaScript, API's, NodeJS,
                MongoDB, ReactJS, and WordPress.
              </p>
              <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
              <h5>Address</h5>
              <p>Nairobi, Kenya</p>
              <h5>Phone</h5>
              <p>+254797759858</p>
              <h5>Email</h5>
              <p>collinsfrontend@gmail.com</p>
            </div>
          </Cell>
          <Cell className='resume-right-col' col={8}>
            <h2>Education</h2>
            <Education
              startYear={"Oct 2017"}
              endYear={"Dec 2018"}
              schoolName={"Udacity"}
              courseDescription={"FrontEnd Web Development - Incomplete"}
            />
            <Education
              startYear={"Jan 2019"}
              endYear={"Sept 2019"}
              schoolName={"Udemy"}
              courseDescription={"Full Stack Web Development"}
            />
            <Education
              startYear={"Oct 2019"}
              endYear={"In progress"}
              schoolName={"Udemy"}
              courseDescription={"React Web Development"}
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Experience</h2>
            <Experience
              startYear={"Jan 2019"}
              endYear={"Current"}
              jobName={"Remote Freelancer"}
              jobDescription={"Web Developer"}
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Skills</h2>
            <Skills skill='JavaScript' progress={100} />
          </Cell>
        </Grid>
      </div>
    );
  }
}
export default Resume;
