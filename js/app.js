$(document).ready(function() {

  // Array holding questions and answers
  var questions = [{
        question: "Who is the leader of the Autobots?",
        choices: ["Gears", "Arcee", "Hoist", "Optimus Prime"],
        qNum : 0,
        correct : 3,
        fact: "Optimus Prime is the leader of the Autobots."
        },
        {
        question: "Who is the leader of the Decepticons?",
        choices: ["Starscream", "Megatron", "Scorpinox", "Astrotrain"],
        qNum : 1,
        correct : 1,
        fact: "Megatron is the supreme leader of the Decepticons (even after his reformat in 2005)."
        },
        {
        question: "After reformatting by Unicron, who does Megatron become?",
        choices: ["Galvatron", "Metroplex", "Cybertron", "Smokescreen"],
        qNum : 2,
        correct : 0,
        fact: "After Unicron reformats Megatron's battered body, he is from there, known as Galvatron."
        },
        {
        question: "Who is the young Transformer who became the new Autobot leader after Optimus Prime's death?",
        choices: ["Springer", "Kup", "Hot Rod", "Wreck-Gar"],
        qNum : 3,
        correct : 2,
        fact: "Hot Rod is the young Autobot thrust into leadership after opening the Matrix of Leadership inside the belly of Unicron."
        },
        {
        question: "Who are the 2 brothers shown in images on this webpage?",
        choices: ["Sunstreaker and Sideswipe", "Prowl and Jazz", "Ironhide and Rachet", "Wheeljack and Windcharger"],
        qNum : 4,
        correct : 0,
        fact: "The 2 Lamborghini brothers seen on this page are the yellow Sunstreaker and red Sideswipe."
    }];

  var questionCount = 0;
  var score = 0;
  
  $(".quizarea").on("click", "#check", function() {
        questionCount++;
        nextquestion();
  });
  
  function nextquestion () {
    if (question < 5) {
        $(".question").remove();
        $(".answer input").remove();
        $(".answer span").remove();
        $("#theFact").remove();
        
        var newQuestion = '<span class="question">' +questions[questionCount].question+ '</span><br><div class="answers"><input type="radio" name="option" class="option" value="0"><span class="answer">'+questions[questionCount].choices[0]+'</span><br><input type="radio" name="option" class="option" value="1"><span class="answer">'+questions[questionCount].choices[1]+'</span><br><input type="radio" name="option" class="option" value="2"><span class="answer">'+questions[questionCount].choices[2]+'</span><br><input type="radio" name="option" class="option" value="3"><span class="answer">'+questions[questionCount].choices[3]+'</span><br></div><div id="button_holder"><input type="button" id="submit" value="Submit Answer"><span id="hint"></span><input type="button" id="retry_button" value="Try Again!"></div>';
        
        $(".quizarea").html(newQuestion);
        var factoid=questions[questionCount-1].fact;
        $("#theFact").html(factoid);       

        }else {
            
        $(".question").remove();
        $(".answers input").remove();
        $(".answers span").remove();
        $("#theFact").fadeOut();
        $("#check").css("display", "none");
        $(".retry").css("display", "inline");
        var factoid= questions[questionCount-1].fact;
        $("#theFact").html(factoid);
        if (numberCorrect == 1) {
            var finalScore = '<span id="final">Congratulations on finishing the quiz!  You correctly answered '+score+' question.'
            $(".answers").html(finalScore);
        
        } else {
            var finalScore = '<span id="final">Congratulations on finishing the quiz!  You correctly answered '+score+' questions.'
                $(".answers").html(finalScore);
        };
  }; 
  
    
        
    
  };
  
});
