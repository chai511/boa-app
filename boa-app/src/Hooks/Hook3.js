import React, { Component } from "react";
export default class DataLoader extends Component {
  state = { data: [] };
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data=>this.setState(data={data})
      );
  }
  render() {
    return (
      <div><ul>
          {this.state.data.map(el => (
            <li key={el.id}>{el.id}-{el.name}-{el.email}</li>
          ))}
        </ul>
      </div>
    );
  }
}