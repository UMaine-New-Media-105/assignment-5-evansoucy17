[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/pJv4oXRo)



Bubble Jittering Animation- https://editor.p5js.org/evansoucy17/sketches/q7r-y1s5b

I created a line of code that creates an animation of bubbles that move around the canvas in a jittering motion. Each bubble is represented by a Bubble object, which has properties for its x and y positions and its radius. It starts by creating an empty array bubbles that will hold all of the Bubble objects.The I defined the bubbles  x, y positions, radius, and color. The class has methods for moving the bubble, updating its position, and drawing it on the canvas.In the setup function, a canvas is created, and a loop adds a random number of bubbles to the bubbles array with random positions and radii.
In the draw function, the background is set to black, and each bubble in the bubbles array is updated and then drawn on the canvas. The update method causes each bubble to move in a jittering motion, and the show method draws it on the canvas. The checkEdges method ensures that each bubble stays within the canvas by wrapping it around to the opposite edge if it goes off the edge.
