import React, { Component } from 'react';
// import { connect } from 'react-redux';
import MenuItemView from './MenuItemView';
// import selectors from '../../redux/selectors';
// import * as actions from '../../redux/actionsCart';


// { id, image, name, description, price }

// const menuIds = entities.menu.id;//массив объектов[1.2.3]
// заренедерить только этот id, с которого перешли 


export default class MenuItemContainer extends Component {
  // state = {};

  render() {
    const { id, image, name, description, price } = this.props;
    return (
      <MenuItemView
        id={id}
        image={image}
        name={name}
        description={description}
        price={price}
      />
    );
  }
}
