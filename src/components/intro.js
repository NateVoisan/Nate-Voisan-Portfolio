import React, { Component } from "react";

class Intro extends Component {
  render() {
    return (
      <div className="intro-group">
        <section id="intro" className="intro-container">
          <h2 className="software">Software Developer</h2>
          {/* <p className='bars'>|</p> */}
          <h2 className="fashion">Fashion Designer</h2>
          {/* <p className='bars'>|</p> */}
          <h2 className="music">Music Producer</h2>
        </section>
      </div>
    );
  }
}

export default Intro;
