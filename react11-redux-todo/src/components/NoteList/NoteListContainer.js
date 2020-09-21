import { connect } from "react-redux";
import NoteList from "./NoteList";
// import {getItems} from '../../modules/notes/notesSelectors';
// import { deleteNote } from '../../modules/notes/notesActions';
import { notesActions, notesSelectors } from '../../modules/notes'; // вместо двух импортов выше, пишет как в этой строке

const mapStateToProps = (state) => ({
  notes: notesSelectors.getVisibleNotes(state), //(компоненты не должны знать о state) state и его кусочки храним в notesSelectors (селектор получает весь стейт, а возвращает только ту часть, что нужно),
  //сюда просто передаем тот кусочек, что нам нужен. это удобно тем,
  //что если мы меняем что-то в state, то не нужно ходить по всем файлам и менять state,
  //достаточно все поменять в одном файле notesSelector.
});

const mapDispatchToProps = {
  deleteNote: notesActions.deleteNote,
  toggleNote: notesActions.toggleNote,
};

export default connect(mapStateToProps, mapDispatchToProps)(NoteList);
