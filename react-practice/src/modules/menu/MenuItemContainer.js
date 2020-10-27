import React, { Component } from 'react';
import { connect } from 'react-redux';
import MenuItemView from './MenuItemView';
import selectors from '../../redux/selectors';
import actions from '../../redux/actionsMenu';


const mapState = state => ({
  // id: selectors.getMenuItemById(state),
  id: selectors.getCartMenuItemsIds(state),
});

const mapDispatch = { 
  viewItemMore: actions.changeFilter 
};

export default connect(mapState, mapDispatch)(MenuItemView);

