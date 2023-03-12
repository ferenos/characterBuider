import * as console from './extensions/consoleExtensions'

console.log("Started Module")

Hooks.on("init", () => {
    console.log("I've ran the init hook")
})

Hooks.on("ready", () => {
    console.log("This code runs once core initialization is ready and game data is available.");
  });