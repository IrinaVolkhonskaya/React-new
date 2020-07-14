import React from 'react';

//пример как через ребенка менять state родителя(см.еще App)
const MessageUpdater = ({ changeMessage }) => (
	<button onClick={changeMessage}>change message</button>
);

export default MessageUpdater;
