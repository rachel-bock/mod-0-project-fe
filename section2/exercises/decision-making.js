/*
This exercise file is a little different from the others you have seen so far. Read carefully!

Below is a dynamic story that is created based on the value of three variables: doorChoice, bearClothing, bearChoice.
Spend some time changing the variables and running the file to see how the story changes.
*/

var doorChoice = 1;
var bearClothing = "";
var bearChoice = 1;

console.log("You enter a dark room with two doors. Do you go through #1 or #2?");

if (doorChoice === 1) {
  bearClothing = "hat";
} else {
  bearClothing = "scarf";
}

console.log("You see a bear putting on a " + bearClothing);
console.log("It looks like that " + bearClothing + " is too small for the bear, do you...");

console.log("1. Offer your own to the bear?");
console.log("2. Point it out to the bear?");
console.log("3. Make a dash for the next room?");

if (bearChoice === 1) {
  console.log("You offer the bear your " + bearClothing + " and the bear shows you a secret passage out!");
} else if (bearChoice === 2) {
  console.log("You tell the bear the " + bearClothing + " is too small and it starts to cry!");
} else if (bearChoice === 3) {
  console.log("You run as fast as you can into the next room. It's full of snakes!");
} else {
  console.log("You stay with the bear and become it's best friend!");
}

/*
Questions

1. In English, using technical vocabulary, describe what is happening between lines 14 and 18.

Depending on what the doorChoice is, we will either see the bear putting on a hat or a scarf.
If the door choice is strictly equal to one, the bear will put on the hat.
If the door choice is not strictly equal to one, the bear will put on a scarf.

2. What variable has a new value assigned to it after the first if statement executes?

The variable bearClothing is reassigned.  It begins being assigned to the empty string and ends being 
assigned to either the word hat or scarf.

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?

Scarf

4. In English, using technical vocabulary, describe what is happening between lines lines 27 and 35.

If the bearChoice is strictly equal to one, then the bear will show the
visitor a secret passage out.  Otherwise, if the bearChoice is strictly
equal to two, then the bear will start to cry.  Otherwise, if the bearChoice
is strictly equal to 3 then the visitor will try to escape into the other
room that is filled with snakes.  If the bearChoice is any other value,
then the visitor will stay with the bear and become best friends.

5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?

Running as fast as you can into the next room that is full of snakes.

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome?

The bear will wear the hat and will start to cry after being told that the hat is too small.

7. What is your favorite ending?

I like the secret passage out but that leaves the bear alone.  I also
like the staying with the bear and becoming best friends.  I'd say that
becoming best friends is my favorite ending.

*/
