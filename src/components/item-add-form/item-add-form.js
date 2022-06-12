import React, { Component } from 'react';


import './item-add-form.css';

export default class ItemAddForm extends Component {

  render() {
    
    return (
      <div className={ 'add-item-form' }>

        <button type="button" onClick = { () => { this.props.onItemAdded('hello world') }  }
          className="btn btn-outline-success btn-sm">
          <i className="fa fa-plus-circle" />
        </button>
        
      </div>
    );
  }
}

