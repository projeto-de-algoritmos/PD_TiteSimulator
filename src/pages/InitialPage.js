import PlayersTable from '../components/PlayersTable';

const InitialPage = (props) => {
  const { setMode, budget, setBudget, players, setPlayers } = props;

  const handleResultBtn = () => setMode('result');
  const isResultBtnDisabled = budget > 0 ? false : true;

  return (
    <div className="home">
      <div className='container'>
        <section className="text-center">
          <h1>Tite Simulator</h1>
          <p>Depois de vergonhosamente perder a copa do mundo para a Croácia, Tite está viciado em jogar FIFA e precisa da sua ajuda para reforçar ao máximo seu time virtual com as moedas que ele tem.</p>
          <p>Contando com apenas jogadores brasileiros, você pode escolher quais jogadores não serão nem cogitados no time virtual do Tite. Basta desmarcá-los na primeira coluna da tabela.</p>
        </section>
        <section className='actions-section'>
          <div className="form-group row">
            <label className="col-sm-6 col-form-label">Valor máximo do time:</label>
            <div className="col-sm-6">
              <input className="form-control" type='number' min='0' value={budget} onChange={e => setBudget(e.target.value)} />
            </div>
          </div>
          <div className="form-group row">
            <button type="button" className="btn btn-primary" disabled={isResultBtnDisabled} onClick={handleResultBtn}>Ver resultado</button>
          </div>
        </section>
        <section>
          <PlayersTable players={players} setPlayers={setPlayers} />
        </section>
      </div>
    </div>
  );
}

export default InitialPage;