import {
  Display,
  Image,
  Card,
  Spacer,
  Grid,
  Snippet,
  Text
} from '@geist-ui/core'

import useGlobalGifs from '../../hooks/useGlobalGifs'

export default function GifDetail ({ params }: any): any {
  const { id } = params

  const gifs = useGlobalGifs()
  const gif = gifs.find((gif: any) => gif.id === id)

  if (!gif) {
    return <div>Gif not found</div>
  }
  const { title, url } = gif

  return (
    <>
      <Spacer h={4} />
      <Grid.Container gap={2} justify='center'>
        <Grid>
          <Card>
            <Display shadow>
              <Image height='246px' src={url} />
            </Display>
            <Text p>{title}</Text>
            <Snippet symbol='' text={url} width='100%' />
          </Card>
        </Grid>
      </Grid.Container>
    </>
  )
}
