const yargs = require('yargs');
const notes = require('./notes');

// customize yargs version
yargs.version('yourboy_1.1.0');

// create add command
yargs.command({
  command: 'add',
  describe: 'add a new note. doi.',
  builder: {
    title: {
      describe: "Your note's title",
      demandOption: true,
      type: 'string',
    },
    body: {
      describe: "Your note's body",
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    notes.addNote(argv.title, argv.body);
  },
});

//create remove command
yargs.command({
  command: 'remove',
  describe: 'remove an existing note by title.',
  builder: {
    title: {
      describe: 'Note title to be removed',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    notes.removeNote(argv.title);
  },
});

//create list command
yargs.command({
  command: 'list',
  describe: 'list all notes.',
  handler() {
    notes.listNotes();
  },
});

//create read command
yargs.command({
  command: 'read',
  describe: 'read your own note.',
  handler(argv) {
    notes.readNote(argv.title);
  },
});

yargs.parse();
