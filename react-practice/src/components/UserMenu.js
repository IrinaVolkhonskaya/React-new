import React, { Component, createRef } from 'react';
import Dropdown from './Dropdown';
import Avatar from './Avatar';

export default class UserMenu extends Component {
  containerRef = createRef();
  state = {
    isDropDownOpen: false,
  };

  componentDidMount() {
    window.addEventListener('click', this.handleWindowClick);
  }
  //сравниваем где был клик, если по выпадающему Dropdown повторно, то не будет рендериться заново страница, так как измненений нет
  shouldComponentUpdate(nextProps, nextState) {
    const { isDropDownOpen } = this.state;

    return nextState.isDropDownOpen !== isDropDownOpen;
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.handleWindowClick);
  }

  handleWindowClick = e => {
    console.log(this.containerRef.current);

    const isTargetInsideContainer = this.containerRef.current.contains(
      e.target,
    );
    const { isDropDownOpen } = this.state;
    if (isDropDownOpen && !isTargetInsideContainer) {
      this.closeDropdown();
    }
  };

  openDropdown = () => {
    this.setState({ isDropDownOpen: true });
  };

  closeDropdown = () => {
    this.setState({ isDropDownOpen: false });
  };

  toggleDropDown = () => {
    this.setState(state => ({
      isDropDownOpen: !state.isDropDownOpen,
    }));
  };

  render() {
    const { isDropDownOpen } = this.state;
    const { name, avatar } = this.props;

    return (
      <div
        onClick={this.openDropdown}
        className="UserMenu"
        ref={this.containerRef}
      >
        <Avatar image={avatar} />
        <span className="UserName">{name}</span>
        {isDropDownOpen && <Dropdown />}
      </div>
    );
  }
}
