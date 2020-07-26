import React, { Component, createRef } from 'react';
import Auth from './Auth';
import AppHeader from './AppHeader/AppHeader';
import OrderHistory from './OrderHistory';
import MenuFilter from './MenuFilter';
// import Menu from './Menu';
import menuJson from '../menu.json';
// import FilterList from './FilterList';
import Modal from './Modal/Modal';
// import Tabs from './Tabs/Tabs';
// import tabsData from '../tabs.json';

const filterMenu = (filter, menuJson) => {
  return menuJson.filter(menuItem =>
    menuItem.name.toLowerCase().includes(filter.toLowerCase()),
  );
};

console.log(`filterMenu:`, filterMenu);

export default class App extends Component {
  modalRef = createRef();

  state = {
    filter: '',
    menuJson,
    isModalOpen: false,
  };

  handleFilterChange = e => {
    this.setState({
      filter: e.target.value,
    });
  };

  handleOpenModal = () => {
    this.setState({ isModalOpen: true });
  };

  handleCloseModal = () => {
    this.setState({ isModalOpen: false });
  };

  componentDidMount() {
    window.addEventListener('click', this.handleWindowClick1);
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { isModalOpen } = this.state;

    return nextState.isModalOpen !== isModalOpen;
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.handleWindowClick1);
  }

  handleWindowClick1 = e => {
    console.log(`this.modalRef: `,this.modalRef);
    console.log(`this.modalRef.current: `, this.modalRef.current);
    console.log(`e.target`, e.target);

    const { isModalOpen } = this.state;

    // const isTargetInsideModal = this.modalRef.current.contains(e.target);

    // if (isModalOpen && !isTargetInsideModal) {
    //   this.handleCloseModal();
    // }

    // if (isModalOpen || null) {
    //   this.handleCloseModal();
    // }
  };

  render() {
    const { menuJson, filter, isModalOpen } = this.state;
    // console.log('filter:', filter);
    // const filteredMenu = filterMenu(filter, menuJson);

    return (
      <div>
        <h1>FOODY</h1>
        <AppHeader />
        <button type="button" onClick={this.handleOpenModal}>
          Open Modal
        </button>
        {isModalOpen && (
          <Modal onClose={this.handleCloseModal} ref={this.modalRef} />
        )}
        
        <br />
        <br />
        {/* <Tabs items={tabsData} />
        <br /> */}
        <Auth />
        <br />
        <OrderHistory />
        <br />
        <MenuFilter filter={filter} onFilterChange={this.handleFilterChange} />
        {/* <FilterList menuJson={filteredMenu} /> */}
        <br />
        {/* <Menu /> */}
      </div>
    );
  }
}
