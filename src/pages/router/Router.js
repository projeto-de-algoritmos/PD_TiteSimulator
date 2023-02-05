import { useState } from "react";
import InitialPage from "../InitialPage";
import ResultPage from "../ResultPage";

const Router = () => {
  const [mode, setMode] = useState('initial');
  return mode === 'initial' ? <InitialPage setMode={setMode} /> : <ResultPage setMode={setMode} />
}

export default Router;