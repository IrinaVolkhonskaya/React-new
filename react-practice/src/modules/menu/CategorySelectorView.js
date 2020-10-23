import React from 'react';
import s from './CategorySelector.module.css';

const CategorySelector = ({ categoryNames, currentName, onChange }) => (
  <select
    className={s.select}
    value={currentName}
    onChange={e => onChange((e.target.value))}
  >
    {categoryNames.map(( name) => (
      <option key={name} value={name}>
        {name}
      </option>
    ))}
  </select>
);

export default CategorySelector;
