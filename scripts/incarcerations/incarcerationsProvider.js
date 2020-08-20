let incarcerations = []

export const useIncarcerations = () => incarcerations.slice()

export const getIncarcerations = () => {
  return fetch("https://criminals.glassdale.us/criminalFacilities")
    .then( res => res.json())
    .then( incarcerationData => incarcerations = incarcerationData)
}

