import Title from './Title';
import SideList from './SideList';
import Add from './Add';
import './App.css';
import { useState } from 'react';

function App() {
  const lists = ["書籍一覧", "在庫一覧", "在庫カレンダー", "貸出一覧"];
  return (  
    <>
      <header className="App-header">
        <Title />
      </header>
      <div className='App-sidebar'>
        <SideList lists={lists} />
      </div>
      <div className='App-body'>
        <Add />
      </div>
    </>
  );
}

export default App;

