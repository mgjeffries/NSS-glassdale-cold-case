convictions = []

export const useConvictions = () => convictions.slice()

export const getConvictons = () => {
  return fetch("http://criminals.glassdale.us/crimes")
    .then(rawConvictions => rawConvictions.json())
    .then(convictionObjects => {
      convictions = convictionObjects
    })
}
