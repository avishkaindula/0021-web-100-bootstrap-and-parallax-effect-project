const imageElement = document.getElementById("main-image");
new simpleParallax(imageElement, {
  scale: 1.6,
  delay: 0.1,
});
// The above code will activate the parallax effect package.
// We can find these code in the documentation of the simpleParallax.js package.
// "imageElement" is the element we need to add the parallax effect.
// We need to add "new" keyword before simpleParallax(imageElement);
// "new" is another way of creating JS objects based on certain blueprints.
// We can further configure the setting of that parallax effect inside {} as mentioned in the documentation.
// We can also view the source code of the open source projects like this on Github.
