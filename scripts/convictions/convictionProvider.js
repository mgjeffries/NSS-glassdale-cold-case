let convictions = []

// export const useConvictions = () => convictions.slice()
export const useConvictions = () => {
  return convictions.slice()
}

export const getConvictons = () => {
  return fetch("https://criminals.glassdale.us/crimes")
    .then(rawConvictions => rawConvictions.json())
    .then(convictionObjects => {
      convictions = convictionObjects
    })
}
