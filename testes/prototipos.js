var Animal = {
    walk: function() {
        console.log("I'm walking...");
    }
};

var Dog = Object.create(Animal);

Animal.walk(); // I'm walking...
Dog.walk(); // I'm walking... 

var Airplane = {
    fly: function() {
        console.log("I'm flying...");
    }
};

//Airplane.walk(); // Uncaught TypeError: Airplane.walk is not a function(…)