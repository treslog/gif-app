import { API_KEY, API_URL } from './Settings'

function getGifs ({ keyword = 'cat' } = {}): Promise<any> {
  const apiURL = `${API_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=20&offset=0&rating=g&lang=en`

  return fetch(apiURL)
    .then(response => response.json())
    .then(response => {
      const { data } = response
      const gifs = data.map((image: any) => {
        const { images, title, id } = image
        const { url } = images.downsized_medium
        return { title, id, url }
      })
      return gifs
    })
}

export default getGifs
