import React from "react";
import Input from "./components/Input";
import "./App.css";
import axios from "axios";
import Player from "./components/Player";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playerList: [],
      gameId: ""
    };
  }

  createGame = e => {
    axios.post("/games").then(response => {
      this.setState({
        gameId: response.data.id
      });
    });
  };

  updatePlayersList = e => {
    axios.get("/games").then(response => {
      console.log(response);
      const { playerList } = response.data.find(
        games => games.id === this.state.gameId
      );

      this.setState({
        playerList
      });
    });
  };

  createPlayer = async name => {
    const res = await axios.post(`/games/addPlayer/${this.state.gameId}/`, {
      name
    });

    const nextPlayerIndex = this.state.playerList.length;
    this.setState({
      playerList: [
        ...this.state.playerList,
        res.data.playerList[nextPlayerIndex]
      ]
    });
  };

  makeRoll = (playerId, frameId, rollId, pinsKnockedDown) => {
    axios.put(
      `/games/editRoll/${
        this.state.gameId
      }/${playerId}/${frameId}/${rollId}/${pinsKnockedDown}`
    );
    this.updatePlayersList();
  };

  render() {
    return (
      <div className="App">
        <div onClick={e => this.createGame()}>create game</div>
        <Input submit={this.createPlayer} placeholder={"Name"} />
        {this.state.playerList.map(player => {
          return (
            <Player player={player} key={player.id} makeRoll={this.makeRoll} />
          );
        })}
      </div>
    );
  }
}

export default App;
