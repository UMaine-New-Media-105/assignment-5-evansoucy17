[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/pJv4oXRo)



Bubble Jittering Animation- https://editor.p5js.org/evansoucy17/sketches/q7r-y1s5b

I created a line of code that creates an animation of bubbles that move around the canvas in a jittering motion. Each bubble is represented by a Bubble object, which has properties for its x and y positions and its radius. It starts by creating an empty array bubbles that will hold all of the Bubble objects. The I defined the bubbles x, y positions, radius, and color. The class has methods for moving the bubble, updating its position, and drawing it on the canvas. In the setup function, a canvas is created, and a loop adds a random number of bubbles to the bubbles array with random positions and radii.
In the draw function, the background is set to black, and each bubble in the bubbles array is updated and then drawn on the canvas. The update method causes each bubble to move in a jittering motion, and the show method draws it on the canvas. The checkEdges method ensures that each bubble stays within the canvas by wrapping it around to the opposite edge if it goes off the edge.


Bubble Simulation- https://editor.p5js.org/evansoucy17/sketches/qTLoUEofD

I used the code from the previous sketch to create this one. I modified it slightly so that the number of bubbles increased compared to the last line of code. Other than that most everything else is very similar. The bubbles are randomly distributed across the canvas and when they reach the edge it gets wrapped around to the other side. I also used an array, a loop, and a Bubble object like the one I created for Question 1.


 Populate your sim game- https://editor.p5js.org/evansoucy17/sketches/gmjfKILoX
 
 I started by creating a cloud sprite, turning it into a class and then adding it into the copy of my code from question 2. I think took the fucntion I created for my frog sprite and turned it into a class. I did the same thing with my fly sprite. I then combine the lines of code so they are in the game. I did however had a difficult time with the scale of my sprites and something I need to adress before question 4. 

 Activate breeders- https://editor.p5js.org/evansoucy17/sketches/VuuyhtDb1
 
 For this project I created a line of code that animated my breeders so they start at a random position and speed at the left edge of the screen, switching direction when they hit a canvas edge. I had a difficult time getting this to work becuase I had to scale my sprites becuase they were too big. So I had to go in and change my sprite size so the scale wouldn't effect the rest of my code. 
 
 
 Activate catchers- https://editor.p5js.org/evansoucy17/sketches/JdYNW9ynG
 
 For this assignment I created a line of code that animated my catchers so they will start at a random position and speed at the right edge of the screen, switching direction when they hit a canvas edge. I alsop added collision detection between a catcher and a breeder, and remove the breeder from the simulation. I struggled a bit with this code becuase whenever I added in the necessary code it would crash and I would have to start all my work over again. 
