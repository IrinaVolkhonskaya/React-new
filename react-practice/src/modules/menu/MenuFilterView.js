import React from 'react';
import s from './MenuFilter.module.css';

const MenuFilterView = ({ value = '', onChange = () => null}) => (
  <input
    className={s.filter}
    value={value}
    onChange={e => {
console.log(value)
console.log(e.target.value)
return onChange(e.target.value)
    }}
    type="text"
    placeholder="Поиск блюда..."
  />
);

export default MenuFilterView;
