// DO NOT MODIFY THE say FUNCTION
function say(...name) {
  console.log(`${this.message} ${name}!`);
}

helloMessage = { message: "Hello," };
heyThereMessage = { message: "Hey there," };

let howdyMessage = { message: "Howdy," };

say(helloMessage, "Fred");
say.call(helloMessage, "John", "Ted");

say.apply(heyThereMessage, ["Michael", "Steve"]);

say(howdyMessage, "John");
say.call(howdyMessage, "Jared");
