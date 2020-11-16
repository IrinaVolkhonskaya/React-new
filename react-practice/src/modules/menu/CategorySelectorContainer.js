import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actions, menuOperations } from '../../redux';
import * as selectors from '../../redux/selectors';
import s from './CategorySelector.module.css';

export default function CategorySelectorContainer({ currentName }) {
  const dispatch = useDispatch();
  const getAllCategories = () => dispatch(menuOperations.getAllCategories());

  const categoryNames = useSelector(selectors.getCategoryNames); //["soup", "dessert", "salad", "main course"]
  const onChangeCategory = currentName =>
    dispatch(actions.selectCategory(currentName));

  useEffect(() => {
    getAllCategories();
  }, []);

  return (
    <select
      className={s.select}
      value={currentName}
      onChange={e => onChangeCategory(e.target.value)}
    >
      {categoryNames.map(name => (
        <option key={name} value={name}>
          {name}
        </option>
      ))}
    </select>
  );
}

// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import CategorySelectorView from './CategorySelectorView';
// import { actions, menuOperations } from '../../redux';
// import * as selectors from '../../redux/selectors';

// class CategorySelectorContainer extends Component {
//   componentDidMount() {
//     this.props.getAllCategories();
//   }

//   render() {
//     return <CategorySelectorView {...this.props} />;
//   }
// }

// const mapState = state => ({
//   categoryNames: selectors.getCategoryNames(state), //["soup", "dessert", "salad", "main course"]
// });

// const mapDispatch = {
//   getAllCategories: menuOperations.getAllCategories,
//   onChangeCategory: actions.selectCategory,
// };

// export default connect(mapState, mapDispatch)(CategorySelectorContainer);
