export const getImageFromFact = (threeFirstWords) => {
  return fetch(`https://cataas.com/cat/says/${threeFirstWords}?size=50&json=true`)
    .then(res => res.json())
    .then(response => {
      const { url } = response
      return url
    })
}
