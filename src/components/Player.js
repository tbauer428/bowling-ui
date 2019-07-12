import React, { useState } from "react";
import Frame from "./Frame";

const Player = ({ player, makeRoll }) => {
  //   const [frame, setFrame] = useState({});
  //   maybe

  return (
    <div>
      {player.name} {player.score}
      {player.frameList.map((frame, i) => {
        if (i === 9) {
          return (
            <Frame
              makeRoll={makeRoll}
              playerId={player.id}
              frameId={frame.id}
              key={frame.id}
              numberOfTries={3}
            />
          );
        }
        return (
          <Frame
            makeRoll={makeRoll}
            playerId={player.id}
            frameId={frame.id}
            key={frame.id}
            numberOfTries={2}
          />
        );
      })}
      {/* {player.frameList[0]} */}
    </div>
  );
};

export default Player;
