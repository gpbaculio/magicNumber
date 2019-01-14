import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    lives: 5,
    guess: 0,
    magicNum: 0
  };
  componentDidMount() {
    const randomNumber = this.generateRandomNumber();
    this.setState({ magicNum: randomNumber });
  }
  generateRandomNumber = () => {
    return Math.floor(Math.random() * (100 - 1 + 1)) + 1;
  };
  onChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  onSubmit = async e => {
    e.preventDefault();
    const { lives, guess, magicNum } = this.state;
    if (lives < 1) {
      alert('No more lives!');
    }
    if (Number(guess) === magicNum) {
      alert('Correct');
    } else {
      alert('Wrong guess');
      this.setState({ lives: lives - 1 });
    }
  };

  render() {
    const { guess, lives } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <div className="form-group">
          <label className="form-label d-flex flex-column" htmlFor="guess">
            What's the magic number?
            <input
              type="number"
              id="guess"
              name="guess"
              value={guess}
              onChange={this.onChange}
            />
          </label>
        </div>
        <button
          disabled={!guess || !lives}
          type="submit"
          color="primary"
          className="btn-block">
          Submit
        </button>
      </form>
    );
  }
}

export default App;
