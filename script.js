let minNum;
let maxNum;
const startBtn = document.getElementById("startBtn");
const gameBtn = document.getElementById("gameBtn");
const submitBtn = document.getElementById("submitBtn");
const firstScreen = document.getElementById("firstScreen");
const secondScreen = document.getElementById("secondScreen");
const errLabel = document.getElementById("errLabel");
const maxInput = document.getElementById("maxInput");
const minInput = document.getElementById("minInput");
const ansLabel = document.getElementById("ansLabel");
const clueLabel = document.getElementById("clueLabel");
const restartBtn = document.getElementById('restartBtn')
let answer;
const attempts = document.getElementById('attempts');
const attemptsDiv = document.getElementById('attemptsDiv');


// button to start game
startBtn.addEventListener("click", () => {
  firstScreen.style.display = "flex";
  startBtn.style.display = "none";
});


// lets start button
gameBtn.addEventListener("click", () => {
  if (!maxInput.value || !minInput.value) {
    errLabel.innerHTML = "Please fill all feilds!";
    errLabel.style.color = "red";
    return;
  }
  minNum = Number(minInput.value);
  maxNum = Number(maxInput.value);

  if (minNum >= maxNum) {
    errLabel.innerHTML = "Minimum number should not greater then  or equal to maximum number";
    errLabel.style.color = "red";
    return;
  }

  firstScreen.style.display = "none";
  secondScreen.style.display = "flex";
  restartBtn.style.display = 'block'
  ansLabel.innerHTML = `Guess a random number between ${minNum} and ${maxNum}`
  answer = Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);
  console.log(answer);
});



submitBtn.addEventListener('click',()=>{
  const guessInput = document.getElementById('guessInput')
  const guess = Number(guessInput.value);
  let attempt;
  
  if(guess > answer){
    clueLabel.innerHTML = `Try Again! ${guess} is greater then the answer`
    attempt = Number(attempts.innerHTML) + 1
    attempts.innerHTML = attempt
  }else if(guess < answer){
    clueLabel.innerHTML = `Try Again! ${guess} is less then the answer`
    attempt = Number(attempts.innerHTML) + 1
    attempts.innerHTML = attempt

  }else if(guess == answer){
    attempt = Number(attempts.innerHTML) + 1
    submitBtn.style.display = 'none'
    guessInput.style.display = 'none'
    ansLabel.style.display = 'none'
    attemptsDiv.style.display = 'none'
    clueLabel.style.fontWeight = '900'
    clueLabel.innerHTML = `You Win! The ${answer} is that number. You take ${attempt} attempts`
  }

})

restartBtn.addEventListener('click', ()=>{
  window.location.reload()
})



