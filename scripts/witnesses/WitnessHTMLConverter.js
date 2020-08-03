export const witnessHTML = (witnessObj) => {
  return `
  <section class='witness card card-id--${witnessObj.id}'>
  <h3>Witness Profile</h3>
  <p>Witness Name: ${witnessObj.name}</p>
  <p>Statement: ${witnessObj.statements}</p>
  </section>
  `
}