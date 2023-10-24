import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: 'John Doe',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        imgSrc: 'path/to/image.jpg',
        profession: 'Developer'
      },
      shows: false,
      intervalId: null,
      timeSinceMount: 0
    };
  }

  componentDidMount() {
    this.setState({
      intervalId: setInterval(() => {
        this.setState(prevState => ({
          timeSinceMount: prevState.timeSinceMount + 1
        }));
      }, 1000)
    });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  toggleProfile = () => {
    this.setState(prevState => ({
      shows: !prevState.shows
    }));
  };

  render() {
    const { person, shows, timeSinceMount } = this.state;

    return (
      <div className="App">
        <button onClick={this.toggleProfile}>
          {shows ? 'Hide Profile' : 'Show Profile'}
        </button>
        {shows && (
          <div>
            <h1>{person.fullName}</h1>
            <p>{person.bio}</p>
            <p>Profession: {person.profession}</p>
            <img src={person.imgSrc} alt="Profile" />
          </div>
        )}
        <p>Time since component mount: {timeSinceMount} seconds</p>
      </div>
    );
  }
}

export default App;

