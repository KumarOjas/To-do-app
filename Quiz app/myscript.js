var questions =
[{
   question:"What is the baby of a month known as?",
   choices:["baby","infant",'kit',"larva"],
   correctAnswer:3
},
{
    question:"What is the adult of a kid known as?",
   choices:["calf","doe",'goat',"chick"],
   correctAnswer:2
},{
    question:"What is the young of a bufallo known as?",
    choices:["calf","baby",'pup',"cow"],
    correctAnswer:0
}
question:"What a baby Aligator called?",
choices:["baby","gator",'hatchling',"calf"],
correctAnswer:2
} ,
{
    question:"What is a baby goose called ?",
    choices:["gooser","gosling",'gup',"pup"],
    correctAnswer:1
},
{
question:"What is the young of a hamster known as?",
choices:["pup","chick",'infant',"billy"],
correctAnswer:0
},
{
question:"What is the young of a hawk known as?",
choices:["hawklett","pup",'larva',"eyas"],
correctAnswer:0
},
{
question:"What is the young of a grasshopper  known as?",
choices:["calf","baby",'pup',"cow"],
correctAnswer:0
},
{
    question:"What is baby whale  called?",
    choices:["whala","cub",'grub',"infant"],
    correctAnswer:1
},
{
    question:"What isa baby  Monkey called?",
    choices:["infant","baby",'calf',"pup"],
    correctAnswer:0
},
{
 question :"whatis a baby Bear Called?"
choices:["cub","baby balu",'young bear',"bearlet"],
correctAnswer:0
}];

var currentQuestion=0;
var CorrectAnswers=0;
var quizOver=false;
$(document).ready(function(){
    displayCurrentQuestion();
    $(this).find('.quizMessage').hide();
    $(this).find('.nextButton').on("click",function(){
    if(!quizover){
    value=$("input type='radio"]:checked').val();
     if (value==undefined)
    {
    $(document).find(".quizMessage").text("Please select an answer");
    $$(document).find(".quizMessage").show();
    }
    else{
    $(document).find(".quizMessage").hide();
    if(value ==questions[currentQuestion].correctAnswer){
     correctAnswers++;
    }
    currentQuestion++;
    if(currentQuestion<questions.length){
      displayCurrentQuestion();
      }
    else{
     displayScore();
     $(document).find(".nextButton").text("Play Again?");
     quizOver= true;
    }
   }
}
   else {
   quizOver= false;
   $(document).find(".nextButton").text("Next Question");
   resetQuiz();
   displayCurrentQuestion();
   hideScore();
}
   }
    );
    }
    );
function displayCurrentQuestion(){
  
     console.log("In display current Question");

     var question = questions[currentQuestion].question;
     var questionClass=$(document).find('.quizContainer>.question');
     var choiceList =$(document).find("quizContainer">.choiceList);
     var numChoices =questions[currentQuestion].choices.length;
     $(questionClass).text(question);
     $(choiceList).find("li").remove();
     var choice;
     for (i=0;i<numChoices;i++){
        choice=questions[currentQuestion].choices[i];
        $('<li><input type="radio" value='+i+'name="dynradio'/>'+ choice + '<li>').appendTo(choiceList);     
}

    function resetQuiz(){
      currentQuestion =0;
      correctAnswers=0;
       hideScore();
    }
    function displayScore(){
     $(document).find(".quizContainer">.result").text("You scored:"+correctAnswers+"out of:"+ questions.length)
     $(document).find(".quizContainer">.result").show();
    }
    function hideScore() {
    $(document).find(".result").hide();
    }


      


















}










    }










}