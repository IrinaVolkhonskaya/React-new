import React, { Component } from 'react';

import Tabs from './components/Tabs/Tabs';
import tabsData from './components/Tabs/tabs.json';

export default class App extends Component {

  render() {
    return (
      <div>
        <h1>Tabs</h1>

        <Tabs items={tabsData} />
        <br />
      </div>
    );
  }
}
