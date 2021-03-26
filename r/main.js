// Define Global Variables
var all = [];
var time = 0;
var now;
var correct;

// Functions
function startPractice() {
  correct = 0;
  for (var i = 1; i <= 88; i++) {
    all.push(i);
  }
  time = document.getElementById("time").value;
  document.getElementById("file").style.opacity = "1";
  document.getElementById("show").style.display = "inline";
  document.getElementById("ans").style.display = "inline";
  document.getElementById("answ").style.display = "inline";
  cont();
}

function cont() {
  // End
  if (time === 0) {
    return stopPractice();
  }
  document.getElementById("cont").style.display = "none";
  document.getElementById("ans").style.display = "inline";
  // Random
  now = all[Math.floor(Math.random() * all.length)];
  // Questions
  document.getElementById("file").setAttribute("src", "i/" + con[now].file + ".gif");
  document.getElementById("name");
  document.getElementById("coor").innerHTML = con[now].coor;
  // Remove Asked Ones
  var index = all.indexOf(now);
  if (index > -1) {
    all.splice(index, 1);
  }
  // Count
  --time;
}

function showAnswer() {
  document.getElementById("cont").style.display = "inline";
  document.getElementById("ans").style.display = "none";
  document.getElementById("name").innerHTML = con[now].name;
}

function answer() {
  document.getElementById("cont").style.display = "inline";
  var answ = document.getElementById("answ").value;
  if (answ === con[now].name) {
    ++correct;
    document.getElementById("name").innerHTML = "Correct!";
  } else {
    document.getElementById("name").innerHTML = "Wrong!";
  }
}

function stopPractice() {
  document.getElementById("file").style.opacity = "0";
  document.getElementById("show").style.display = "none";
  document.getElementById("ans").style.display = "none";
  document.getElementById("answ").style.display = "none";
  time = document.getElementById("time").value;
  document.getElementById("name").innerHTML = "You got " + correct + "/" + time + "!";
}

function startTest() {

}
