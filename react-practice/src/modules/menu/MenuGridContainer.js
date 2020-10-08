import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';
import MenuGrid from './MenuGridView';
import Loader from '../../components/Loader/Loader';
import Error from '../../components/Error/Error';
import * as API from '../../services/api';
import CategorySelector from './CategorySelector';
import categories from '../../services/categories';
import CurrentFilter from '../menu/CurrentFilter';

const getCategoryFromProps = props =>
  queryString.parse(props.location.search).category;

  
class MenuGridContainer extends Component {
  state = { 
    menu: [], 
    loading: false, 
    error: null };

  async componentDidMount() {
    const category = getCategoryFromProps(this.props);
    // if(!category) {
    //   return this.props.history.replace({
    //     pathname: this.props.location.pathname,
    //     search: "category=all",
    //   })
    // }

    if(!category) {
      return API
      .getAllMenuItems()
      .then((menu) => this.setState({ menu }));
    }
    
    API.getMenuItemsWithCategory(category)
    .then((menu) => this.setState({menu}));

     
    // this.setState({ loading: true });
    // try {
    //   const menu = await API.getAllMenuItems();

    //   this.setState({ menu, loading: false });
    // } catch (error) {
    //   this.setState({ error, loading: false });
    // }
  }

  handleCategoryChange = (category) => {
    this.props.history.push({
      pathname: this.props.location.pathname,
      search: `category=${category}`,
    });
  };

  render() {
    const { menu, loading, error } = this.state;

    const currentCategory = getCategoryFromProps(this.props);

    return (
      <div>
        <CategorySelector options={categories} value={currentCategory} onChange={this.handleCategoryChange} />
        {/* <button type="button" onClick={this.handleAddMenuItem}>
            Добавить элемент меню
          </button> */}
        {loading && <Loader />}
        {error && <Error />}
        {menu.length > 0 && <MenuGrid items={menu} />}
        <hr />
        <CurrentFilter value={currentCategory} />
      </div>
    );
  }
}


export default withRouter(MenuGridContainer);