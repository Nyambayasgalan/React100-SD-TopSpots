  
import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      topspots: []
    };
  }

  componentWillMount() {
    axios
    .get('https://origin-top-spots-api.herokuapp.com/api/topspots')
    .then(response => response.data)
    .then(topspots => this.setState({ topspots }));
  }

  render() {
    return (
      <div className='App'>
        <div className="container">
          <div className="jumbotron">

            <h1>San Diego Top Spots</h1>
            <p>A list of the top 30 places to see in San Diego, California</p>
          </div>
        </div>
        {
          this.state.topspots.map(topspot => (
            <div className ='well well-sm'>
             <h3 key={topspot.key}>{topspot.id}</h3>
             <h4 key={topspot.key}>{topspot.name} </h4>
             <p key={topspot.key}>{topspot.description}</p>
             <p key={topspot.key}>{topspot.location}</p>
            </div>
          ))
        }

<pre>
            {/* { JSON.stringify(this.state.topspots, null, 2) } */}
          </pre>
      </div>  
    );
  }
}

export default App;