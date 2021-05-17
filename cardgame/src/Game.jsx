import React from "react";
import { ComputerCard } from "./ComputerCard";
import { ComputerDeck } from "./ComputerDeck";
import { PlayerCard } from "./PlayerCard";
import { PlayerDeck } from "./PlayerDeck";
import "./styles.css";
import { TextField } from "./TextField";

export const Game = () => {
  return (
    <div>
      <div className="game">
        <ComputerDeck />
        <ComputerCard />
      </div>
      <TextField />
      <div className="game">
          <PlayerDeck />
          <PlayerCard />
      </div>
    </div>
  );
};
