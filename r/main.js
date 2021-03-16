//Define Global Variables
var all
var time
var now
var correct

//Functions
function startPractice(){
  correct=0
  all = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88];
  time = document.getElementById("time").value;
  document.getElementById("file").style.opacity="1";
  document.getElementById("show").style.display="inline";
  document.getElementById("ans").style.display="inline";
  document.getElementById("answ").style.display="inline";
  cont();
}

function cont(){
  //End
  if (time==0){
    stopPractice();
    return;
    }
  document.getElementById("cont").style.display="none";
  document.getElementById("ans").style.display="inline";
  //Random
  now = all[Math.floor(Math.random() * all.length)];
  //Questions
  document.getElementById("file").setAttribute("src","i/"+con[now].file+".gif");
  document.getElementById("name");
  document.getElementById("coor").innerHTML=con[now].coor
  //Remove Asked Ones
  var index = all.indexOf(now);
  if (index > -1) {
    all.splice(index, 1);
  }
  //Count
  time--
}

function showAnswer(){
  document.getElementById("cont").style.display="inline";
  document.getElementById("ans").style.display="none";
  document.getElementById("name").innerHTML=con[now].name;
}

function answer(){
  document.getElementById("cont").style.display="inline";
  var answ = document.getElementById("answ").value;
  if (answ==con[now].name){
    correct++
    document.getElementById("name").innerHTML="Correct!";
  }
  else {
    document.getElementById("name").innerHTML="Wrong!";
  }
}

function stopPractice(){
  document.getElementById("file").style.opacity="0";
  document.getElementById("show").style.display="none";
  document.getElementById("ans").style.display="none";
  document.getElementById("answ").style.display="none";
  time = document.getElementById("time").value;
  document.getElementById("name").innerHTML="You got "+correct+"/"+time+"!";
}

function startTest(){

}
