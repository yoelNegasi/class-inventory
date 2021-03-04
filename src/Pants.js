import React, { Component } from "react";
import "./Pants.css";

class Pants extends Component {
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
  }
  reset() {
    this.setState({
      count: (this.state.count = 0),
    });
  }
  componentDidUpdate() {
    document.getElementById("pan").innerHTML = "Pants inventory";
  }
  componentDidMount() {
    document.getElementById("pan").innerHTML = "Pants";
  }

  render() {
    return (
      <div className="pant">
        <h1 id="pan">Pants</h1>
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

export default Pants;
