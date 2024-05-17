
Bubble Exercise

This project is a simple interactive animation created with p5.js where users can generate bubbles and rectangles on the canvas by clicking and pressing keys. The bubbles move randomly, and the rectangles are created or reset when the spacebar is pressed.

Features
Click on the canvas to create bubbles at the mouse position with a random size.
Press the spacebar to create a rectangle at the mouse position with random width and height, or reset the rectangle if it already exists.
Getting Started
Prerequisites
To run this project, you need a web browser and an internet connection to load the p5.js library.

Installation
Clone this repository to your local machine:

bash

git clone https://github.com/Rmcd20/BubbleExercise.git

Navigate to the project directory:

bash

cd BubbleExercise
Open index.html in your preferred web browser.


File Structure
index.html - The main HTML file that includes p5.js and your scripts.
src/function.js - The script file containing the main logic for creating and displaying bubbles and rectangles.
src/objects/classBubble.js - The script file defining the Bubble class.
src/jquery.js - (If used) jQuery library for additional functionality (currently not used in provided code).



Usage
Creating Bubbles: Click anywhere on the canvas to create a bubble at the mouse position with a random radius.
Creating/Resetting Rectangles: Press the spacebar to create a rectangle at the mouse position with random width and height. If a rectangle already exists, pressing the spacebar again will reset its dimensions to zero, allowing a new rectangle to be created.
Code Explanation



Main Functions
setup(): Sets up the canvas.
mousePressed(): Creates a new bubble at the mouse position.
draw(): Continuously updates the canvas, displaying and moving bubbles and the rectangle if it exists.
keyPressed(): Handles the spacebar press to create or reset the rectangle.


Classes
Bubble: Defines the properties and methods for bubble objects, including movement and display.


Example Code:

Creating a Bubble
Javascript

let bubbles = [];

function mousePressed() {
  let r = random(10, 50);
  let b = new Bubble(mouseX, mouseY, r);
  bubbles.push(b);
}
Bubble Class
javascript

class Bubble {
    constructor(x, y, r) {
        this._x = x;
        this._y = y;
        this._r = r;
    }
    
    move() {
        this._x += random(-5, 5);
        this._y += random(-5, 5);
    }

    show() {
        stroke(255);
        strokeWeight(4);
        noFill();
        ellipse(this._x, this._y, this._r * 2);
    }
}

-------------------------------------------------------------------------------

Contributing
Contributions are welcome! Please fork this repository and submit pull requests to add features, fix bugs, or improve documentation.

License
This project is licensed under the MIT License. See the LICENSE file for details.

Contact
If you have any questions or suggestions, feel free to open an issue or contact me at whoamird@service.com
