import { Toggle, Page, Spacer, Text, Link as LinkGeist } from '@geist-ui/core'
import { Link } from 'wouter'
import TrendingGifs from '../TrendingGifs'

export default function Header ({ switchThemes }: any): any {
  return (
    <Page.Header>
      <Spacer h={4} />
      <Toggle onChange={switchThemes} />
      <Link to='/'>
        <Text h1>Gif search</Text>
      </Link>
      <LinkGeist href='https://github.com/treslog' icon target='_blank'>
        Treslog | View GitHub.
      </LinkGeist>
      <Text p>Search for gifs</Text>
      <TrendingGifs />
    </Page.Header>
  )
}
