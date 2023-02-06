import { useState } from "react";
import { players } from "../../assets/players";
import InitialPage from "../InitialPage";
import ResultPage from "../ResultPage";


const Router = () => {
  const [mode, setMode] = useState('initial');
  const [budget, setBudget] = useState('');

  const initPlayersList = players.map(player => ({ ...player, selected: true }));
  const [playersList, setPlayersList] = useState(initPlayersList);

  return mode === 'initial' ?
    <InitialPage setMode={setMode} budget={budget} setBudget={setBudget} players={playersList} setPlayers={setPlayersList} /> :
    <ResultPage setMode={setMode} budget={budget} players={playersList} />
}

export default Router;