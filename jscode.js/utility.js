function hideElmentById(elementId){
      const element = document.getElementById(elementId);
      element.classList.add('hidden')

}

function showElementById(elementId){
      const element = document.getElementById(elementId);
      element.classList.remove('hidden')
}

function addBackgroundColorById(elementId){
const element = document.getElementById(elementId);
element.classList.add('bg-orange-500');
}



function getARanndomAlphabet(){
      const alphabetString = 'abcdefghijklmnopqrstubwxyz';
      const alphabets = alphabetString.split('');
      console.log(alphabets);


// get a random ondex between 0 -25
const randomNumber = Math.random() * 25;
const index = Math.round( randomNumber);
console.log(index);

const alphabet = alphabets[index];
// console.log(index,alphabet);
return alphabet;

}