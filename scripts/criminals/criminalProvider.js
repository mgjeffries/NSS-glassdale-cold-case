let criminals = []

export const useCriminals = () => criminals.slice()

export const getCriminals = () => {
  return fetch("https://criminals.glassdale.us/criminals")
    .then(criminalsRaw => criminalsRaw.json())
    .then(parsedCriminals => {
      criminals = parsedCriminals
    })
}