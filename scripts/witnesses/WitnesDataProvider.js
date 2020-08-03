let witneses = []

export const useWitnesses = () => witneses.slice()

export const getWitnesses = () => {
  return fetch("https://criminals.glassdale.us/witnesses")
    .then(witnesesesRaw => witnesesesRaw.json())
    .then(parsedWitneseses => {
      witneses = parsedWitneseses
    })
}