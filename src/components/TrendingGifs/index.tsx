import { Grid, Tag } from '@geist-ui/core'
import { useState } from 'react'
import { Link } from 'wouter'
import getTrending from '../../services/getTrending'

export default function TrendingGifs (): any {
  const [trending, setTrending] = useState([])
  getTrending()
    .then(setTrending)
    .catch(console.error)

  return (
    <Grid.Container gap={2} justify='center'>
      {trending.map((words: any) => (
        <Grid key={words}>
          <Link to={`/gifs/${words}`}>
            <Tag type='secondary'>{words}</Tag>
          </Link>
        </Grid>
      ))}
    </Grid.Container>
  )
}
