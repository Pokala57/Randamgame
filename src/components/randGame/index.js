import {Component} from 'react'
import Header from '../header/index'
import UserInput from '../randamInput/index'

import './index.css'

class RandomPicker extends Component {
  intervalDuration = 25

  duration = 1000

  interval = null

  state = {
    isRunning: false,
    currentChoice: '',
    erromsg: '',
  }

  start = () => {
    const startde = JSON.parse(localStorage.getItem('desition_list'))
    if (startde === null) {
      this.setState({erromsg: 'write atleast more then one decision in below'})
    } else {
      this.setState({erromsg: ''})
      clearInterval(this.interval)
      this.interval = setInterval(this.setChoice, this.intervalDuration)
      this.setState({isRunning: true})

      setTimeout(() => {
        this.stop()
      }, this.duration)
    }
  }

  stop = () => {
    const stopde = JSON.parse(localStorage.getItem('desition_list'))
    if (stopde === null) {
      this.setState({erromsg: 'write any one'})
    } else {
      clearInterval(this.interval)
      this.setState({isRunning: false})
    }
  }

  reset = () => {
    clearInterval(this.interval)
    this.setState({isRunning: false, currentChoice: ''})
  }

  pickChoice = () => {
    const details = JSON.parse(localStorage.getItem('desition_list')) || [
      {text: 'hello'},
      {text: 'hi'},
    ]

    if (details === null) {
      this.setState({erromsg: 'write any one'})
    }
    const s = details.map(i => i.text)

    const choice = s[Math.floor(Math.random() * s.length)]
    return choice
  }

  setChoice = () => {
    this.setState({currentChoice: this.pickChoice()})
  }

  render() {
    const {isRunning, currentChoice, erromsg} = this.state
    const hasChoice = currentChoice.trim().length > 0 && erromsg.length === 0

    return (
      <div>
        <Header />
        <div className="maincont">
          <div className="RandomPicker">
            <div className="RandomPicker__choice">
              <span className="RandomPicker__choiceItem">
                {hasChoice ? currentChoice : '?'}
              </span>
            </div>
            <div className="RandomPicker__controls">
              <button
                type="button"
                className={`RandomPicker__button ${
                  isRunning && 'RandomPicker__button--stop'
                }`}
                onClick={isRunning ? this.stop : this.start}
              >
                {isRunning ? 'stop' : 'start'}
              </button>

              <button
                type="button"
                className="RandomPicker__button RandomPicker__button--reset"
                disabled={isRunning || !hasChoice}
                onClick={this.reset}
              >
                reset
              </button>
            </div>
            <p className={erromsg ? 'error' : ''}>{erromsg}</p>
          </div>
          <UserInput />
        </div>
        <div>
          <div className="game-rules-container" id="GameRules">
            <h2 className="section-heading">Game Rules</h2>
            <ol className="rules-list">
              <li className="rule-item">firstly set some decisions</li>
              <li className="rule-item">The game involves </li>
              <li className="rule-item">
                One player will call out heads or tails before the toss.
              </li>
              <li className="rule-item">
                If the coin lands on the called side, the player wins.
              </li>
              <li className="rule-item">
                If the coin lands on the opposite side, the other player wins.
              </li>
              <li className="rule-item">
                In case of a tie, the game is played again.
              </li>
              <li className="rule-item">
                The winner of the game is the first player to reach 5 wins.
              </li>
            </ol>
          </div>

          <div className="instructions-container" id="Instructions">
            <h2 className="section-heading">Instructions</h2>
            <ol className="instructions-list">
              <li className="instruction-item">Decide who will go first.</li>
              <li className="instruction-item">
                The first player calls out heads or tails and tosses the coin.
              </li>
              <li className="instruction-item">
                If the coin lands on the called side, the player wins and gets a
                point.
              </li>
              <li className="instruction-item">
                If the coin lands on the opposite side, the other player wins
                and gets a point.
              </li>
              <li className="instruction-item">
                In case of a tie, the game is played again.
              </li>
              <li className="instruction-item">
                The game continues with players taking turns to call out heads
                or tails and toss the coin.
              </li>
              <li className="instruction-item">
                The first player to reach 5 wins is the winner of the game.
              </li>
            </ol>
          </div>
        </div>
      </div>
    )
  }
}

export default RandomPicker
