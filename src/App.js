import React, { Component } from 'react';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Gene',
      time: 'Now',
      api_url: 'https://trackapi.nutritionix.com/v2/search/instant?query=grilled%20cheese',
      recipes: []
    }
  }


  componentDidMount() {
    const api_url = this.state

    fetch(api_url, {
      method: 'GET',
      headers:{
        'x-app-id': `${process.env.REACT_APP_X_APP_ID}`,
        'x-app-key': `${process.env.REACT_APP_X_APP_KEY}`,
      }
    }).then(response => response.json())
      .then((data) => {
        this.setState({ recipes: data })
      })
      .then(response => console.log('Success:', response))
      .catch(error => console.error('Error:', error));
  }

  render() {
  return (
    <div className="App">
      {this.state.name}
      {this.state.time}
    </div>
  );
}
}