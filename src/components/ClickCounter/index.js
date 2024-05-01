// Write your code here
import {Component} from 'react'
import './index.css'

class clickCounter extends Component {
  state = {count: 0}
  onIncrement = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }
  onDecrement = () => {
    this.setState(prevState => ({count: prevState.count - 1}))
  }
  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="heading">
          The Button Has Been Clicked <br />
          <span className="counterValue">{count}</span> times
        </h1>
        <p className="description">Click the button to increase the count</p>
        <button className="btn" onClick={this.onIncrement}>Click Me!</button>
      </div>
    )
  }
}

export default clickCounter
