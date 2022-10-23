import getGifs from '../services/getGifs'
import { useState, useEffect, useContext } from 'react'
import GifsContext from '../context/GifsContext'

export default function useGifs ({ keyword } = { keyword: null }): any {
  const { gifs, setGifs } = useContext(GifsContext)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    const keywordToUse =
      keyword ?? localStorage.getItem('lastkeyword') ?? 'random'
    getGifs({ keyword: keywordToUse })
      .then(gifs => {
        setGifs(gifs)
        localStorage.setItem('lastkeyword', keyword)
      })
      .catch(console.log)
      .finally(() => setLoading(false))
  }, [keyword, setGifs])
  return { loading, gifs }
}
