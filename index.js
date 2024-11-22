//importing class
import { linkedlist } from './linkedList.js';

// example uses class syntax - adjust as necessary (enjoy!)
const list = new linkedlist();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");
list.preAppend("Human");


console.log(list);

console.log(list.heads());

console.log(list.tails());

console.log(list.sizes());

console.log(`At: ${list.at(2)}`);

console.log(`find: ${list.find("Human")}`);


console.log(list.contains("dog"));

console.log(list.toString());