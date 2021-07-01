import "./App.css";
import MyComponent from "./components/MyComponent";
import React, { Component } from "react";

class App extends Component {
  state = {
    name: "",
    age: null,
    profession: "",
    isLoaded: false,
  };

  ageIncreaser = () => {
    this.state.isLoaded
      ? this.setState((prevState) => ({ age: prevState.age + 1 }))
      : this.setState({
          name: "Farhan Galib",
          age: 23,
          profession: "Web Developer",
          isLoaded: true,
        });
  };

  render() {
    const { name, age, profession, isLoaded } = this.state;

    return (
      <div>
        <MyComponent
          name={name}
          profession={profession}
          age={age}
          ageIncreaser={this.ageIncreaser}
          isLoaded={isLoaded}
        ></MyComponent>
      </div>
    );
  }
}

export default App;
