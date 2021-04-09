import React, { Component } from "react";

import "./Header.css";

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      loading: false,
    };
  }

  componentDidMount() {
    fetch("http://localhost:4895/api/v1/state")
      .then((response) => response.json())
      .then((response) => {
        this.setState({
          items: response.data.states,
          loading: true,
        });
      });
  }

  render() {
    const { items, loading } = this.state;

    if (!loading) {
      return <div>Loading..</div>;
    } else {
      return (
        <div>
          <ul id="city" className="list-group">
            {items.map((item) => (
              <a
                href={item.wikipediaUrl}
                target="_blank"
                rel="noreferrer"
                className="list-group-item list-group-item-action"
                onClick={this.handleClick}
                key={item._id}
              >
                {item.name}
              </a>
            ))}
          </ul>
        </div>
      );
    }
  }
}

export default Landing;
