

// Isaac Vazquez
// 01-21-15

// global variables
var doggySpas = ["Dog Spa 1", "Dog Spa 2", "Dog Spa 3"];

    minutesPerSpa = [20, 25, 35];
    
var dogNames = ['Odie','Bentley','Kita'];
    
// my functions 

 console.log(dogNames);
	
	dogNames[0] = "Odie";
	dogNames[1] = "Bentley";
	dogNames[2] = "Kita";
	
	
   var visitDogSpa = function(theSpa) {

    var doggySpa = doggySpas[theSpa],
    
        minutesThisSpa = minutesPerSpa[spaNum];
           
	         
      console.log("How many dogs at the spa " + dogNames.length); 
	
        
        
    console.log(dogNames[0, 1, 2] + " went to the " + doggySpa +
        " for " + minutesThisSpa + " minutes. So I set the timer on" +
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

for (var dogNum = 0; dogNum < dogNames.length; dogNum++);    
    

     
     };   
 
