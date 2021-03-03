import React, { Component } from "react";
import "./Ties.css";

class Ties extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: this.props.start,
    };
    this.adding = this.adding.bind(this);
    this.subtract = this.subtract.bind(this);
    this.reset = this.reset.bind(this);
  }
  adding() {
    this.setState({
      count: this.state.count + 1,
    });
  }
  subtract() {
    this.setState({
      count: this.state.count - 1,
    });
  }
  reset() {
    this.setState({
      count: (this.state.count = 0),
    });
  }

  render() {
    return (
      <div className="tie">
        <h1>ties</h1>
        <h1>{this.state.count}</h1>
        <button onClick={this.adding}>
          <h1>+</h1>
        </button>
        <button onClick={this.subtract}>
          <h1>-</h1>
        </button>
        <button onClick={this.reset}>
          <h1>reset</h1>
        </button>
      </div>
    );
  }
}

export default Ties;
