import React, { Component } from "react";
import { Result, Searcher } from "./Components/index";
import { fetchApi } from "./Services/api";

export default class App extends Component {
  state = {
    term: "",
    page: "",
    images: [],
  };

  scroll = () => {
    const anchor = document.querySelector(".jumbotron");
    anchor.scrollIntoView("auto", "start");
  };

  previusPage = () => {
    //Read current state
    let { page } = this.state;

    if (page === 1) return null;

    page--;

    //Add change to state
    this.setState(
      {
        page,
      },
      () => {
        this.readApi();
        this.scroll();
      }
    );
  };

  nextPage = () => {
    //Read current state
    let { page } = this.state;

    page++;

    //Add change to state
    this.setState(
      {
        page,
      },
      () => {
        this.readApi();
        this.scroll();
      }
    );
  };

  readApi = async () => {
    const term = this.state.term;
    const page = this.state.page;
    const urls = {
      pixabayUrl: `https://pixabay.com/api/?key=14969572-e710ae31979c2bfb730c0a7de&q=${term}&per_page=30&page=${page}`,
      unsplashUrl: `https://api.unsplash.com/photos/?client_id=ZYuE0eTat_vuSyePIxQ6PUqESvposLDGx7b1yXZxyms&collections?&per_page=30&page=${page}&query=${term}`,
    };

    //Calling Api
    this.setState({
      images: await fetchApi(urls.unsplashUrl),
    });
  };

  dataSearch = (term) => {
    this.setState(
      {
        term,
        page: 1,
      },
      () => {
        this.readApi();
      }
    );
  };

  render() {
    const {
      state: { images },
      previusPage,
      nextPage,
      dataSearch,
    } = this;
    return (
      <div className="App container">
        <div className="jumbotron">
          <h1 className="lead text-center">ImgSearchy</h1>
          <Searcher dataSearching={dataSearch} />
        </div>
        <div className="row justify-content-center">
          <Result
            images={images}
            previusPage={previusPage}
            nextPage={nextPage}
          />
        </div>
      </div>
    );
  }
}
