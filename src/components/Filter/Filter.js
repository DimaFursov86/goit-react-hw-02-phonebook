import React from 'react';
import s from './Filter.module.scss';
const Filter = ({ value, onChange }) => (
  <label className={s.filterBox}>
    Find contacts by name
    <input type="text" value={value} onChange={onChange} />
  </label>
);

export default Filter;
