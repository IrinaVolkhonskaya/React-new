import React, { Component } from 'react';
import { connect } from 'react-redux';
import MenuItemView from './MenuItemView';
import selectors from '../../redux/selectors';


const mapState = state => ({
  // id: selectors.getMenuItemById(state),
});

// const mapDispatch = { onChange: actions.changeFilter };

export default connect(mapState)(MenuItemView);

