// function play(){
// //  step- 1: hide the home screen. to hidu the scereen add the class hidden to the home section
// const homeSection =document.getElementById('home-screen');
// // console.log(homeSection.classList)

// homeSection.classList.add('hidden'); 


// // show the playground 
// const playGround = document.getElementById('play-ground');
// playGround.classList.remove('hidden')
      
// }



 function handleKeyboardButtonPress(event){
      const playerPressed = event.key;
      // console.log('player pressed', playerPressed);

      // get the expected to press current-alphabet
      const currentAlphabetElement = document.getElementById('current-alphabet')
      const currentAlphabet = currentAlphabetElement.innerText;
      const expectedAlphabet = currentAlphabet .toLowerCase();
      // console.log(playerPressed ,expectedAlphabet);

      // check matched or not
      if(playerPressed === expectedAlphabet){
            console.log('you get a point');
// current-score

const currentScoreElement = document.getElementById('current-score');


const currentScoreText = currentScoreElement.innerText;

const currentScore = parseInt(currentScoreText)
console.log(currentScore)

const newScore = currentScore +1;

currentScoreElement.innerText = newScore;





            console.log('you have pressed correctiy',expectedAlphabet);

            removeBackgroundColorById
                  (expectedAlphabet);
            continueGame();
      }
            else{console.log('you missed.you lost a life')};

            const currentLifeElement = document.getElementById('current-life')
            const currentLifeText = currentLifeElement.innerText;
            const currentLife = parseInt(currentLifeText);
            const newLife = currentLife - 1;
            currentLifeElement.innerText = newLife;


      }

      


 

// capture keyboard key press
document.addEventListener('keyup',handleKeyboardButtonPress);







function continueGame(){

      // random alphadet

      const alphabet = getARanndomAlphabet();
      // console.log('your random alphadet', alphabet);
// set current-alphabet

const currentAlphabetElement = document.getElementById('current-alphabet');

currentAlphabetElement.innerText = alphabet;
// set Background Color

addBackgroundColorById
(alphabet);


}

function play(){
      hideElmentById('home-screen')
      showElementById('play-ground')
      continueGame()
}