import { useState, useEffect } from 'react';
import { getBestTeam } from '../utils/knapsack';
import { players } from '../utils/players';

const ResultPage = (props) => {
  const { setMode } = props;
  const [bestTeam, setBestTeam] = useState(null);

  const handleReturnBtn = () => setMode('initial');

  useEffect(() => {
    const result = getBestTeam(players, 11);
    setBestTeam(result);
    console.log(result);
  }, [])

  const renderBestTeam = bestTeam?.map((p, index) => <p key={`player-${index}`}>{p}</p>);

  return (
    <div className="home">
      <div className='container'>
        <section className="text-center">
          <h1>Tite Simulator</h1>
        </section>
        <section className="text-center">
          <h3>Jogadores Selecionados</h3>
          {renderBestTeam}
        </section>
        <section className='button-list text-center'>
          <button type="button" className="btn btn-primary" onClick={handleReturnBtn}>Retornar</button>
        </section>
      </div>
    </div>
  );
}

export default ResultPage;