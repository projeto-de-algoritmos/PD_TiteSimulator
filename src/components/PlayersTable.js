const PlayersTable = (props) => {
  const { players } = props;

  const renderPlayers = players?.map((p, index) => (
    <tr key={`player-${index}`}>
      <td>{p.name}</td>
      <td>{p.overall}</td>
      <td>{p.value}</td>
    </tr>
  ));

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Nome</th>
          <th>Geral</th>
          <th>Valor</th>
        </tr>
      </thead>
      <tbody>
        {renderPlayers}
      </tbody>
    </table>
  )
}

export default PlayersTable;