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


      function  removeBackgroundColorById(elementId){
            const element = document.getElementById(elementId);
            element.classList.remove('bg-orange-500');
            }


            function getTrxtElementValueById(elementId)

            {const element = document.getElementById(elementId);
            const elementValueTrxt =element.innerText;
            const value = parseInt(elementValueTrxt);
            return value;}

            function setTextElementValueById(elementId, value){const element = document.getElementById(elementId);
                  element.innerText = value;

            }




            function getElementTextById(elementId){
                  const element =document.getElementById(elementId);
                  element
                  const text = element.innerText;
                  return text;
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