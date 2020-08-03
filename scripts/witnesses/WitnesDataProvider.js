let witneses = []

export const useWitnesses = () => witneses.slice()

export const getCriminals = () => {
  return fetch("https://criminals.glassdale.us/witneses")
    .then(witnesesesRaw => witnesesesRaw.json())
    .then(parsedWitneseses => {
      witneses = parsedWitneseses
    })
}