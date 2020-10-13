import React, { Component } from 'react';
import { connect } from 'react-redux';
import MenuGridView from '../menu/MenuGridView';
// import * as selectors from '../../redux/selectors';
// import * as menuOperations from '../../redux/menuOperations';
// import { selectors } from '../../redux/selectors';

import { selectors, menuOperations } from '../../redux';

class MenuContainerRedux extends Component {
  componentDidMount() {
     this.props.fetchMenu();
  }

  render() {
    return <MenuGridView {...this.props} />;
  }
}

const mapState = state => ({
  menu: selectors.getMenuIds(state),
  entities: selectors.getMenuEntities(state),
});

const mapDispatch = {
  fetchMenu: menuOperations.fetchMenu,
};

export default connect(mapState, mapDispatch)(MenuContainerRedux);
