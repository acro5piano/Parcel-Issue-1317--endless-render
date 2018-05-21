import * as React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Routes } from './Routes'

export default class App extends React.Component {
  state = {
    music: []
  }

  componentDidMount() {
    console.log('Looping')
    fetch('http://localhost:3000/db').then(r => r.json())
  }

  render() {
    return (
      <React.Fragment>
        <div>
          App Here!
          <Router>
            <Routes {...this.state} />
          </Router>
        </div>
      </React.Fragment>
    )
  }
}
