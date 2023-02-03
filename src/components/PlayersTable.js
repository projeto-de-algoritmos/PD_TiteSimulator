const PlayersTable = () => {
  return (
    <>
      <section className="text-center">
        <h1>Tite Simulator</h1>
        <p>Depois de vergonhosamente perder a copa do mundo para a Croácia, Tite precisa da sua ajuda pra fazer o máximo de atividades durante as férias dele.</p>
        <p>Clique no botão "Planejar Férias" para ver a nova agenda do professor.</p>
      </section>
      <section className='button-list'>
        <button type="button" className="btn btn-primary" onClick={() => console.log(`ui`)}>Retornar</button>
      </section >
      <section>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Tarefa</th>
              <th scope="col">Início</th>
              <th scope="col">Final</th>
              <th scope="col">Final</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Uepa</th>
              <td>ueba</td>
              <td>ueba</td>
              <td><button type="button" className="btn btn-danger" onClick={() => console.log(`ui`)}>Remover</button></td>
            </tr>
          </tbody>
        </table>
      </section>
    </>
  )
}

export default PlayersTable;