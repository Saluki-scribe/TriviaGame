$(document).ready(function(){

 /*   var question = new Object();

    question.number = "1";
    question.question = "La";
    question.rightAnswer = "d";
    question.wrongAnswers = ["a", "b", "c"];

    function Question(question, rightAnswer, wrongAnswers, rightGif, wrongGif)
        this.question = question;
        this.rightAnswer = rightAnswer;
        this.wrongAnswers = wrongAnswers[];
        this.rightGif = rightGif;
        this.wrongGif = wrongGif;

var q1 = new Question("What's the smartest way to monologue to the hero?",
        "c) Don't. Say it to your rubber duck.", "", "");

var q2 = new Question("");*/

var Q1 = {
q: "How are you?",
A: " Super",
B: " Good",
C: " All right",
D: " Crummy",
rightAnswer: true,
}

var Q2 = {
q: "Are you sure?",
A: " Yes",
B: " I think so...",
C: " No. I told you before.",
D: " Why are you doing this to me?",
rightAnswer: true,
}

//START State
$("#time-div").hide();
$("#start-button").on("click", function() {
    $("#time-div").show();
    $.each(Q1, function(key, value){
        $("#content-div").append("<br>" + key + ") " + value);
    });
    //$("#content-div p").html(Q1.q + "<br>" + Q1.a1 + "<br>" + Q1.a2 + "<br>" + Q1.a3 + "<br>" + Q1.a4);
    $("#start-button").hide();    

});

//QUIZ State

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



}) //



/*
The Evil Overlord Assessment Test

1) 
2)
3)
4)
5)

*/