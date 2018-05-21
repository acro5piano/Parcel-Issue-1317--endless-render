import * as React from 'react'
import MyComponent from './MyComponent'

export default class App extends React.Component {
  componentDidMount() {
    console.log('Looping')
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
