import React from "react";
import "./App.css";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      score: [],
      playerName: ""
    };
  }

  getScores = () => {
    axios("/score").then(response => {
      console.log("response: ", response);

      this.setState({
        score: response.data
      });
    });
  };

  createPlayer = event => {
    if (event.keyCode === 13) {
      axios
        .post("/player", {
          playerNme: this.state.playerName
        })
        .then(function(response) {
          console.log(response);
        });
    } else {
      this.setState({
        playerName: event.target.value
      });
    }
  };

  render() {
    return (
      <div className="App">
        <div onClick={e => this.getScores()}>get all scores</div>
        <input
          type="text"
          onKeyUp={e => this.createPlayer(e)}
          placeholder="Enter New Player Name Here"
        />
        {this.state.score.map(score => {
          return (
            <div>
              {score.playerNme} {score.score}
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
