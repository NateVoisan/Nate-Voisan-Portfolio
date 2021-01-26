import React, { Component } from "react";
import coloratura from "../images/Coloraturaplaylist.PNG";
import yamma from "../images/yamma.PNG";
import spacedrep from "../images/spacedrep.PNG";

class Projects extends Component {
  render() {
    return (
      <div className="project-group">
        <section id="projects" className="project-container">
          <div className="project-item">
            <h2 className="project-title">Coloratura</h2>
            <div className="project-links">
              <p>
                <a
                  href="https://github.com/NateVoisan/coloratura-front"
                  className="glowtoo"
                >
                  GitHub Client
                </a>
              </p>
              <p className="live-app">
                <a
                  href="https://coloratura-front.vercel.app/"
                  className="glowtoo"
                >
                  Live App
                </a>
              </p>
              <p>
                <a
                  href="https://github.com/NateVoisan/coloratura-back"
                  className="glowtoo"
                >
                  GitHub Server
                </a>
              </p>
            </div>
            <img src={coloratura} alt="Coloratura" className="project-img" />
            <p className="project-content">
              This is an application I solo built which allows users to create
              playlists of media links to store and use. Media links such as
              Youtube and Bitchute provide a media player. This was made without
              any 3rd party API's opting instead for a personally built server
              and database. The app allows users to save and edit any playlist
              or track they so choose.
            </p>
            <p className="project-tech">
              React, HTML5, CSS3, ES6, Node, Knex, PostgresQL, Express REST, Jest, Mocha/Chai,
              Vercel, Heroku
            </p>
          </div>

          <div className="project-item">
            <h2 className="project-title">Yamma</h2>
            <div className="project-links">
              <p>
                <a
                  href="https://github.com/NateVoisan/coloratura-front"
                  className="glowtoo"
                >
                  GitHub Client
                </a>
              </p>
              <p className="live-app">
                <a
                  href="https://coloratura-front.vercel.app/"
                  className="glowtoo"
                >
                  Live App
                </a>
              </p>
              <p>
                <a
                  href="https://github.com/NateVoisan/coloratura-back"
                  className="glowtoo"
                >
                  GitHub Server
                </a>
              </p>
            </div>
            <img src={yamma} alt="Yamma" className="project-img" />
            <p className="project-content">
              Yamma is an application that uses an API scraper to gather news
              from around the internet and allows users to find news about any
              serious topics regarding regions in the US, politics, business,
              health, and technology. The user is then able to enter a live chat
              correlating to each article to contribute to micro-discussions
              related to current news.
            </p>
            <p className="project-tech">
              React, HTML5, CSS3, ES6, Node, Knex, PostgresQL, Express, API Scraper, REST,
              Mocha/Chai, Vercel, Heroku
            </p>
          </div>

          <div className="project-item">
            <h2 className="project-title">Spaced Repetition</h2>
            <div className="project-links">
              <p>
                <a
                  href="https://github.com/MettyS/yamma-client"
                  className="glowtoo"
                >
                  GitHub Client
                </a>
              </p>
              <p className="live-app">
                <a
                  href="https://spaced-repetition-nu.vercel.app/"
                  className="glowtoo"
                >
                  Live App
                </a>
              </p>
              <p>
                <a
                  href="https://github.com/MettyS/yamma-server"
                  className="glowtoo"
                >
                  GitHub Server
                </a>
              </p>
            </div>
            <img
              src={spacedrep}
              alt="Spaced Repetition"
              className="project-img"
            />
            <p className="project-content">
              This application uses a spaced repetition algorithm to allow users
              to study Spanish flashcards. Users may create an account and begin
              studying where their progress will be tracked by overall score as
              well as an individual score for each word. More difficult
              flashcards are shown more frequently, while less difficult ones
              are shown less frequently.
            </p>
            <p className="project-tech">
              React, HTML5, CSS3, ES6, Node, Knex, PostgresQL, Express, REST, Cypress,
              Mocha/Chai, Vercel, Heroku
            </p>
          </div>
        </section>
      </div>
    );
  }
}

export default Projects;
