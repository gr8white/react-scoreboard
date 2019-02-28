// ~~~~~~~~~~~~~~~~JQUERY Style~~~~~~~~~~~~~~~~~~
const title = React.createElement(
  'h1', // Type of html element ex. div, span, p
  { id: 'main-title', title: 'This is a title' }, // The attributes of the element
  'My First React Element' // Contents inside the html element
)
const desc = React.createElement(
  'p',
  null,
  'I just learned how to create a React Node. Im lit.'
)
const header = React.createElement (
  'header',
  null,
  title,
  desc
)

// ~~~~~~~~~~~~~~~~~~JSX Style~~~~~~~~~~~~~~~~~~
const title = 'My First React Element'
const desc = <p>I just learned how to create a React Node. Im lit.</p>
const myTitleId = 'main-title'
const name = 'Derrick'

const header = (
  <header>
    <h1 id={ myTitleId }>{ name }'s First React Element</h1>
    <p>I just learned how to create a React Node. Im lit.</p>
  </header>
)

ReactDOM.render(
  header,
  document.getElementById('root')
)

// ~~~~~~~~~~~~Creating a Component~~~~~~~~~~~~~~
// Represented as functions, always capitalized
// When called in ReactDOM, wrap in self closing tags

// As Function ~~~~~~~~~~~~~~~~~~~
// Used when a component is only receiving input through props
function Header() {
  return (
    <header>
      <h1>Scoreboard</h1>
      <span className='stats'>Players: 1</span>
    </header>
  );
}

// or

const Header = () => (
    <header>
      <h1>Scoreboard</h1>
      <span className='stats'>Players: 1</span>
    </header>
)

// As Class ~~~~~~~~~~~~~~~~~~~~~~
// Used when you want to add state

class Counter extends React.Component {
  render () {
    return (
      <div className='counter'>
        <button className='counter-action decrement'> - </button>
        <span className='counter-score'>{this.props.playerScore}</span>
        <button className='counter-action increment'> + </button>
      </div>
    )
  }
}


// ~~~~~~~~~~~~~~Child Components~~~~~~~~~~~~~~~~
const Player = () => {
  return (
    <div className='player'>
      <span className='player-name'>Derrick</span>
      
      <div className='counter'>
        <button className='counter-action decrement'> - </button>
        <span className='counter-score'>35</span>
        <button className='counter-action increment'> + </button>
      </div>
    </div>
  )
}

// or

const Player = () => {
  return (
    <div className='player'>
      <span className='player-name'>Derrick</span>
      <Counter />
    </div>
  )
}

const Counter = () => {
  return (
    <div className='counter'>
      <button className='counter-action decrement'> - </button>
      <span className='counter-score'>35</span>
      <button className='counter-action increment'> + </button>
    </div>
  )
}

// ~~~~~~~~~~~~~~~~~~~Props~~~~~~~~~~~~~~~~~~~~~
// A list of properties used to pass data to a component.
// Components are costomized and made reusable with props.

// Step 1: Defien the props in a component's JSX tag
// Step 2: Enable the use of props in component

// ~~~~~~~~~~~~Stateful Components~~~~~~~~~~~~~~~
// State changes over time in response to user reactions (score)
// Props are read only, state can be modified

class Counter extends React.Component {
  
  constructor() {
    super()
    this.state = {
      playerScore: 0 //Initial State
    }
  }

  render () { //If either the props or state changes the render() function runs to update whatgets displayed to the user
    return (
      <div className='counter'>
        <button className='counter-action decrement'> - </button>
        <span className='counter-score'>{this.state.playerScore}</span>
        <button className='counter-action increment'> + </button>
      </div>
    )
  }
}

// or

class Counter extends React.Component {
  
  state = {
    playerScore: 0 //Initial State
  }

  render () { //If either the props or state changes the render() function runs to update whatgets displayed to the user
    return (
      <div className='counter'>
        <button className='counter-action decrement'> - </button>
        <span className='counter-score'>{this.state.playerScore}</span>
        <button className='counter-action increment'> + </button>
      </div>
    )
  }
}

// To update state use this.setState
//More reliable way to set state:

incrementScore = () => {
  this.setState( prevState => ({
    playerScore: prevState.playerScore + 1
  }))
}

// ~~~~~~~~~~~~~~~~~~Binding~~~~~~~~~~~~~~~~~~~~~

{this.decrementScore.bind(this)} // Can bind this way
{() => this.incrementScore()} // Or this way

decrementScore = () => { // rewriting the method as an arrow function, automatically binds
  this.setState({ // Updates value of score state, reruns 'render' to update UI
    playerScore: this.state.playerScore - 1
  })
}

// ~~~~~~~~~~~~~~Types of State~~~~~~~~~~~~~~~~~~

// Aplication State: data that is available to the entire application

// Component State: state that is specific to a component and not shared outside of the component