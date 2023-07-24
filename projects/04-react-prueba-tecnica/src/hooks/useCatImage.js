import { useEffect, useState } from 'react'
import { getImageFromFact } from '../services/images'

const CAT_IMAGE_PREFIX_URL = 'https://cataas.com'

export function useCatImage ({ fact }) {
  const [imgUrl, setImgUrl] = useState('')

  // Obtener una imagen cada vez que hay un fact nuevo
  useEffect(() => {
    if (!fact) return
    const threeFirstWords = fact.split(' ', 3).join(' ')
    getImageFromFact(threeFirstWords).then(setImgUrl)
  }, [fact])
  return { imgUrl: `${CAT_IMAGE_PREFIX_URL}${imgUrl}` }
}
