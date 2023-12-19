import React from 'react';
import Additem from './Components/additem';
import Display from './Components/display';
import JsonDisplay from './Components/JsonData';
import './style.css';

export default function App() {
  return (
    <div>
      <h1>Inventory Management</h1>
      <Additem />
      <Display />
      <JsonDisplay />
    </div>
  );
}
