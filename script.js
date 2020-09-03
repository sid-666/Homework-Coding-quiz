var startButton = document.getElementById("start");
var questioncontainer = document.getElementById("questionanswerresult");    
var mixedQuestions, currentQuestionIndex
var QuestionEl = document.getElementById("TheQuestion");
var AnswerButtons = document.getElementById("answer")
var Countdown = document.getElementById("timer")
var initialPlace = document.getElementById("Alldone")
var submitbtn = document.getElementById("submitinit")
var goback = document.getElementById("returnbtn")
var clear = document.getElementById("somewherebtn")
var SecondsLeft = 40
var highscorearray = [];
var Interval;
var score = 0
 

var questions = [
    {
        question: "What is html?",
        options:["Pig", "Dog","Cat","Correct"],
        correct: "Correct"
    },
    {
        question: "What is CSS?",
        options:["Hands", "Feet","Nose","Right"],
        correct: "Right"
    },
    {
        question: "What is Javascript?",
        options:["Leg", "Dog","Cucumber","Brilliant"],
        correct: "Brilliant"
    },
    {
        question: "What is Coding?",
        options:["Man", "Woman","Dunno","Great"],
        correct: "Great"
    }
]
function timerCountDown(){
        Interval = setInterval(function() {
        --SecondsLeft;
        Countdown.textContent = "Timer:" + SecondsLeft;
    
        if(SecondsLeft <= 0) {
          clearInterval(Interval);
          postInitial();
        }
    
      }, 1000);
}

function accessHighScore(){
    document.getElementById("container1").classList.add("hide")
    document.getElementById("HighScore").classList.remove("hide");
    viewHighscore()

}
function startGame(){
     document.getElementById("quizintro").classList.add("hide");
     mixedQuestions = questions.sort(()=>Math.random()-.5);
     currentQuestionIndex = 0;
     questioncontainer.classList.remove("hide");
     setnextquestion();
     timerCountDown()
}
function setnextquestion(){
    resetState()
    displayQuestion(mixedQuestions[currentQuestionIndex])
}
function displayQuestion(question){
    QuestionEl.textContent = question.question
    question.options.forEach(option => {
        var button = document.createElement("button")
        button.textContent = option
        if(option === question.correct){
            button.setAttribute("status", "correct")
        }
        button.addEventListener("click", selectAnswer)
        AnswerButtons.appendChild(button)
    });
}
function resetState(){
    AnswerButtons.innerHTML = ""
}

function selectAnswer(e){
    var selectedButton = e.target
    var correct = selectedButton.getAttribute("status")
    document.getElementById("result").classList.remove("hide")
    document.getElementById("result").textContent = correct
    score++;
     if(!correct){
         SecondsLeft -= 10
         document.getElementById("result").textContent = "wrong"
         score--
     }

     setTimeout(function() {
        document.getElementById("result").classList.add("hide")
     }, 500)

    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        setnextquestion();
    }else{
        postInitial();
        clearInterval(Interval);
        console.log(clearInterval(Interval))
    }
}

function postInitial(){
    questioncontainer.classList.add("hide")
    initialPlace.classList.remove("hide")
    initialPlace.children[1].textContent = "Your high score is " + score;
    submitbtn.addEventListener("click", function(){
    
        if(init.value === " "){
            return null
        }else{
            var newhighscore =[
                {
                    initials: init.value.trim(),
                    highscore: score
                }
            ]
            console.log(score)
            if(localStorage.getItem("highscore")){
                highscorearray = JSON.parse(localStorage.getItem("highscore"))
            }
            highscorearray = highscorearray.concat(newhighscore)
            localStorage.setItem("highscore", JSON.stringify(highscorearray))
            
            viewHighscore()
        }
        
    })
  
}

function viewHighscore() {
    document.getElementById("HighScore").classList.remove("hide");
    questioncontainer.classList.add("hide");
    document.getElementById("container1").classList.add("hide");
    var newHS = JSON.parse(localStorage.getItem("highscore"));

     for (var i = 0; i< newHS.length; i++ ){
         var list = document.createElement("li")
         list.innerHTML = newHS[i].initials + "-" + newHS[i].highscore
         document.getElementById("scorelist").appendChild(list)
     }
    goback.addEventListener("click", resetGame)
    clear.addEventListener("click", clearhs)
    
    
}

function resetGame(){
    window.location.reload()
    
}
function clearhs(){
    document.getElementById("scorelist").innerHTML = ""
    localStorage.clear()
}

startButton.addEventListener("click", startGame)

