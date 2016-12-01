'use strict';

var counterNumbers = 0;

// if (condition is true) {
//   do something;
//   maybe do something more;
//   etc. until done;
// } else {
//   do this other thing;
//   and maybe yet another thing;
// }


var response1 = prompt('Does Sam have any cats?').toLowerCase();


if (response1 === 'yes' || response1 ==='y') {
  alert('Yes, Sam does have three cats!');

  counterNumbers++;

} else if (response1 === 'no' || response1 ==='n') {
  alert('Sorry, you\'re wrong, Sam has three cats');
} else {
  alert('Use either \"yes\" or \"no\"');
}

console.log('The user selected ' + response1 + ' to Sam having cats.');

var response2 = prompt('Should you learn how to code efficiently?').toLowerCase();

if (response2 === 'yes' || response2 ==='y') {
  alert('Yes, it\'s the only way to advance in your career!');

  counterNumbers++;

} else if (response2 === 'no' || response2 ==='n') {
  alert('Sorry, you won\'t get to far if you don\'t.');
} else {
  alert('Use either \"yes\" or \"no\"');
}

console.log('The user selected ' + response2 + ' to the question.');

var response3 = prompt('Does this prompt require a console.log message to appear?').toLowerCase();

if (response3 === 'yes' || response3 ==='y') {
  alert('Yes, because that\'s what the instructions said.');

  counterNumbers++;

} else if (response3 === 'no' || response3 ==='n') {
  alert('Sorry, that would only work if you\'re not trying to get all of the points');
} else {
  alert('Use either \"yes\" or \"no\"');
}

console.log('The user selected ' + response3 + ' to adding a console.log');

var response4 = prompt('Are you allowed to use functions today??').toLowerCase();

if (response4 === 'yes' || response1 ==='y') {
  alert('Sorry, no, not today, until thursday.');
} else if (response4 === 'no' || response4 ==='n') {
  alert('You\'re right, stick to the main goal today!');

  counterNumbers++;

} else {
  alert('Use either \"yes\" or \"no\"');
}

console.log('The user said ' + response4 + ' to using functions today');

var response5 = prompt('Are you supposed to rush through the lab today?').toLowerCase();

if (response5 === 'yes' || response5 ==='y') {
  alert('No, it\'s better to take your time to learn this stuff.');
} else if (response5 === 'no' || response5 ==='n') {
  alert('Good, you\'ll be a badass coder soon!');

  counterNumbers++;

} else {
  alert('Use either \"yes\" or \"no\"');
}

console.log('The user selected ' + response5 + ' to rushing the lab today.')

// As a developer, I want to add a sixth question to my guessing game that takes numeric input by prompting a user to guess a number (for instance, "What is my favorite number?" or "How many Pokémon did I catch yesterday?"), and indicates to the user whether the guess is 'too high' or 'too low', and gives the user exactly four opportunities to get the correct answer, so that my fancy programming skills are showcased.

var age = 26;

while (age !== 26);
for (var i = 0; i < 4; i++) {
  var yourGuess = (parseInt(prompt('What is your guess for Jay\'s age?')));

  if (yourGuess === age) {
    alert('You got it right!! Jay is' + age + '!');
    break;
  }
  else if (yourGuess > 26) {
    alert('Try to guess lower!');
  }
  else if (yourGuess < 26) {
    alert('Try to guess higher!')
  }
}


var counter = 0;
var gotCityRight = false;
var placesLived = ['denver, seattle, miami, chicago, los angeles, san diego, honolulu'];


    while(counter < 6){

  yourCityGuess = prompt('Guess a city that Jay has lived in? You have 6 tries!').toLowerCase();{
  for (var j = 0; j < placesLived.length; j++) {


    console.log(yourCityGuess);

    if(yourCityGuess === placesLived[j]) {
      gotCityRight = true;
      break;
    }
  if(gotCityRight) {
      alert ('yes! you gussed ' + yourCityGuess + ', which is one of the places Jay has lived!!');
      alert ('He has lived in denver, seattle, miami, chicago, los angeles, san diego, and honolulu!')

    } else{
//       alert ('Jay has never lived in ' + yourCityGuess + ' try again!');
//     }
//       console.log(counter);
//       counter++;
//     }
//   }
//
//
//
//   var counterNumbers = alert('nice job you got ' + counterNumbers + ' out of 7!');
//   console.log('User got ' + counterNumbers + ' questions right');
