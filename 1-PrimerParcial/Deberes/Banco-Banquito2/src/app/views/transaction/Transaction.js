import React, { Component } from 'react';

import TabTransaction from '../../components/TabTransaction';

class Transaction extends Component {

  constructor() {
    super();
  } 

  render() {
    return (
    <div>
      <form  noValidate autoComplete="off">
        <TabTransaction />
      </form>
    </div>
    );
  }
}
export default Transaction;