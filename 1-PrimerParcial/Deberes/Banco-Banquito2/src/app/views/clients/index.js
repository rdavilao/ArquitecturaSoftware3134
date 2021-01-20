import React, { Component } from 'react';

import TabClients from '../../components/TabClient';

class Transaction extends Component {

  constructor() {
    super();
  } 

  render() {
    return (
    <div>
      <form  noValidate autoComplete="off">
        <TabClients />
      </form>
    </div>
    );
  }
}
export default Transaction;