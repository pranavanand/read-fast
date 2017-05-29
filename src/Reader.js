import React, { Component } from 'react';

class Reader extends Component {
  constructor(props) {
    super(props);
    const millisecondPerMinute = 60000;
    const wordsPerMinute = 100;
    this.state = {index: 0, wordsPerMinute: wordsPerMinute, interval: millisecondPerMinute/wordsPerMinute};
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({ index: ++this.state.index });
      if (this.state.index >= this.getListOfWords().size) {
        clearInterval(this.timer);
      }
    }, this.state.interval);
  }

  getListOfWords() {
    return this.props.inputString.split(' ');
  }

  render() {
    let currentWord = this.getListOfWords()[this.state.index];
    return (
      <div>
        {currentWord}
      </div>
    );
  }
}

export default Reader;
