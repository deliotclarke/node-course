const fs = require('fs');
const chalk = require('chalk');

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNote = notes.find((note) => note.title === title);

  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log(chalk.greenBright.inverse('Note Added!'));
  } else {
    console.log(chalk.red.inverse('Sorry, Note Title Taken.'));
  }
};

const removeNote = (titleString) => {
  const notes = loadNotes();

  const newNotesList = notes.filter((note) => note.title !== titleString);

  if (newNotesList.length < notes.length) {
    saveNotes(newNotesList);
    console.log(chalk.inverse.greenBright('Note Removed!'));
  } else if (newNotesList.length === notes.length) {
    console.log(chalk.inverse.red.bgWhite('No Note Found!'));
  } else {
    console.log(
      chalk.inverse.redBright('!!') +
        'An Error has Occurred, Contact Tom' +
        chalk.inverse.redBright('!!')
    );
  }
};

const listNotes = () => {
  const notes = loadNotes();
  console.log(chalk.cyan('\nYour Notes:\n'));
  notes.map((note) => console.log(note.title));
};

const readNote = (titleString) => {
  const notes = loadNotes();
  const noteToRead = notes.find((note) => note.title === titleString);

  if (noteToRead) {
    console.log(chalk.cyan(`\n${noteToRead.title}`));
    console.log(`\n${noteToRead.body}`);
  } else {
    console.log(chalk.inverse.bgWhite.red('Sorry! No note found!'));
  }
};

const saveNotes = (notesArr) => {
  const dataJSON = JSON.stringify(notesArr);
  fs.writeFileSync('notes.json', dataJSON);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

module.exports = {
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote,
};
