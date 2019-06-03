import React from 'react';
import './App.css';
import Card from './components/Card';

const data = require('./data/music.json');

class App extends React.Component {

  state = {
    url: ''
  }

  close = () => {
    this.setState({ url: '' });
  }

  render() {
    return (
      <div className="App">
        {
          data.map((e) => {
            return <Card title={e.title} image={e.image} onClickVideo={() => { this.setState({ url: e.url }) }} />
          })
        }
        <div className="pop" style={{ display: this.state.url !== '' ? 'block' : 'none' }}>
          <div className="close" onClick={this.close}>Close</div>
          <iframe title={this.state.title} width="800" height="550" src={this.state.url} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>
        </div>
      </div>
    );
  }
}

export default App;
