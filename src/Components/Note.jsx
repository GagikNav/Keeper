import React from 'react';
import notesArray from '../notes';
import CreateNoteCard from './CreatNoteCard';

const Note = () => {
	return (
		<div>
			{notesArray.map((e) => (
				<CreateNoteCard key={e.key} title={e.title} content={e.content} />
			))}
		</div>
	);
};

export default Note;
