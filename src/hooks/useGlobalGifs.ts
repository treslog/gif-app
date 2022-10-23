import GifsContext from '../context/GifsContext'
import { useContext } from 'react'

export default function useGlobalGifs (): any {
  const { gifs } = useContext(GifsContext)
  return gifs
}
