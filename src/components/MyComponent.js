import React, { Component } from "react";

export default class MyComponent extends Component {
  render() {
    const { name, age, profession, ageIncreaser, isLoaded } = this.props;

    return (
      <div>
        <p> Name: {name}</p>
        <p> Age: {age}</p>
        <p> Profession : {profession}</p>
        <button onClick={ageIncreaser}>
          {isLoaded ? "Increase age by 1" : "get user info"}
        </button>
      </div>
    );
  }
}
