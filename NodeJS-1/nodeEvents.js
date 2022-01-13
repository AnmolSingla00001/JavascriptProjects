console.log("Practicing Node Events");
const EventEmitter = require("events");
const emitter = new EventEmitter();

console.log("Lets Start!");
// Register a Listener
console.log("Setting up the Listener");
emitter.on("Event1", function () {
  console.log("Event Listener Invoked for the Event - Event1");
});
// Raise an event
console.log("Setting up the Event");
emitter.emit("Event1");
