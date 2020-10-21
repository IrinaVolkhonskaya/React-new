import React from 'react';
import s from './CategorySelector.module.css';


const CategorySelector = ({ options, value, onChange}) => (
  <select className={s.select} value={value} onChange={onChange}>
    {options.map(o => (
      <option key={o} value={o}>
        {o}
      </option>
    ))}
  </select>
);
// const CategorySelector = ({options, value, }) => (
//   <select className={s.select} value={value}>
//     <option>Main course</option>
//     <option>Soup</option>
//   </select>
// );

export default CategorySelector;
