import shortid from "shortid";
import types from "./noteActionTypes";

const toggleSuccess = (id) => ({
  type: types.TOGGLE_COMPLETED_SUCCESS,
  payload: id,
});

const changeFilter = (filter) => ({
  type: types.CHANGE_FILTER,
  payload: filter,
});

const fetchRequest = () => ({
  type: types.FETCH_REQUEST,
});

const fetchSuccess = notes => ({
  type: types.FETCH_SUCCESS,
  payload: notes,
});

const addNoteSuccess = note => ({
  type: types.ADD_SUCCESS,
  payload: note,
})

const deleteNoteSuccess = id => ({
  type: types.DELETE_SUCCESS,
  payload: id,
})

const fetchError = error => ({
  type: types.FETCH_ERROR,
  payload: error,
});

export default { addNoteSuccess, deleteNoteSuccess, toggleSuccess, changeFilter, fetchRequest, fetchSuccess, fetchError};
