import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './additem.css';

const Display = () => {
  const items = useSelector((state) => state.items);
  return (
    <div>
      <h1>List of Added Items</h1>
      <p>Please add the item first then it will appear in the list</p>
      <table>
        <thead>
          <tr>
            <th>Item Group</th>
            <th>Discription</th>
            <th>Image</th>
            <th>Units</th>
            <th>Manufacturer</th>
            <th>Attributes</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td>{item.ign}</td>
              <td>{item.dsc}</td>
              <td>
                <img src={item.imgurl} />
              </td>
              <td>{item.qty}</td>
              <td>{item.mfd}</td>
              <td>{item.att}</td>
              <td>{item.opt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Display;
