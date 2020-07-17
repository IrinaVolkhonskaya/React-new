import React, { Component } from 'react';
import Tab from './Tab';
import s from './Tabs.module.css';

export default class Tabs extends Component {
  state = { activeTabIndex: 0 };

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    const { activeTabIndex } = this.state;
    return nextState.activeTabIndex !== activeTabIndex;
  };

  changeActiveTabIndex = idx => {
    this.setState({ activeTabIndex: idx });
  };

  render() {
    const { activeTabIndex } = this.state;
    const { items } = this.props;
    const { title, text } = items[activeTabIndex].content;
    // const activeTabContent  = items[activeTabIndex].content;

    return (
      <div className={s.container}>
        <div className={s.actions}>
          {items.map((item, idx) => (
            <button
              className={idx === activeTabIndex ? s.active : s.button}
              type="button"
              key={item.label}
              onClick={() => this.changeActiveTabIndex(idx)}
            >
              {item.label}
            </button>
          ))}
        </div>
        <Tab title={title} text={text} />
        {/* <Tab title={activeTabContent.title} text={activeTabContent.text} /> */}
      </div>
    );
  }
}
