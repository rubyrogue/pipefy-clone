import React from 'react';
import { DndProvider } from 'react-dnd';
import GlobalStyle from './styles/global';
import Header from './components/Header';
import Board from './components/Board';
import { HTML5Backend } from 'react-dnd-html5-backend';

function App() {
  return (
    <>
      <DndProvider backend={HTML5Backend}>
        <Header/>
        <Board/>
        <GlobalStyle/>
      </DndProvider>
    </>
  );
}

export default App;
