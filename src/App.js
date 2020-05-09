import React, { Component } from 'react';
import Cards from './components/Cards';
import drum from './lotties/drum.json';
import Lottie from 'react-lottie';
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.drumOption = {
      loop: true,
      autoplay: true,
      animationData: drum,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      },
    };
  }

  render() {
    return (
      <div>
        <div className='title-container'>
          <h1>The Music App</h1>
          <div className='subtitle'>
            <span>Press the boxes to enjoy the Awesome beat</span>
            <Lottie options={this.drumOption} width={20} height={20} />
          </div>
        </div>
        <>
          <Cards />
        </>
      </div>
    );
  }
}

export default App;
