export const criminalHTML = (criminalObj, facilityArray) => {
  return `
  <section class='criminal card card-id--${criminalObj.id}'>
  <h3>Criminal Profile</h3>
  <p>Criminal Name: ${criminalObj.name}</p>
  <p>Crime: ${criminalObj.conviction}</p>
  <p>Facilities:</p>
  <ul>
    ${
      facilityArray.map( facility => {
      return `
      <li>${facility.facilityName}</li>
      `
      }).join("")
    }
  </ul>
  <p>Term Start:${new Date(criminalObj.incarceration.start).toLocaleDateString('en-US')}</p>
  <p>Term End:${new Date(criminalObj.incarceration.end).toLocaleDateString('en-US')}</p>
  <button id="associates-button--${criminalObj.id}">Associate Alibis</button>
  </section>
  `
}

