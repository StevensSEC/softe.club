import React, { Component } from 'react';
import { List, ListItem, Link } from '@material-ui/core';
import ROUTES from '../../Router';

import './ArticleList.scss';

function collateArticles() {
  // Articles have a title and a source to be used in the Article view
  let articles = ROUTES.filter((x) => {
    return x.hasOwnProperty('articleProps') && !!x.articleProps;
  }).map((x) => (
    <ListItem>
      <Link href={x.path}>{x.articleProps.title}</Link>
    </ListItem>
  ));
  return articles;
}

export default class ArticleList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: collateArticles(),
    };
  }

  render() {
    return (
      <div className="article-list">
        <h1>Read Our Articles</h1>
        <List>{this.state.articles}</List>
      </div>
    );
  }
}
