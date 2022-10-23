import { Grid, Loading, Spacer } from '@geist-ui/core'

import Gif from '../Gif'
import useGifs from '../../hooks/useGifs'

export default function Gifs ({ keyword }: any): any {
  const { loading, gifs } = useGifs({ keyword })

  return (
    <Grid.Container gap={2} justify='center'>
      {loading && <Loading>Loading</Loading>}

      {gifs.map(({ id, title, url }: any) => (
        <Gif id={id} key={id} title={title} url={url} />
      ))}
    </Grid.Container>
  )
}
