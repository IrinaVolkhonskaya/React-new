import React, { Component } from "react";
import queryString from "query-string";
import * as api from "../api-mock/api";
import ArticleList from "../components/ArticleList";
import CategorySelector from "../components/CategorySelector";
import categories from "../api-mock/categories";

const getCategoryFromProps = (props) =>
  queryString.parse(props.location.search).category;

export default class ArticlesPage extends Component {
  state = {
    articles: [],
  };

  componentDidMount() {
    api.fetchAllArticles().then((articles) => this.setState({ articles }));
  }

  componentDidUpdate(prevProps) {
    const prevCategory = getCategoryFromProps(prevProps);
    const nextCategory = getCategoryFromProps(this.props);

    console.log(`prevCategory:`, prevCategory);
    console.log(`nextCategory:`, nextCategory);

    if (prevCategory === nextCategory) return;

    api
      .fetchArticlesByCategory(nextCategory)
      .then((articles) => this.setState({ articles })) ;
  }

  handleCategoryChange = (category) => {
    this.props.history.push({
      pathname: this.props.location.pathname,
      search: `category=${category}`,
    });
  };

  render() {
    const { articles } = this.state;
    const { match } = this.props;

    const currentCategory = getCategoryFromProps(this.props);

    return (
      <div>
        <h2>Articles Page</h2>
        <CategorySelector
          options={categories}
          value={currentCategory}
          onChange={this.handleCategoryChange}
        />
        <ArticleList articles={articles} match={match} />
      </div>
    );
  }
}
