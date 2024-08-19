// function play(){
// //  step- 1: hide the home screen. to hidu the scereen add the class hidden to the home section
// const homeSection =document.getElementById('home-screen');
// // console.log(homeSection.classList)

// homeSection.classList.add('hidden'); 


// // show the playground 
// const playGround = document.getElementById('play-ground');
// playGround.classList.remove('hidden')
      
// }

function continueGame(){
      const alphabet = getARanndomAlphabet();
      console.log('your random alphadet', alphabet);



}

function play(){
      hideElmentById('home-screen')
      showElementById('play-ground')
      continueGame()
}