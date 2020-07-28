let officers = []

export const useOfficers = () => officers.slice()

export const getOfficers = () => {
  return fetch("https://criminals.glassdale.us/officers")
    .then(officersRaw => officersRaw.json())
    .then(parsedOfficers => {
      officers = parsedOfficers
    })
}