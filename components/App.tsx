import * as React from 'react'
import MyComponent from './MyComponent'

export default class App extends React.Component {
  componentDidMount() {
    console.log('Looping')
    fetch('http://localhost:3000/db').then(r => r.json())
  }

  render() {
    return (
      <div>
        App
        <MyComponent />
      </div>
    )
  }
}
