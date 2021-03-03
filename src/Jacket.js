import React, { Component } from "react";
import "./Jacket.css";

class Jacket extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: this.props.startingCount,
    };
    this.add = this.add.bind(this);
    this.minus = this.minus.bind(this);
    this.reset = this.reset.bind(this);
  }
  add() {
    this.setState({
      count: this.state.count + 1,
    });
  }
  minus() {
    this.setState({
      count: this.state.count - 1,
    });
    console.log("count", this.state.count);
  }
  reset() {
    this.setState({
      count: (this.state.count = 0),
    });
  }
  render() {
    return (
      <div className="container">
        <h1>jacket</h1>
        <h1>{this.state.count}</h1>
        <button onClick={this.add}>
          <h1> +</h1>
        </button>
        <button onClick={this.minus}>
          <h1>-</h1>
        </button>
        <button onClick={this.reset}>
          <h1>reset</h1>
        </button>
      </div>
    );
  }
}

export default Jacket;
