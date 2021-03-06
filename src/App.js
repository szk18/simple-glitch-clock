import React from 'react';
import './App.css';
import GlitchClip from 'react-glitch-effect/core/Clip'
import dayjs from 'dayjs'

dayjs.locale('ja')

class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      ymdd : dayjs().format('YYYY / MM / DD (ddd)'),
      hms : dayjs().format('HH:mm:ss')
    }
  }

  componentDidMount() {
    this.timerID = setInterval(
      ()=>this.tick(),
      100
    )
  }

  componentWillUnmount () {
    clearInterval(this.timerID)
  }

  tick () {
    this.setState({
      ymdd : dayjs().format('YYYY / MM / DD (ddd)'),
      hms : dayjs().format('HH:mm:ss')
    })
  }

  render() {
    return (
    <div>
      <div id="hms">{this.state.hms}</div>
      <div id="ymdd">{this.state.ymdd}</div>
    </div>
    )
  }
}

function App() {
  return (
    <div className="App">
      <GlitchClip duration='12s'>
      <header className="App-header">
        <GlitchClip duration='4s'>
          <Clock />
        </GlitchClip>
      </header>
      </GlitchClip>
    </div>
  );
}

export default App;
