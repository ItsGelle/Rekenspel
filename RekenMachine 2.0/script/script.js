const myAssignment = document.getElementById('myAssignment');
const myInput = document.getElementById('myInput');

let assignments = [];



myAssignment.innerHTML = makeSum;

myInput.addEventListener('keydown',inputHandler,false);

function inputHandler(evt){
  if(evt.keyCode == 13){
    console.log(makeSum());
  }
}

function makeSum(){
  let sum = {};
  sum.numA = getNumber();
  sum.numB = getNumber();
  sum.ans = eval(sum.numA * sum.numB);
  sum.yourAns = myInput.value;
  return sum;
}

makeSum();

function getNumber(){
  let number = Math.floor(Math.random()*9)+1;
  return number;
}
