console.log('weather boys');

setTimeout(() => {
  console.log('2 second timer');
}, 2000);

setTimeout(() => {
  console.log('0 second timer');
}, 0);

console.log('end of the weather boys');

// really interesting outcome due to setTimeout being a node api function not a part of js and becaue of callback cues!!
