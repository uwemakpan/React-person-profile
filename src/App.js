import React, { Component } from 'react'
import './App.css'
import devImg from './assets/devImage.jpg'

// App class component
class App extends Component {
  constructor(props) {
    super(props)
    // Initial state setup
    this.state = {
      person: {
        fullName: 'Uwem Akpan',
        bio: 'A passionate software developer with experience in React and full-stack development.',
        imgSrc: devImg,
        profession: 'Software Developer',
      },
      show: false,
      timeSinceMount: 0, // to track the time since component mounted
    }
    this.timer = null // reference for the timer
  }

  // Lifecycle method to run when the component is mounted
  componentDidMount() {
    // Set an interval to update the time since mount
    this.timer = setInterval(() => {
      this.setState((prevState) => ({
        timeSinceMount: prevState.timeSinceMount + 1,
      }))
    }, 1000) // Update every second
  }

  // Lifecycle method to clear the timer when the component unmounts
  componentWillUnmount() {
    if (this.timer) {
      clearInterval(this.timer)
    }
  }

  // Function to toggle the 'show' state
  toggleShow = () => {
    this.setState((prevState) => ({
      show: !prevState.show,
    }))
  }

  // render method for the class App component
  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person
    const { show, timeSinceMount } = this.state

    return (
      <div className='App'>
        <h1>Person Profile</h1>

        <button onClick={this.toggleShow}>
          {show ? 'Hide Profile' : 'Show Profile'}
        </button>

        {/* Show the profile only if 'show' is true */}
        {show && (
          <div className='profile'>
            <img src={imgSrc} alt={fullName} />
            <h2>{fullName}</h2>
            <p>{bio}</p>
            <p>
              <strong>Profession:</strong> {profession}
            </p>
          </div>
        )}

        <div className='time-info'>
          <p>Time since component mounted: {timeSinceMount} seconds</p>
        </div>
      </div>
    )
  }
}

export default App
