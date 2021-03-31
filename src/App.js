import React from 'react';
import BasketView from './component/basketView';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './component/NavBar';

function App() {
  return (
    <>
      <NavBar />
      <div className="container mt-5">
        <BasketView />
      </div>
    </>
  );
}

export default App;
