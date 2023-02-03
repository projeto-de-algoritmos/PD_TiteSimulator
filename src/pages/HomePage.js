import { useState, useEffect } from 'react';
import PlayersTable from '../components/PlayersTable';
import { knapsack } from '../utils/knapsack';
import { jogadores } from '../utils/atletas';

const HomePage = () => {

  // console.log(jogadores);
  const response = knapsack(jogadores, 300);
  console.log(response);

  return (
    <div className="home">
      <div className='container'>
        <PlayersTable />
      </div>
    </div>
  );
}

export default HomePage;