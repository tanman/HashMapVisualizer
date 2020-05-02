import React, { Component } from "react";
import Navbar from "./components/navbar";
import Counters from "./components/counters";

// class component
class App extends Component {
  state = {
    counters: [
      { id: 1, value: 3 },
      { id: 2, value: 2 },
      { id: 3, value: 1 },
      { id: 4, value: 0 }
    ]
  };

  constructor(props) {
    super(props);
    console.log("App constructed");
  }

  componentDidMount() {
    // backend call
    // this.setState()
    console.log("App mounted");
  }

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    // guide I followed had the code below, which seems completely unnecessary to me
    // counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDecrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);

    counters[index].value < 1
      ? (counters[index].value = 0)
      : counters[index].value--;

    this.setState({ counters });
  };

  handleDelete = id => {
    const counters = this.state.counters.filter(counter => counter.id !== id);
    this.setState({ counters });
    console.log("delete request for ", id);
    console.log(counters);
  };

  handleReset = () => {
    const counters = [...this.state.counters];
    console.log("reset event received");
    counters.forEach(c => {
      c.value = 0;
    });

    this.setState({ counters });
  };

  render() {
    console.log("App rendered");
    return (
      <React.Fragment>
        <Navbar
          totalItems={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
