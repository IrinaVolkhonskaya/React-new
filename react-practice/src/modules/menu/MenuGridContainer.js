import React, { Component } from 'react';
import queryString from 'query-string';
import MenuGrid from './MenuGridView';
import Spinner from '../../components/Spinner';
import Error from '../../components/Error';
import * as API from '../../services/api';
import CategorySelector from './CategorySelector';
import categories from '../../services/categories';

const getCategoryFromProps = props =>
  queryString.parse(props.location.search).category;

export default class MenuGridContainer extends Component {
  state = { menu: [], loading: false, error: null };

  async componentDidMount() {
    // const category = getCategoryFromProps(this.props);
    // if(!category) {
    //   return this.props.history.replace({
    //     pathname: this.props.location.pathname,
    //     search: "category=all",
    //   })
    // }

    this.setState({ loading: true });
    try {
      const menu = await API.getAllMenuItems();

      this.setState({ menu, loading: false });
    } catch (error) {
      this.setState({ error, loading: false });
    }
  }

  render() {
    const { menu, loading, error } = this.state;

    return (
      <div>
        <CategorySelector options={categories} />
        {/* <button type="button" onClick={this.handleAddMenuItem}>
            Добавить элемент меню
          </button> */}
        {loading && <Spinner />}
        {error && <Error />}
        {menu.length > 0 && <MenuGrid items={menu} />}
      </div>
    );
  }
}
