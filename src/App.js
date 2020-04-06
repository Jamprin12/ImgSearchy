import React, { Component } from 'react';
import './App.css';
import Result from './Components/Result';
import Searcher from './Components/Searcher';



export default class App extends Component {

  state = {
    term: '',
    images: [],
    page: ''
  }

  scroll = () => {
    const anchor = document.querySelector('.jumbotron');
    anchor.scrollIntoView('auto', 'start');
  }

  previusPage = () => {
    //Read current state
    let page = this.state.page;

    if (page === 1) return null;

    page--;

    //Add change to state
    this.setState({
      page
    }, () => { this.readApi(); this.scroll() });
  }

  nextPage = () => {
    //Read current state
    let page = this.state.page;

    page++;

    //Add change to state
    this.setState({
      page
    }, () => { this.readApi(); this.scroll() });
  }

  readApi = () => {
    const term = this.state.term;
    const page = this.state.page
    const url = `https://pixabay.com/api/?key=14969572-e710ae31979c2bfb730c0a7de&q=${term}&per_page=30&page=${page}`

    //Calling Api
    fetch(url)
      .then(res => res.json())
      .then(res => this.setState({
        images: res.hits
      }));
  }

  dataSearch = (term) => {
    this.setState({
      term,
      page: 1
    }, () => { this.readApi() })
  }

  render() {
    return (
      <div className="App container">
        <div className="jumbotron">
          <h1 className="lead text-center">ImgSearchy</h1>
          <Searcher dataSearching={this.dataSearch} />
        </div>
        <div className="row justify-content-center">
          <Result
            images={this.state.images}
            previusPage={this.previusPage}
            nextPage={this.nextPage}
          />
        </div>
      </div>
    );
  }
}


