import React from 'react'
import Stats from './Stats'
import Stopwatch from './Stopwatch'

const Header = ({players, title}) => {
  
  return (
    <header>
      <Stats players={players}
      // totalPlayers={props.totalPlayers} totalScore={props.totalScore}
      />
      <h1>{ title }</h1>
      <Stopwatch />
    </header>
  );
}

export default Header;