// Function to play sound based on the key
function makeSound(key) {
    switch (key) {
        
        // If the key is "q", create an audio element with the sound file "tom-1.mp3" and play it
        case "q":
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
        
        case "w":
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
            break;
        
        case "e":
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
            break;
        
        case "r":
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
            break;
        
        case "t":
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
            break;
        
        case "y":
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
            break;
        
        case "u":
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;
    }
}

// Function to animate the button
function buttonAnimate(currentKey) {
    // Find the element with the matching class name and add the "pressed" class to it
    document.querySelector("." + currentKey).classList.add("pressed");

    // Remove the "pressed" class after 100 milliseconds using a timeout function
    setTimeout(function() {
        document.querySelector("." + currentKey).classList.remove("pressed");
    }, 100);
}

// Add click event listeners to all buttons
for (var i = 0; i < document.querySelectorAll("button").length; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function() {
        // Get the innerHTML of the clicked button
        var buttonInnerHTML = this.innerHTML;

        // Call the makeSound function with the innerHTML of the clicked button
        makeSound(buttonInnerHTML);

        // Call the buttonAnimate function with the innerHTML of the clicked button
        buttonAnimate(buttonInnerHTML);
    });
}

// Add keydown event listener to the document
document.addEventListener("keydown", function(event) {
    // Call the makeSound function with the key of the event
    makeSound(event.key);

    // Call the buttonAnimate function with the key of the event
    buttonAnimate(event.key);
});