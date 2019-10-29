import React, { Component } from "react";
import { hot } from 'react-hot-loader';

import "../Header/Header";
import "../../components/ArticleList/ArticleList";
import "./App.scss";

import Header from '../Header/Header';
import ArticleList from '../../components/ArticleList/ArticleList';

import "./App.scss";

class App extends Component{
  
  render() {
    return(
      <div>
          <Header>
          </Header>
          <ArticleList>
          </ArticleList>
      </div>
    );
  }
};

export default hot(module)(App);