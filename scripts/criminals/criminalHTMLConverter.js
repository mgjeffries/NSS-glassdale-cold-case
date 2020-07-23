export const criminalHTML = (criminalObj) => {
  return `
  <section>
  ${criminalObj.name}
  </section>
  `
}

// Example Data 
// {
//   "id": 1,
//   "age": 51,
//   "eyeColor": "blue",
//   "name": "Madelyn Lebsack",
//   "workHistory": [
//     "Vandervort Group",
//     "Crooks Group",
//     "Brekke Group"
//   ],
//   "phone": "774-195-7440",
//   "address": "49 Leonardo Shore Suite 938\nLoriview, KY 09715-1234",
//   "incarceration": {
//     "start": "1987-10-03T16:19:42.359Z",
//     "end": "2013-08-15T15:44:04.782Z"
//   },
//   "conviction": "grand theft",
//   "arrestingOfficer": "Lazaro Leuschke",
//   "known_associates": [
//     {
//       "name": "Ebony Hyatt",
//       "alibi": "getting married"
//     }
//   ]
// },