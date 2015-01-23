

// Isaac Vazquez
// 01-21-15
// Project 3

// Declare variables
var doggySpas = ["Dog Spa bath", "Dog Spa hair trim", "Dog Spa nail trim"];
var minutesPerSpa = [30, 45, 25];
var dogNames = ["Odie","Bentley","Kita"];
var paymentCreditCard = "master card";

    
 
// Array
 console.log(dogNames);
	
	dogNames[0] = "Odie";
	dogNames[1] = "Bentley";
	dogNames[2] = "Kita";
	
	console.log("How many dogs do I have " + dogNames.length);
	console.log("Only dropped off one of my dogs at the " + doggySpas + ".");
	

// Argument: Boolean
var dogSpaOpen = true;

if (dogSpaOpen === true) {
	console.log("Odie will be nice and clean!");
} else {
	console.log("Odie will be dirty and smelly!");
	            
}; 

// Return Boolean
var paymentCreditCard = true;

if (paymentCreditCard === true) {
	console.log("Yes, charge it on my master card.");
} else {
	console.log("No, I don't have cash I will have to stop by atm.");
	
};		       

	
// function	
  var visitDogSpa = function(theSpa) {

    var doggySpa = doggySpas[theSpa],
    
        minutesThisSpa = minutesPerSpa[spaNum];
 
        
             
// for Loop        
    console.log(dogNames[0] + " went to the " + doggySpa +
        " for " + minutesThisSpa + " minutes. So I set the time on" +
        " my iphone.");
      
        
    for (var minutes = 0; minutes < minutesThisSpa; minutes += 5) {
            var minutesRemain = minutesThisSpa - minutes;
            
            console.log("We have " + minutesRemain + " minutes left. " +
                minutes + " minutes have past.");
                
        };
        
         console.log("We finished with the " + doggySpa + "."); 
    
};

  
for (var spaNum = 0; spaNum < doggySpas.length; spaNum++) {
    visitDogSpa(spaNum);
    };
    
    console.log("Odie is ready for pick up.");
        
    
     
// JSON data
var myJSON = function() {

	console.log(jsonData);
    
     
};   
     
   