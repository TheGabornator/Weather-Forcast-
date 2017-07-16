import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';

import SearchBar from '../containers/search-bar';
import WeatherList from '../containers/weather_list';

export default class App extends Component {
  render() {
    return (
      <div>
      <SearchBar/>
      <WeatherList/>
      </div>
    );
  }
}

