import React from "react";
import { Grid, Cell } from "react-mdl";
class LandingPage extends React.Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className='landing-grid'>
          <Cell col={12}>
            <img
              className='avatar-img'
              alt='profile'
              src='./images/avatar.png'
            />

            <div className='banner-text'>
              <h1>Full Stack Web Developer</h1>
              <hr />
              <p>
                HTML/CSS | Bootstrap | JavaScript | React | React Native | Node
                | Express | MongoDB | WordPress
              </p>
              <div className='social-links'>
                <a
                  href='https://www.linkedin.com/in/collins-mutai/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <i className='fa fa-linkedin-square' aria-hidden='true' />
                </a>

                <a
                  href='https://github.com/collinsMutai'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <i className='fa fa-github-square' aria-hidden='true' />
                </a>

                <a
                  href='https://twitter.com/CollinsFrontend'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <i className='fa fa-twitter-square' aria-hidden='true' />
                </a>

                <a
                  href='https://www.freecodecamp.org/collinsfrontend'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <i className='fa fa-free-code-camp' aria-hidden='true' />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}
export default LandingPage;
