import { Button, Grid, Input, Spacer } from '@geist-ui/core'

import { useState } from 'react'
import { useLocation } from 'wouter'

export default function SearchBar ({ onChange }: any): any {
  const [value, setValue] = useState('')
  const [, setLocation] = useLocation()

  const handler = (e: any): any => {
    setValue(e.target.value)
  }

  const onSubmit = (e: any): any => {
    const words = value.trim()
    if (words !== '') {
      setLocation(`/gifs/${words}`)
    }
  }

  return (
    <>
      <Grid.Container gap={1.5} alignItems='center' justify='center'>
        <Grid>
          <Input
            value={value}
            onChange={handler}
            placeholder='Search'
            required
            autoFocus
          />
        </Grid>
        <Grid>
          <Button auto onClick={onSubmit} type='success'>
            Search
          </Button>
        </Grid>
      </Grid.Container>

      <Spacer h={3} />
    </>
  )
}
