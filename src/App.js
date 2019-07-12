import React from "react";
import Input from "./components/Input";
import "./App.css";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playersList: [],
      gameId: ""
    };
  }

  createGame = e => {
    axios.post("/games").then(response => {
      console.log("gameId: ", response.data.id);
      this.setState({
        gameId: response.data.id
      });
    });
  };

  createPlayer = async name => {
    console.log(name);
    const res = await axios.post(`/games/addPlayer/${this.state.gameId}/`, {
      name
    });
    console.log(res);
    const nextPlayerIndex = this.state.playersList.length;
    this.setState({
      playersList: [
        ...this.state.playersList,
        res.data.playerList[nextPlayerIndex]
      ]
    });
  };

  render() {
    return (
      <div className="App">
        <div onClick={e => this.createGame()}>create game</div>
        <Input submit={this.createPlayer} placeholder={"name"} />
      </div>
    );
  }
}

export default App;
