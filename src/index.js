import React from 'react';
import ReactDOM from 'react-dom';


const TodoList = () => {
  const items = ['Learn React', 'Learn Typescript', 'Build App']
  return (
    <ul>
      <li>{items[0]}</li>
      <li>{items[1]}</li>
      <li>{items[2]}</li>
    </ul>
  )
};

const AppHeader = () => {
  return <h1>My Todo List</h1> }

const SearchPanel = () => {
  return <input placeholder='search here...' /> }

const App = () => {
/*   const loginBox = <span>Log in please</span>
  const welcomBox = <span>Welcom Back</span>
  const isLogIn = true */
  return (
    <div>
      {/* <span>{(new Date()).toString()}</span> */}
      {/* isLogIn? welcomBox: loginBox */}
      <AppHeader />
      <SearchPanel />
      <TodoList />
    </div>
  )
}


ReactDOM.render(<App />,
    document.getElementById('root'))