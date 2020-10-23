import React, { Component } from 'react';
import { connect } from 'react-redux';
import CategorySelectorView from './CategorySelectorView';
import { actions, menuOperations } from '../../redux';
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
  selectedCategory: selectors.getSelectedCategory(state),
  categoryNames: selectors.getCategoryNames(state),//["soup", "dessert", "salad", "main course"]
});

const mapDispatch = {
  getAllCategories: menuOperations.getAllCategories,
  onChange: actions.selectCategory,
};

export default connect(mapState, mapDispatch)(CategorySelectorContainer);
