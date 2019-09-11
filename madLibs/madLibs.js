// <!-- Problem: Need to get values from user in order to create a Mad Lib -->
//   <!-- -->
// <!-- Step 1: User enters the information and clicks the button -->
$(document).ready(function() {
    function makeMadLib(){
        var noun = $("#noun").val();
        var adjective = $("#adjective").val();
        var personName = $("#person").val();
        $("#story").append("<p>" + personName + " really likes " + adjective + " " + noun + "</p>");

        var userObject = {};
        // creating a variaable and setting it equal to an empty object . variable + the key we are looking for and then set it to the value a variable (that the user put it). Key and value assigning it will often be the same name. creates the key inside of the user object, the key will be the same but the value of the variable will be different 
        userObject.noun = noun;
        userObject.adjective = adjective;
        userObject.person = personName;
        console.log(userObject);
        // creating a key value pair inside of an object
    }
    // event listener to execute makeMadLib function,
    // recommended to declare all the functions in JS first and the do the event listener because the job of the listener if to execute the function
    $("#lib-button").on("click", function(){
        makeMadLib();
    }); //closes the .on for the event
}); //closes the document.ready

// <!-- Step 2: Create an event listener to be listening on the button, so that when the user clicks it, we can execute a callback function - jQuery, use .on() for click event   --> 

// <!-- Step 3: create a function that has three variables, one for each of the words the user types in. Each of those variables will have the value of what the user typed in. - use jQuery .val() method -->
// <!-- Step 4: Display the data in a sentence to the user- jQuery.append() to the div in the HTML -->
// Step 5: create a variable and initalize it/set it equal to empty curly brackets. Add the 3 key value pairs with dot notation. 