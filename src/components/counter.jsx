import React, { Component } from "react";

class Counter extends Component {
  badge_styles = {
    fontSize: 18,
    fontWeight: "bold",
    width: 70
  };

  button_styles = {
    height: 35
  };

  render() {
    console.log("Counter instance rendered");
    return (
      <div>
        {this.props.children}
        <span style={this.badge_styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          style={this.button_styles}
          className="btn btn-dark btn-sm m-1"
        >
          increment
        </button>
        <button
          onClick={() => this.props.onDecrement(this.props.counter)}
          style={this.button_styles}
          className="btn btn-dark btn-sm m-1"
        >
          decrement
        </button>
        <button
          className="btn btn-danger btn-sm m-1"
          style={this.button_styles}
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
          delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "secondary" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "zero" : value;
  }
}

export default Counter;
