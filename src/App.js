import React from 'react';
import AddBookForm from './components/AddBookForm';
import BookList from './components/BookList';
import NavBar from './components/NavBar';
import BookContextProvider from './contexts/BookContext';

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <NavBar />
        <BookList />
        <AddBookForm />
      </BookContextProvider>
    </div>
  );
}

export default App;
