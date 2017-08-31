$(document).ready(function(){

//Set Q&A Objects

var Q1 = {
    q: "Which of these fashion choices are a no-no for dark lords?",
    ra: "Something bright and cheery",
    a1: "Dark colors",
    a2: "Lots of spikes and pointy angles",
    a3: "Face-concealing headgear",
}

var Q2 = {
    q: "You're finally facing down the hero. Game plan?",
    ra: "All of these are great plans",
    a1: "When the hero thinks they've won, reveal a monstrous final form",
    a2: "Reveal something shocking to distract them",
    a3: "Wear spikier armor and weild a dark legendary weapon",
}

var Q3 = {
    q: "Where should you practice your monologue?",
    ra: "Alone, in front of your rubber duck",
    a1: "Practice? Monologues should be extemporaneous!",
    a2: "Monologues are for dweebs",
    a3: "At your local Toastmasters club",
}

var Q4 = {
    q: "Which one of these makes for a decent lair?",
    ra: "Somewhere devoid of nature and sunlight",
    a1: "The suburbs",
    a2: "A small, humble village",
    a3: "Wherever you can save on rent",
}

var Q5 = {
    q: "Which isn't a good reason to take over/destroy the world?",
    ra: "Nothing good on TV",
    a1: "You're evil",
    a2: "Your personal philosophy demands that you end all suffering by ending all life",
    a3: "You're power-hungry/want to be worshipped",
}

//Global Variables

var rightAnswer = 0;
var wrongAnswer = 0;
var unanswered = 0;
var intervalSet;
var timeOutSet;

//START State

//Title page: Hides timer and all content
$("#time-div, #content-div").hide();

$("#start-button").on("click", function() {
    $("#start-button").hide();    
    $("#time-div, #content-div").show();
    

    var time = 15;
    var count = setInterval(countDown,1000);
    
    function countDown(){
       time--;
       if(time == 0){
          clearInterval(count);
       } 
       $("#time-div").html("<span>Time Remaining: " + time);
    }


//QUIZ State


//QUESTION 1
    if ($("#answer-div").length > 0){
    //Display Questions
    $("#answer-div").html("<p>" + Q1.q + "<p id = 'ra'>" + Q1.ra + "<p>" + Q1.a1 + "<p>" + Q1.a2 + "<p>" + Q1.a3);
    
    //If Out of Time, Display Time Out Page
    timeOutSet = setTimeout(function() {
        unanswered += 1;
        $("#answer-div").remove();
        $("#response-div").html("<p> Times Up! The correct answer was: " + Q1.ra + "</p> <img src='assets/images/wa-lord-business.gif'>");
        intervalSet = setInterval(function(){
            clearInterval(intervalSet);
            $("#content-div").html("<div id = 'answer-div-2'></div> <div id = 'response-div-2'></div>");
            $("#start-button").trigger("click");
        }, 5000);
    }, 15000);

    //If Right, Display Right Page
    $("#ra").on("click", function() {
        rightAnswer += 1;
        $("#answer-div").remove();
        $("#response-div").html("<p> Excellent! </p> <img src='assets/images/ra-lord-business.gif'>");
        clearInterval(count);
        clearTimeout(timeOutSet);
        
        intervalSet = setInterval(function(){
            clearInterval(intervalSet);
            $("#content-div").html("<div id = 'answer-div-2'></div> <div id = 'response-div-2'></div>");
            $("#start-button").trigger("click");
        }, 5000);
    })
    
    //If Wrong, Display Wrong Page
    $("#answer-div p").not("#ra").on("click", function(){
        wrongAnswer += 1;
        $("#answer-div").remove();
        $("#response-div").html("<p> Wrong! The correct answer was: " + Q1.ra + "</p><img src='assets/images/wa-lord-business.gif'>");
        clearInterval(count);
        clearTimeout(timeOutSet);
        
        intervalSet = setInterval(function(){
            clearInterval(intervalSet);
            $("#content-div").html("<div id = 'answer-div-2'></div> <div id = 'response-div-2'></div>");
            $("#start-button").trigger("click");
        }, 5000);
    });

} //End answer-div "If" statement




//QUESTION 2
if ($("#answer-div-2").length > 0){
    //Display Questions
    $("#answer-div-2").html("<p>" + Q2.q + "<p>" + Q2.a1 + "<p>" + Q2.a2 + "<p id = 'ra-2'>" + Q2.ra + "<p>" + Q2.a3);
    
    //If Out of Time, Display Time Out Page
    timeOutSet = setTimeout(function() {
        unanswered += 1;
        $("#answer-div-2").remove();
        $("#response-div-2").html("<p> Times Up! The correct answer was: " + Q2.ra + "</p><img src='assets/images/wa-maleficent.gif'>");
        intervalSet = setInterval(function(){
            clearInterval(intervalSet);
            $("#content-div").html("<div id = 'answer-div-3'></div> <div id = 'response-div-3'></div>");
            $("#start-button").trigger("click");
        }, 5000);
    }, 15000);

    //If Right, Display Right Page
    $("#ra-2").on("click", function() {
        rightAnswer += 1;
        $("#answer-div-2").remove();
        $("#response-div-2").html("<p> Excellent! </p> <img src='assets/images/ra-maleficent-2.gif'>");
        clearInterval(count);
        clearTimeout(timeOutSet);
        
        intervalSet = setInterval(function(){
            clearInterval(intervalSet);
            $("#content-div").html("<div id = 'answer-div-3'></div> <div id = 'response-div-3'></div>");
            $("#start-button").trigger("click");
        }, 5000);
    })
    
    //If Wrong, Display Wrong Page
    $("#answer-div-2 p").not("#ra-2").on("click", function(){
        wrongAnswer += 1;
        $("#answer-div-2").remove();
        $("#response-div-2").html("<p> Wrong! The correct answer was: " + Q2.ra + "</p><img src='assets/images/wa-maleficent.gif'>");
        clearInterval(count);
        clearTimeout(timeOutSet);
        
        intervalSet = setInterval(function(){
            clearInterval(intervalSet);
            $("#content-div").html("<div id = 'answer-div-3'></div> <div id = 'response-div-3'></div>");
            $("#start-button").trigger("click");
        }, 5000);
    });

} //End answer-div-2 "If" statement




//QUESTION 3
if ($("#answer-div-3").length > 0){
    //Display Questions
    $("#answer-div-3").html("<p>" + Q3.q + "<p>" + Q3.a1 + "<p>" + Q3.a2 + "<p id = 'ra-3'>" + Q3.ra + "<p>" + Q3.a3);
    
    //If Out of Time, Display Time Out Page
    timeOutSet = setTimeout(function() {
        unanswered += 1;
        $("#answer-div-3").remove();
        $("#response-div-3").html("<p> Times Up! The correct answer was: " + Q3.ra + "</p><img src='assets/images/wa-darth-vader.gif'>");
        intervalSet = setInterval(function(){
            clearInterval(intervalSet);
            $("#content-div").html("<div id = 'answer-div-4'></div> <div id = 'response-div-4'></div>");
            $("#start-button").trigger("click");
        }, 5000);
    }, 15000);

    //If Right, Display Right Page
    $("#ra-3").on("click", function() {
        rightAnswer += 1;
        $("#answer-div-3").remove();
        $("#response-div-3").html("<p> Excellent! </p> <img src='assets/images/ra-darth-vader.gif'>");
        clearInterval(count);
        clearTimeout(timeOutSet);
        
        intervalSet = setInterval(function(){
            clearInterval(intervalSet);
            $("#content-div").html("<div id = 'answer-div-4'></div> <div id = 'response-div-4'></div>");
            $("#start-button").trigger("click");
        }, 5000);
    })
    
    //If Wrong, Display Wrong Page
    $("#answer-div-3 p").not("#ra-3").on("click", function(){
        wrongAnswer += 1;
        $("#answer-div-3").remove();
        $("#response-div-3").html("<p> Wrong! The correct answer was: " + Q3.ra + "</p><img src='assets/images/wa-darth-vader.gif'>");
        clearInterval(count);
        clearTimeout(timeOutSet);
        
        intervalSet = setInterval(function(){
            clearInterval(intervalSet);
            $("#content-div").html("<div id = 'answer-div-4'></div> <div id = 'response-div-4'></div>");
            $("#start-button").trigger("click");
        }, 5000);
    });

    } //End answer-div-3 "If" statement



    

//QUESTION 4

if ($("#answer-div-4").length > 0){
    //Display Questions
    $("#answer-div-4").html("<p>" + Q4.q + "<p>" + Q4.a1 + "<p id = 'ra-4'>" + Q4.ra + "<p>" + Q4.a2 + "<p>" + Q4.a3);
    
    //If Out of Time, Display Time Out Page
    timeOutSet = setTimeout(function() {
        unanswered += 1;
        $("#answer-div-4").remove();
        $("#response-div-4").html("<p> Times Up! The correct answer was: " + Q4.ra + "</p><img src='assets/images/wa-ganondorf.gif'>");
        intervalSet = setInterval(function(){
            clearInterval(intervalSet);
            $("#content-div").html("<div id = 'answer-div-5'></div> <div id = 'response-div-5'></div>");
            $("#start-button").trigger("click");
        }, 5000);
    }, 15000);

    //If Right, Display Right Page
    $("#ra-4").on("click", function() {
        rightAnswer += 1;
        $("#answer-div-4").remove();
        $("#response-div-4").html("<p> Excellent! </p> <img src='assets/images/ra-emporer.gif'>");
        clearInterval(count);
        clearTimeout(timeOutSet);
        
        intervalSet = setInterval(function(){
            clearInterval(intervalSet);
            $("#content-div").html("<div id = 'answer-div-5'></div> <div id = 'response-div-5'></div>");
            $("#start-button").trigger("click");
        }, 5000);
    })
    
    //If Wrong, Display Wrong Page
    $("#answer-div-4 p").not("#ra-4").on("click", function(){
        wrongAnswer += 1;
        $("#answer-div-4").remove();
        $("#response-div-4").html("<p> Wrong! The correct answer was: " + Q4.ra + "</p><img src='assets/images/wa-ganondorf.gif'>");
        clearInterval(count);
        clearTimeout(timeOutSet);
        
        intervalSet = setInterval(function(){
            clearInterval(intervalSet);
            $("#content-div").html("<div id = 'answer-div-5'></div> <div id = 'response-div-5'></div>");
            $("#start-button").trigger("click");
        }, 5000);
    });

    } //End answer-div-4 "If" statement



//QUESTION 5

if ($("#answer-div-5").length > 0){
    //Display Questions
    $("#answer-div-5").html("<p>" + Q5.q + "<p>" + Q5.a1 + "<p>" + Q5.a3 + "<p>" + Q5.a2 + "<p id = 'ra-5'>" + Q5.ra);
    
    //If Out of Time, Display Time Out Page
    timeOutSet = setTimeout(function() {
        unanswered += 1;
        $("#answer-div-5").remove();
        $("#response-div-5").html("<p> Times Up! The correct answer was: " + Q5.ra + "</p><img src='assets/images/wa-sauron.gif'>");
        intervalSet = setInterval(function(){
            clearInterval(intervalSet);
            $("#content-div").html("<div id = 'results'></div>");
            $("#start-button").trigger("click");
        }, 5000);
    }, 15000);

    //If Right, Display Right Page
    $("#ra-5").on("click", function() {
        rightAnswer += 1;
        $("#answer-div-5").remove();
        $("#response-div-5").html("<p> Excellent! </p> <img src='assets/images/ra-voldemort-2.gif'>");
        clearInterval(count);
        clearTimeout(timeOutSet);
        
        intervalSet = setInterval(function(){
            clearInterval(intervalSet);
            $("#content-div").html("<div id = 'results'></div>");
            $("#start-button").trigger("click");
        }, 5000);
    })
    
    //If Wrong, Display Wrong Page
    $("#answer-div-5 p").not("#ra-5").on("click", function(){
        wrongAnswer += 1;
        $("#answer-div-5").remove();
        $("#response-div-5").html("<p> Wrong! The correct answer was: " + Q5.ra + "</p><img src='assets/images/wa-sauron.gif'>");
        clearInterval(count);
        clearTimeout(timeOutSet);
        
        intervalSet = setInterval(function(){
            clearInterval(intervalSet);
            $("#content-div").html("<div id = 'results'></div>");
            $("#start-button").trigger("click");
        }, 5000);
    });

    } //End answer-div-5 "If" statement


//RESULTS Page

if ($("#results").length > 0) {

    //Clear Timer
    clearTimeout(timeOutSet);

    //Display Quiz Results
    $("#results").html("<p> Right Answers: " + rightAnswer + "<p> Wrong Answers: " + wrongAnswer + "<p> Unanswered: " + unanswered);
}

/*
var rightAnswer = 0;
var wrongAnswer = 0;
var unanswered = 0;
*/



}); //End Start Button onClick



}); //End Document Ready Function

//Make the answers clickable
    //Each answer is a paragraph
    //**Make hover hightlight effect for each answer**

//When clicked, IF right answer:
    //Record right answer
    //transition to "right" screen
    //And show positive gif
    //After 3 seconds, switch to next question

//IF wrong answer:
    //Record wrong answer
    //transition to "wrong" screen
    //And show negative gif
    //After 3 seconds, switch to next question

//IF out of time:
    //Record unanswered
    //transition to "out of time" screen
    //And show negative gif
    //After 3 seconds, switch to next question


//END State

    //Timer can still be visible, but is no longer ticking down
    //Write "All done, here's how you did!"
    //Correct Answers:
    //Incorrect Answers:
    //Unanswered:
    //Start Over? (button)
        //When clicked, does NOT reload page


//$("#content-div p").html(Q2.q + "<br>" + Q2.a1 + "<br>" + Q2.a2 + "<br>" + Q2.a3 + "<br>" + Q2.a4);

//if () {
    
//}


    //Create a trivia game object
    //Shows only one question and four choices
    //Shows time remaining
    //Question shows until the player answers it or time runs out

    //If player selects correct answer:
    //Show a screen congratulating them. 
    //After a few seconds, display the next question (without user input)

    //If player selects wrong answer:
    //Tell them they selected wrong option and display correct answer.
    //Wait a few seconds, then show the next question

    //If runs out of time:
    //Tell them that time's up and display the correct answer.
    //Wait a few seconds, then show the next question

    //On final screen:
    //Show number of correct answers, incorrect answers, and an option to restart the game (without reloading the page)







/*
The Evil Overlord Assessment Test

1) 
2)
3)
4)
5)

*/