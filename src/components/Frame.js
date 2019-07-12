import React from "react";
import Input from "./Input";

const Frame = ({ makeRoll, playerId, frameId, numberOfTries }) => {
  const attemptArray = new Array(numberOfTries).fill(null);
  console.log("attemptArray: ", attemptArray);

  const getPlaceholder = attempt => {
    switch (attempt) {
      case 0:
        return "First Roll";
      case 1:
        return "Second Roll";
      case 2:
        return "Third Roll";
      default:
        throw new Error("WHAT HAVE YOU DONE!");
    }
  };

  return (
    <div className="Frame">
      {attemptArray.map((_, i) => (
        <Input
          placeholder={getPlaceholder(i)}
          submit={pinsKnockedDown => {
            makeRoll(playerId, frameId, i, pinsKnockedDown);
          }}
          key={`${playerId}_${frameId}_${i}`}
        />
      ))}
    </div>
  );
};

export default Frame;
