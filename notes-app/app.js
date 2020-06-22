const chalk = require('chalk');
const yargs = require('yargs');
const notesUtils = require('./notes');
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
  handler: function (argv) {
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
  handler: function (argv) {
    notes.removeNote(argv.title);
  },
});

//create list command
yargs.command({
  command: 'list',
  describe: 'list all notes.',
  handler: function () {
    console.log('here is a list of notes.');
  },
});

//create read command
yargs.command({
  command: 'read',
  describe: 'read your own note.',
  handler: function () {
    console.log('this is where your note would be if you had one.');
  },
});

yargs.parse();
