import React, { Component } from "react";
import Projects from "./projects";
import Intro from "./intro";

class Dashboard extends Component {
  renderIntro() {
    return <Intro />;
  }

  renderProjects() {
    return <Projects />;
  }

  render() {
    return (
      <div>
        <section className="intro-and-img">
          <div className="img-div box">{this.renderIntro()}</div>
        </section>
        <div className="project-div box">{this.renderProjects()}</div>
      </div>
    );
  }
}

export default Dashboard;
