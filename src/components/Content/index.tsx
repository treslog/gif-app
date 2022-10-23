import { Page, Text } from '@geist-ui/core'
import Gifs from '../Gifs'
import SearchBar from '../SearchBar'
import { useState, useEffect } from 'react'

export default function Content ({ params }: any): any {
  const keywordURL = params.keyword ?? null

  const [keyword, setKeyword] = useState()

  useEffect(() => {
    setKeyword(keywordURL)
  }, [keywordURL])

  const onChange = (e: any): any => {
    setKeyword(e.target.value)
  }
  return (
    <Page.Content>
      <SearchBar onChange={onChange} />
      {params?.keyword === undefined && <Text h3>Last search </Text>}
      <Gifs keyword={keyword} />
    </Page.Content>
  )
}
