/*

Event Module

Node.js has a built in module, called "Events",
where you can create-, fire-, and listen for- your own events.

Example 1 - Registering for the event to be fired only one time using once
Example 2 - Create an event emitter instance and register a couple of callbacks
Example 3 - Registering for the event with callback parameters

*/

const EventEmitter = require('events');

const event =  new EventEmitter();

event.on('sayMyName', () => {
    console.log("Your name is - Ritik!");
})

event.on('sayMyName', () => {
    console.log("Your name is - Mor!");
})

event.emit('sayMyName');

// The concept is quite simple : emitter objects emit named events that cause previously registered listeners to be called
// So, an emitter object basically has two main features:
// 1) Emitting name events.
// 2) Registering and unregistering listener functions.

event.on("checkpage", (statusCode, msg) => {
    console.log(`Status code is ${statusCode} and the page is ${msg}`);
})

event.emit("checkpage", 200, "ok");