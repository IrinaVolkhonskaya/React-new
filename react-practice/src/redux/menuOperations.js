import axios from 'axios';
import actions from './actions';

const fetchMenu = () => async dispatch => {
  dispatch(actions.fetchMenuRequest);

  try {
    const response = await axios.get('http://localhost:3000/menu');
    dispatch(actions.fetchMenuSuccess(response.data));
  } catch (error) {
    dispatch(actions.fetchMenuError(error));
  }
};

export default { fetchMenu };
