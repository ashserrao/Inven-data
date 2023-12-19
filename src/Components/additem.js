import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { additem } from '../redux/actions';

import './additem.css';

function Additem() {
  const [ign, setIgn] = useState('');
  const [dsc, setDsc] = useState('');
  const [imgurl, setImgurl] = useState('');
  const [qty, setQty] = useState('');
  const [mfd, setMfd] = useState('');
  const [att, setAtt] = useState('');
  const [opt, setOpt] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = () => {
    const item = { ign, dsc, imgurl, qty, mfd, att, opt };
    dispatch(additem(item));
    setIgn('');
    setDsc('');
    setImgurl('');
    setQty('');
    setMfd('');
    setAtt('');
    setOpt('');
  };

  return (
    <div>
      <h1>Add Item</h1>
      <label>
        Item Group Name:
        <input
          type="text"
          value={ign}
          onChange={(e) => setIgn(e.target.value)}
        />
      </label>
      <label>
        Description:
        <textarea
          type="text"
          value={dsc}
          onChange={(e) => setDsc(e.target.value)}
        />
      </label>
      <label>
        Image URL:
        <input
          type="text"
          value={imgurl}
          onChange={(e) => setImgurl(e.target.value)}
        />
      </label>
      <label>
        Units:
        <select value={qty} onChange={(e) => setQty(e.target.value)}>
          <option value="">Select Qty</option>
          <option value="pcs">Pcs</option>
          <option value="boxes">Boxes</option>
          <option value="dozens">Dozens</option>
        </select>
      </label>
      <label>
        Manufacturer:
        <input
          type="text"
          value={mfd}
          onChange={(e) => setMfd(e.target.value)}
        />
      </label>
      <label>
        Attributes:
        <select value={att} onChange={(e) => setAtt(e.target.value)}>
          <option value="">Select Qty</option>
          <option value="RAM">RAM</option>
          <option value="Processor">Processor</option>
          <option value="Disk">Disk</option>
        </select>
      </label>
      <label>
        Options:
        <input
          type="text"
          value={opt}
          onChange={(e) => setOpt(e.target.value)}
        />
      </label>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Additem;
