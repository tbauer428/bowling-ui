import React from "react";
import "./App.css";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      score: []
    };
  }

  getScores = () => {
    axios("/score").then(response => {
      this.setState({
        score: response.data
      });
    });
  };

  render() {
    return (
      <div className="App">
        <div onClick={e => this.getScores()}>get all scores</div>
      </div>
    );
  }
}

export default App;
