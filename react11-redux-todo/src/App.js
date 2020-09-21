import React from 'react';
import AppHeader from './components/AppHeader/AppHeader';
import NoteEditor from './components/NoteEditor'; //NoteEditorContainer' (чтобы его не писать в папке NoteEditor создали index.js, где указан дефолтный экспорт, Webpack зайдя в папку юудет искать этт файл)
import NoteList from './components/NoteList';// /NoteListContainer (чтобы его не писать в папке NoteList создали index.js, где указан дефолтный экспорт, Webpack зайдя в папку юудет искать этт файл)


const App = () => (
<>
<AppHeader />
<NoteEditor />
<NoteList />
</>
);

export default App;
