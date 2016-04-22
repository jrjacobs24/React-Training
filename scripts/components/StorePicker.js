/*
  StorePicker
  This will let us make <StorePicker/>
 */

import React from 'react';

import { Navigation } from 'react-router';
import helpers from '../helpers';

var StorePicker = React.createClass({
  mixins : [Navigation],

  goToStore : function(event) {
    event.preventDefault();
    // get the data from the input
    var storeId = this.refs.storeId.value;
    this.history.pushState(null, '/store/' + storeId);
    // transition from <StorePicker/> to <App/>
  },

  render : function() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        {/* Comment syntax */}
        <h2>Please Enter a Store</h2>
        <input type="text" ref="storeId" defaultValue={helpers.getFunName()} required />
        <input type="Submit" />
      </form>
    )
  }

});

export default StorePicker;