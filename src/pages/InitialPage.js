import PlayersTable from '../components/PlayersTable';
import { players } from '../utils/players';

const InitialPage = (props) => {
  const { setMode } = props;

  const handleResultBtn = () => setMode('result');

  return (
    <div className="home">
      <div className='container'>
        <section className="text-center">
          <h1>Tite Simulator</h1>
          <p>Depois de vergonhosamente perder a copa do mundo para a Croácia, Tite está viciado em jogar FIFA e precisa da sua ajuda pra montar o time mais forte possível com o valor que for definido.</p>
          <p>A lista conta com apenas jogadores brasileiros, pois o Tite ainda não superou a derrota, mas você tem o poder de barrar certos jogadores para que o Tite não se lembre do desempenho deles na copa.</p>
        </section>
        <section className='button-list'>
          <button type="button" className="btn btn-primary" onClick={handleResultBtn}>Ver resultado</button>
        </section>
        <section>
          <PlayersTable players={players} />
        </section>
      </div>
    </div>
  );
}

export default InitialPage;