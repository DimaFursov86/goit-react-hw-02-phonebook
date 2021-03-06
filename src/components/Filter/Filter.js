import React from 'react';
import s from './Filter.module.scss';
import PropTypes from 'prop-types';
const Filter = ({ value, onChange }) => (
  <label className={s.filterBox}>
    Find contacts by name
    <input type="text" value={value} onChange={onChange} />
  </label>
);

export default Filter;
Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
