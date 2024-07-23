import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: 'Cokumu Junior',
        bio: 'Software Developer',
        imgSrc: 'https://ih1.redbubble.net/image.5265707378.9716/ssrco,baseball_cap,product,FFFFFF:97ab1c12de,front,square,600x600-bg,f8f8f8.jpg',
        profession: 'Engineer'
      },
      show: false,
      timeSinceMount: 0
    };
    this.toggleShow = this.toggleShow.bind(this);
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState(prevState => ({
        timeSinceMount: prevState.timeSinceMount + 1
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  toggleShow() {
    this.setState(prevState => ({
      show: !prevState.show
    }));
  }

  render() {
    const { person, show, timeSinceMount } = this.state;

    return (
      <div className="App">
        <button onClick={this.toggleShow}>
          {show ? 'Hide Profile' : 'Show Profile'}
        </button>
        {show && (
          <div className="profile">
            <h1>{person.fullName}</h1>
            <p>{person.bio}</p>
            <img src={person.imgSrc} alt={person.fullName} />
            <p>Profession: {person.profession}</p>
          </div>
        )}
        <p>Time since component mounted: {timeSinceMount} seconds</p>
      </div>
    );
  }
}

export default App;
