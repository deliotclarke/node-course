// const square = function (x) {
//   return x * x;
// };

const square = (x) => x * x;

console.log(square(3));

const event = {
  name: 'Birthday Party',
  guestList: ['Andrew', 'Jen', 'Mike'],
  printGuestList() {
    console.log(`Guestlist for ${this.name}:`);
    this.guestList.forEach((guest) => console.log(guest + ' -> ' + this.name));
  },
};

event.printGuestList();
