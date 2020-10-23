import React, { Component } from 'react';
import { connect } from 'react-redux';
import MenuList from './MenuListViewRedux';
import { menuOperations } from '../../redux';
import * as selectors from '../../redux/selectors';
import * as actions from '../../redux/actionsCart';

class MenuContainerRedux extends Component {
  componentDidMount() {
    this.props.fetchMenu();
  }

  render() {
    return <MenuList {...this.props} />;
  }
}

const mapState = state => ({
  menu: selectors.getVisibleItems(state),//рендер по фильтру в поиске (пока работает или по фильтру поиск или по категории)
  menu: selectors.getMenuWithSelectedCategory(state),//рендер по категории
});

const mapDispatch = {
  fetchMenu: menuOperations.fetchMenu,
  addToCart: actions.addToCart,
};

export default connect(mapState, mapDispatch)(MenuContainerRedux);
