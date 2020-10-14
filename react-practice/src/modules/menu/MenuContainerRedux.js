import React, { Component } from 'react';
import { connect } from 'react-redux';
// import MenuGridView from '../menu/MenuGridView';
import MenuList from './MenuListViewRedux';
import { menuOperations } from '../../redux';
import * as selectors from '../../redux/selectors';
// import menuOperations from '../../redux/menuOperations';

class MenuContainerRedux extends Component {
  componentDidMount() {
    this.props.fetchMenu();
  }

  render() {
    return <MenuList {...this.props} />;
  }
}

const mapState = state => ({
  menu: selectors.getAllMenu(state),
});

const mapDispatch = {
  fetchMenu: menuOperations.fetchMenu,
};

export default connect(mapState, mapDispatch)(MenuContainerRedux);
