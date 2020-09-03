function viewHighscore() {
    document.getElementById("HighScore").classList.remove("hide");
    document.getElementById("container1").classList.add("hide");
    var newHS = JSON.parse(localStorage.getItem("highscore"));

     for (var i = 0; i< highscorearray.length; i++ ){
         var list = document.createElement("li")
         list.textcontent = newHS.initials + "-" + newHS.score
     }
}
