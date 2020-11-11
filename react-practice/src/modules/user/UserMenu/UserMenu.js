import React, { Component, createRef } from 'react';
import Dropdown from './Dropdown/Dropdown';
import Avatar from '../Avatar/Avatar';
import s from './UserMenu.module.css';

// export default class UserMenu extends Component {
//   containerRef = createRef();
//   state = {
//     isDropDownOpen: false,
    
//   };

//   componentDidMount() {
//     window.addEventListener('click', this.handleWindowClick);
//   }
//   //сравниваем где был клик, если по выпадающему Dropdown повторно, то не будет рендериться заново страница, так как измненений нет
//   shouldComponentUpdate(nextProps, nextState) {
//     const { isDropDownOpen } = this.state;

//     return nextState.isDropDownOpen !== isDropDownOpen;
//   }

//   componentWillUnmount() {
//     window.removeEventListener('click', this.handleWindowClick);
//   }

//   handleWindowClick = e => {
//     // console.log(this.containerRef.current);

//     const isTargetInsideContainer = this.containerRef.current.contains(
//       e.target,
//     );
//     const { isDropDownOpen } = this.state;
//     if (isDropDownOpen && !isTargetInsideContainer) {
//       this.handleCloseDropdown();
//     }
//   };

//   handleOpenDropdown = () => {
//     this.setState({ isDropDownOpen: true });
//   };

//   handleCloseDropdown = () => {
//     this.setState({ isDropDownOpen: false });
//   };

//   handleToggleDropDown = () => {
//     this.setState(state => ({
//       isDropDownOpen: !state.isDropDownOpen,
//     }));
//   };

//   render() {
//     const { isDropDownOpen } = this.state;
//     const { name, avatar } = this.props;

//     return (
//       <div
//         className={s.container}
//         onClick={this.handleOpenDropdown}
//         ref={this.containerRef}
//       >
//         <Avatar image={avatar} />
//         <span className={s.name}>{name}</span>
//         {isDropDownOpen && <Dropdown />}
//       </div>
//     );
//   }
// }


import Button from '../../../components/Auth/common/Button/Button';

const UserMenu = ({ user: { name }, onSignOut = () => null }) => (
  <div className={s.container}>
    <img
      className={s.image}
      src="https://www.redditstatic.com/new-icon.png"
      widt="40"
      height="40"
      alt=""
    />
    <span className={s.name}>{name}</span>
    <Dropdown />

    <Button label="Sign out" onClick={onSignOut} />
  </div>
);

export default UserMenu;
