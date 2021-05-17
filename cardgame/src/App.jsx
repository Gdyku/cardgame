import { Game } from "./Game";
import "./styles.css";
import Deck from "./Game.js";
import { NavBar } from "./NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <div className="game">
        <div className="computer-deck deck" onClick={showCard()}></div>
        <ul className="container computer-card-slot card-slot"></ul>
      </div>
      <div className="text"></div>
      <div className="game">
        <div className="player-deck deck" onClick={showCard()}></div>
        <ul className="container player-card-slot card-slot"></ul>
      </div>
    </div>
  );
}

function showCard(){

}


export default App;
