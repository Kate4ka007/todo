import React from 'react';

import './app.css'

import TodoList from '../todo-list';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import ItemStatusFilter from '../item-status-filter';

const App = () => {
  const toDoData = [
    { label: 'Drink Coffee', important: false, id: 1 },
    { label: 'Learn React', important: true, id: 2 },
    { label: 'Learn Typescript', important: false, id: 3 },
  ];

  return (
    <div className="todo-app">
      <AppHeader toDo={ 1 } done={ 3 } />
      <div className="top-panel d-flex">
        <SearchPanel />
        <ItemStatusFilter />
      </div>
      <TodoList todos={ toDoData } />
    </div>
  )
}

export default App;