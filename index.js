// console.log(global.luckyNum);

// console.log("Hello world");
// global.luckyNum = "how's it going?";

// console.log(global.luckyNum);
// global.luckyNum = true;

// console.log(global.luckyNum);

// console.log(process.platform);
// console.log(process.env.NVM_DIR);

// const { EventEmitter } = require('events');
// const eventEmitter = new EventEmitter();

// eventEmitter.on('lunch', () => {
//     console.log('Let\'s go to Sultan!')
// });

// eventEmitter.on('lunch', function() {
//     console.log('Let\'s go to Sultan!')
// });

// eventEmitter.emit('lunch');
// eventEmitter.emit('lunch');

// const { readFile, readFileSync } = require('fs');
// const txt = readFileSync('./hello.txt', 'utf8');
// console.log(txt);

// console.log("Run immediately!");

// readFile('./hello.txt', 'utf8', (err, txt) => {
//     console.log(txt)
// });

// console.log('do this immediately, non blocking!');

//const { readFile } = require('fs').promises;

// hello();
// console.log("Howdy");

// async function hello() {
//     const file = await readFile('./hello.txt', 'utf8');
//     console.log(file);
// }

const myModule = require('./my-module');
console.log(myModule);
console.log(myModule.x + myModule.y);

// //run npm init -y
// //this initializes npm on this project 

//install express with npm install express

// const express = require('express');
// const { readFile } = require('fs');

// const app = express();
// app.get('/', (request, response) => {
//     readFile('./home.html', 'utf8', (err, html) => {
//         if(err){
//             response.status(500).send('Server is down!');
//         }

//         response.send(html);
//     })
// });

// app.listen(process.env.PORT || 3000, () => console.log('App is running on port 3000'));

const express = require('express');
const { readFile } = require('fs').promises;

const app = express();
app.get('/', async (request, response) => { 
    response.send(await readFile('./home.html', 'utf8'));
})

app.listen(process.env.PORT || 3000, () => console.log('App is running on port 3000'))