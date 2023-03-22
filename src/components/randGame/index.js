import {Component} from 'react'

import './index.css'

class RandomPicker extends Component {
  intervalDuration = 25

  duration = 1000

  interval = null

  state = {
    isRunning: false,
    currentChoice: '',
  }

  start = () => {
    clearInterval(this.interval)
    this.interval = setInterval(this.setChoice, this.intervalDuration)
    this.setState({isRunning: true})

    setTimeout(() => {
      this.stop()
    }, this.duration)
  }

  stop = () => {
    clearInterval(this.interval)
    this.setState({isRunning: false})
  }

  reset = () => {
    clearInterval(this.interval)
    this.setState({isRunning: false, currentChoice: ''})
  }

  pickChoice = () => {
    const {items} = this.props
    const choice = items[Math.floor(Math.random() * items.length)]
    return choice
  }

  setChoice = () => {
    this.setState({currentChoice: this.pickChoice()})
  }

  render() {
    const {isRunning, currentChoice} = this.state
    const hasChoice = currentChoice.trim().length > 0

    return (
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
      </div>
    )
  }
}

export default RandomPicker
