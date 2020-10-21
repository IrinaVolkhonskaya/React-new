import React, { Component } from 'react';
import { connect } from 'react-redux';
import CategorySelectorView from './CategorySelectorView';
import { menuOperations } from '../../redux';
import * as selectors from '../../redux/selectors';

class CategorySelectorContainer extends Component {
  componentDidMount() {
    this.props.getAllCategories();
  }

  render() {
    return <CategorySelectorView {...this.props} />;
  }
}

const mapState = state => ({
  categories: selectors.getMenuWithSelectedCategory(state),
});

const mapDispatch = {
  fetchCategories: menuOperations.getAllCategories,
};

export default connect(mapState, mapDispatch)(CategorySelectorContainer);
