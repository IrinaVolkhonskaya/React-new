import React, {Component} from 'react';
import Orders from './Orders';
import * as API from '../services/orders-api';

export default class OrdersPage extends Component {
  state = { orders: [] };

  componentDidMount() {
    API.getAllOrdersItems().then(orders => {
      this.setState({ orders });
    });
  }

  handleDeleteItem = id => {
    API.deleteOrderItem(id).then(isOk => {
      if (!isOk) return;

      this.setState(state => ({
        orders: state.orders.filter(item => item.id !== id),
      }));
    });
  };

  handleShowMoreInfo = id => {
    API.getOrderItemById(id).then(item => {
      console.log(item);
    });
  };

  handleAddOrderItem = () => {
    const item = {
      date: `${Date.now()}`,
      price: Math.random(),
      address: 'NEW Delivery Address',
      rating: Math.random(),
    };

    API.addOrderItem(item).then(newOrder => {
        this.setState(state => ({
            orders: [...state.orders, newOrder],
        }));
    });
  };

  render() {
    const { orders } = this.state;

    return (
      <div>
        <button type="button" onClick={this.handleAddOrderItem}>
          Добавить новый заказ
        </button>
        <Orders
          items={orders}
          onDelete={this.handleDeleteItem}
          onShowMoreInfo={this.handleShowMoreInfo}
        />
      </div>
    );
  }
}
