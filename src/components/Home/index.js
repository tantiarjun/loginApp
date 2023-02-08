import {Component} from 'react'

import './index.css'

class Home extends Component {
  state = {heading: 'Please Login', button: 'Login'}

  onClickBtn = () => {
    const {button} = this.state

    if (button === 'Login') {
      this.setState({heading: 'Welcome User', button: 'Logout'})
    } else {
      this.setState({heading: 'Please Login', button: 'Login'})
    }
  }

  render() {
    const {heading, button} = this.state

    return (
      <div className="bgContainer">
        <div className="card">
          <h1 className="heading">{heading}</h1>
          <button type="button" className="button" onClick={this.onClickBtn}>
            {button}
          </button>
        </div>
      </div>
    )
  }
}

export default Home
