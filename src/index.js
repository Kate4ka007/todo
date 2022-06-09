import React from 'react';
import ReactDOM from 'react-dom';

import TodoList from './components/todo-list';
import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';


const App = () => {
  const toDoData = [
    {label: 'Drink Coffee', important: false, id: 1},
    {label: 'Learn React', important: true, id: 2},
    {label: 'Learn Typescript', important: false, id: 3}, 
  ];
  return (
    <div> 
      <AppHeader />
      <SearchPanel />
      <TodoList todos = {toDoData}/>
    </div>
  )
}


ReactDOM.render(<App />,
    document.getElementById('root'))