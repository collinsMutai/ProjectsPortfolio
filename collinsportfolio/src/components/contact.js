import React from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";
class Contact extends React.Component {
  render() {
    return (
      <div className='contact-body'>
        <Grid className='contact-grid'>
          <Cell col={6}>
            <h2>Collins Mutai</h2>
            <img
              // src='https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png'
              src='./images/avatar.png'
              alt='avatar'
              style={{ height: "250px" }}
            />
            <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
              I'm a Frontend web developer based in Nairobi, Kenya. I have a
              great passion in web development. I love to code and develop
              websites that are fast, interactive, and SEO friendly. My
              expertise includes HTML, CSS, JavaScript, API's, NodeJS, MongoDB,
              ReactJS, and WordPress.
            </p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr />

            <List>
              <ListItem>
                <ListItemContent
                  style={{ fontSize: "30px", fontFamily: "Anton" }}
                >
                  <i className='fa fa-phone-square' aria-hidden='true' />
                  +254797759858
                </ListItemContent>
              </ListItem>

              <ListItem>
                <ListItemContent
                  style={{ fontSize: "30px", fontFamily: "Anton" }}
                >
                  <i className='fa fa-envelope-square' aria-hidden='true' />
                  COLLINSFRONTEND@GMAIL.COM
                </ListItemContent>
              </ListItem>

              <ListItem>
                <ListItemContent
                  style={{ fontSize: "30px", fontFamily: "Anton" }}
                >
                  <i className='fa fa-location-arrow' aria-hidden='true' />
                  NAIROBI, KENYA.
                </ListItemContent>
              </ListItem>
            </List>
          </Cell>
        </Grid>
      </div>
    );
  }
}
export default Contact;
