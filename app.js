const Header = (props) => {
  return (
    <header>
      <h1>{ props.title }</h1>
      <span className='stats'>Players: { props.totalPlayers }</span>
    </header>
  );
}

const Player = (props) => {
  return (
    <div className='player'>
      <span className='player-name'>
        <button className='remove-player' onClick={ () => props.removePlayer( props.id ) }>✖</button>
        {props.playerName}
      </span>
      <Counter />
    </div>
  )
}

class Counter extends React.Component {
  
  state = {
    playerScore: 0
  }

  incrementScore = () => {
    this.setState( prevState => ({
      playerScore: prevState.playerScore + 1
    }))
  }

  decrementScore = () => {
    this.setState( prevState => ({
      playerScore: prevState.playerScore - 1
    }))
  }

  render () {
    return (
      <div className='counter'>
        <button className='counter-action decrement' onClick={this.decrementScore}> - </button>
        <span className='counter-score'>{this.state.playerScore}</span>
        <button className='counter-action increment' onClick={this.incrementScore}> + </button>
      </div>
    )
  }
}

class App extends React.Component {
  
  state = {
    players: [
      {
        playerName: 'Derrick',
        id: 1
      },
      {
        playerName: 'Sydni',
        id: 2
      },
      {
        playerName: 'Alicia',
        id: 3
      },
      {
        playerName: 'Grant',
        id: 4
      },
    ]
  }

  handleRemovePlayer = (id) => {
    this.setState( prevState => {
      return {
        players: prevState.players.filter( p => p.id !== id ) // filters out only the players object whose id doesn't equal the id passed into handleRemovePlayer
      }
    })
    console.log(this.state)
  }
  
  render() {
    return (
      <div className='scoreboard'>
        <Header 
          title='My Scoreboard' 
          totalPlayers={ this.state.players.length } 
        />

        {/* Players List */}
        {this.state.players.map( player =>
          <Player 
            playerName={ player.playerName } 
            id={player.id}
            key={ player.id.toString() }
            removePlayer={this.handleRemovePlayer}
          />
        )}
      </div>
    )
  }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
  )