const targetContent = document.querySelector('.witnessesContainer')
const eventHub = document.querySelector(".container")

const render = (witnessArray) => {
  
  targetContent.innerHTML = witnessArray.map( (witness) => criminalHTML(witness)).join('')
}