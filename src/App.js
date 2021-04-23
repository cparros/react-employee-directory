import React from 'react'
import './App.css'
import Header from './components/Header'
import TableHeader from './components/TableHeader'
import FilterButtons from './components/FilterButtons'

function App() {
  return (
    <div className="App">
      <Header />
      <FilterButtons />
      <TableHeader />
    </div>
  );
}

export default App;
