import { criminalHTML } from './criminalHTMLConverter.js'
import { getCriminals, useCriminals } from './criminalProvider.js'

const targetContent = document.querySelector('.criminalsContainer')

export const listCriminals = () => {
  getCriminals()
    .then( () => { 
       
      let allCriminalHTML = ''
      useCriminals().forEach(criminalObj => {
        allCriminalHTML += criminalHTML(criminalObj)
      })

      targetContent.innerHTML = allCriminalHTML
  })
}