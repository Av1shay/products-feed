import React from 'react';
import './App.css';
import Products from './components/Products';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Products Feed</h1>
      </header>

      <div className="container-fluid mt-4">
        <Products/>
      </div>
      
    </div>
    
  );
}

export default App;
