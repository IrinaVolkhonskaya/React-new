import axios from "axios";
import actions from "./notesActions";

const fetchNotes = () => async (dispatch) => {
  dispatch(actions.fetchRequest());

  try {
    const response = await axios.get("http://localhost:4040/notes");
    dispatch(actions.fetchSuccess(response.data));
  } catch (error) {
    dispatch(actions.fetchError(error));
  }
};

const addNote = (text) => async (dispatch) => {
  dispatch(actions.fetchRequest());
  try {
    const response = await axios.post("http://localhost:4040/notes", {
      text,
      completed: false,
    });
    dispatch(actions.addNoteSuccess(response.data));
  } catch (error) {
    dispatch(actions.fetchError(error));
  }
};

const deleteNote = (id) => async (dispatch) => {
  dispatch(actions.fetchRequest());
  try {
    const response = await axios.delete(`http://localhost:4040/notes/${id}`);
    dispatch(actions.deleteNoteSuccess(id));
  } catch (error) {
    dispatch(actions.fetchError(error));
  }
};

const toggleNote = (id) => (dispatch) => {
  dispatch(actions.fetchRequest());

  axios
    .patch(`http://localhost:4040/notes/${id}`, { completed: false })
    .then(() => {
      dispatch(actions.toggleSuccess(id));
    })
    .catch((error) => {
      dispatch(actions.fetchError(error));
    });
};

export default { fetchNotes, addNote, deleteNote, toggleNote };
