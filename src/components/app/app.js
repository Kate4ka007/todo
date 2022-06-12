import React, { Component } from 'react';

import './app.css'

import TodoList from '../todo-list';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import ItemStatusFilter from '../item-status-filter';
import ItemAddForm from '../item-add-form';

export default class App extends Component {

  state = {
    toDoData: [
      { label: 'Drink Coffee', important: false, id: 1 },
      { label: 'Learn React', important: true, id: 2 },
      { label: 'Learn Typescript', important: false, id: 3 },
      { label: 'finish RSSchool', important: false, id: 4 },
      { label: 'find job', important: false, id: 5 },
    ]
  };

  deleteItem = (id) => {
    this.setState(({ toDoData }) => {
      const index = toDoData.findIndex((el) => el.id === id)

      const res = [
        ...toDoData.slice(0, index),
        ...toDoData.slice(index + 1)
      ];
      
      return {
        toDoData: res
      }
    })     
  }

  addItem = (text) => {
    console.log('Added', text)
  }

  render() {
    return (
      <div className="todo-app">
        <AppHeader toDo={ 1 } done={ 3 } />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>
        <TodoList todos={ this.state.toDoData }
          onDeleted={ this.deleteItem } />
        <ItemAddForm  onItemAdded = { this.addItem}/>
      </div>
      
    )
  }
}


