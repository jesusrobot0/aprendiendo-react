/**
 *  Este código ya no funciona debido a que el API ya no devuelve en el JSON
 *  el url ya que el url ahora es: https://cataas.com/cat/says/${threeFirstWords}
 */
export const getImageFromFact = (threeFirstWords) => {
  return fetch(`https://cataas.com/cat/says/${threeFirstWords}?size=50&json=true`)
    .then(res => res.json())
    .then(response => {
      const { url } = response
      return url
    })
}
