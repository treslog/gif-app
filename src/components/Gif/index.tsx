import { Card, Grid, Text, Image } from '@geist-ui/core'
import { Link } from 'wouter'

export default function Gif ({ id, title, url }: any): any {
  const urlLink = `/gif/${id}`
  return (
    <Grid key={id} xs={8} md={4}>
      <Link to={urlLink}>
        <Card>
          <Text small>{title}</Text>
          <Image src={url} alt={title} height='100px' padding='1rem' />
        </Card>
      </Link>
    </Grid>
  )
}
