import axios from 'axios';
import actions from './actionsMenu';

const fetchMenu = () => async dispatch => {
  dispatch(actions.fetchMenuRequest());

  try {
    const response = await axios.get('http://localhost:3000/menu');
    dispatch(actions.fetchMenuSuccess(response.data));
  } catch (error) {
    dispatch(actions.fetchMenuError(error));
  }
};

export const getAllCategories = () => async dispatch => {
  try {
    const res = await axios.get(`http://localhost:3000/categories`);
    dispatch(actions.selectCategory(res.data));
  } catch (err) {
    console.error(err);
  }
};

export default { fetchMenu, getAllCategories };
