export const criminalHTML = (criminalObj) => {
  return `
  <section class='criminal card'>
  <h3>Criminal Profile</h3>
  <p>Criminal Name: ${criminalObj.name}</p>
  <p>Crime: ${criminalObj.conviction}</p>
  <p>Term Start:${new Date(criminalObj.incarceration.start).toLocaleDateString('en-US')}</p>
  <p>Term End:${new Date(criminalObj.incarceration.end).toLocaleDateString('en-US')}</p>
  </section>
  `
}

