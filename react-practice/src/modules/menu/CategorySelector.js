import React from 'react';

const styles = {
  select: {
    fontSize: 20,
  },
};

const handleChangeCategory = e => e.target.value;

const CategorySelector = ({ options, value, handleChangeCategory }) => (
  <select style={styles.select} value={value} onChange={handleChangeCategory}>
    {options.map(o => (
      <option key={o} value={o}>
        {o}
      </option>
    ))}
  </select>
);

export default CategorySelector;
