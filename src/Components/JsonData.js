import React, { useState } from 'react';
import jsonData from '../sample.json';

const DisplayData = () => {
  const [searchAttribute, setSearchAttribute] = useState('');
  const [searchOption, setSearchOption] = useState('');

  const filteredData = jsonData.filter(
    (item) =>
      item.Attribute.toLowerCase().includes(searchAttribute.toLowerCase()) &&
      item.Option.toLowerCase().includes(searchOption.toLowerCase())
  );

  return (
    <div>
      <h2>Filter or Search Function</h2>
      <div>
        <input
          type="text"
          placeholder="Search by Attribute"
          value={searchAttribute}
          onChange={(e) => setSearchAttribute(e.target.value)}
        />
        <input
          type="text"
          placeholder="Search by Option"
          value={searchOption}
          onChange={(e) => setSearchOption(e.target.value)}
        />
      </div>
      <table>
        <thead>
          <tr>
            <th>Index</th>
            <th>Attribute</th>
            <th>Option</th>
            <th>Item Name</th>
            <th>SKU</th>
            <th>Cost Price</th>
            <th>Selling Price</th>
            <th>Reorder Point</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item) => (
            <tr key={item.Index}>
              <td>{item.Index}</td>
              <td>{item.Attribute}</td>
              <td>{item.Option}</td>
              <td>{item['Item Name']}</td>
              <td>{item.SKU}</td>
              <td>{item['Cost Price']}</td>
              <td>{item['Selling Price']}</td>
              <td>{item['Reorder Point']}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DisplayData;
