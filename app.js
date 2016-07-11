$(document).ready(function() {
    //quiz question array
    var questions = [{
        question: "When was the last time the Chicago Cubs won the World Series?",
        choices: ["1907", "1908", "1916", "1917"],
        qNum : 0,
        correct : 1,
        fact: "The Cubs last won the World Series in 1908.  The curse of the Billy Goat is still going!"
        },
        {
        question: "Who has the most career home runs for the Cubs?",
        choices: ["Sammy Sosa", "Ernie Banks", "Ron Santo", "Ryne Sandberg"],
        qNum : 1,
        correct : 0,
        fact: "Sammy Sosa hit 545 home runs with the Cubs, barely edging out Ernie Banks."
        },
        {
        question: "Which Cubbie set the record for most RBIs in a season",
        choices: ["Ernie Banks", "Sammy Sosa", "Alfonso Soriano", "Hack Wilson"],
        qNum : 2,
        correct : 3,
        fact: "In 1930, Hack Wilson put together an amazing season accumulating 191 RBIs."
        },
        {
        question: "What is the most wins in a season by a Chicago Cub team?",
        choices: ["112", "116", "120", "162"],
        qNum : 3,
        correct : 1,
        fact: "In 1906, the Chicago Cubs were 116-36, the best regular season record ever."
        },
        {
        question: "How many Hall of Famers have the Cubs produced?",
        choices: ["38", "39", "40", "41"],
        qNum : 4,
        correct : 2,
        fact: "The Cubs have produce 40 HOFrs!."
    }]
    //global variables
    var numberCorrect = 0;
    var currentQuestion = 0;
    
    $("#question_wrapper").on("click", "#submit", function () {
        updateScore();
        currentQuestion++;
        nextQuestion();
    });
    
    $("#question_wrapper").on("click", "#retry_button", function () {
        numberCorrect = 0;
        currentQuestion = 0;
        $(".score_cup").css("display", "none");
        $("#score_cup0").css("display", "inline");
        var newQuestion = '<span class="question">'+questions[currentQuestion].question+'</span><br><div id="answer_holder"><input type="radio" name="option" class="option" value="0"><span class="answer">'+questions[currentQuestion].choices[0]+'</span><br><input type="radio" name="option" class="option" value="1"><span class="answer">'+questions[currentQuestion].choices[1]+'</span><br><input type="radio" name="option" class="option" value="2"><span class="answer">'+questions[currentQuestion].choices[2]+'</span><br><input type="radio" name="option" class="option" value="3"><span class="answer">'+questions[currentQuestion].choices[3]+'</span><br></div><div id="button_holder"><input type="button" id="submit" value="Submit Answer"><span id="hint"></span><input type="button" id="retry_button" value="Try Again!"></div>';
        $("#question_wrapper").html(newQuestion);
        $("#last_question_fact").html("");
    });

    function updateScore() {
        var answer = $("input[type='radio']:checked").val();
        if (answer == questions[currentQuestion].correct) {
            numberCorrect++;    
        }
        if (numberCorrect == 1) {
            $(".score_cup").css("display", "none")
            $("#score_cup1").fadeIn();
        }
        else if (numberCorrect == 2) {
            $(".score_cup").css("display", "none")
            $("#score_cup2").fadeIn();
        }
        else if (numberCorrect == 3) {
            $(".score_cup").css("display", "none")
            $("#score_cup3").fadeIn();
        }
        else if (numberCorrect == 4) {
            $(".score_cup").css("display", "none")
            $("#score_cup4").fadeIn();
        }
        else if (numberCorrect == 5) {
            $(".score_cup").css("display", "none")
            $("#score_cup5").fadeIn();
        }
    }

    function nextQuestion() {
        if (currentQuestion < 5) {
            $(".question").remove();
            $("#answer_holder input").remove();
            $("#answer_holder span").remove();
            $("#last_question_fact").hide();
            var newQuestion = '<span class="question">'+questions[currentQuestion].question+'</span><br><div id="answer_holder"><input type="radio" name="option" class="option" value="0"><span class="answer">'+questions[currentQuestion].choices[0]+'</span><br><input type="radio" name="option" class="option" value="1"><span class="answer">'+questions[currentQuestion].choices[1]+'</span><br><input type="radio" name="option" class="option" value="2"><span class="answer">'+questions[currentQuestion].choices[2]+'</span><br><input type="radio" name="option" class="option" value="3"><span class="answer">'+questions[currentQuestion].choices[3]+'</span><br></div><div id="button_holder"><input type="button" id="submit" value="Submit Answer"><span id="hint"></span><input type="button" id="retry_button" value="Try Again!"></div>';
            $("#question_wrapper").html(newQuestion);
            var lastFact= questions[currentQuestion-1].fact;
            $("#last_question_fact").html(lastFact).fadeIn();
        }
        else {
            $(".question").remove();
            $("#answer_holder input").remove();
            $("#answer_holder span").remove();
            $("#last_question_fact").fadeOut();
            $("#submit").css("display", "none");
            $("#retry_button").css("display", "inline");
            var lastFact= questions[currentQuestion-1].fact;
            $("#last_question_fact").html(lastFact);
            if (numberCorrect == 1) {
                var finalScore = '<span id="final">Congratulations on finishing the quiz!  You correctly answered '+numberCorrect+' question.'
                $("#answer_holder").html(finalScore);
            }
            else {
                var finalScore = '<span id="final">Congratulations on finishing the quiz!  You correctly answered '+numberCorrect+' questions.'
                $("#answer_holder").html(finalScore);
            }
        }
    }
});