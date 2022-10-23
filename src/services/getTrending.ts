import { API_KEY, API_URL } from './Settings'

function getTrending (): Promise<any> {
  const apiURL = `${API_URL}/trending/searches?api_key=${API_KEY}`

  return fetch(apiURL)
    .then(response => response.json())
    .then(response => {
      return response.data
    })
}

export default getTrending
