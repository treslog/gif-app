import { Page } from '@geist-ui/core'
import Content from '../../components//Content'
import Footer from '../../components/Footer'
import GifDetail from '../GifDetail'
import Header from '../../components//Header'

import { Route } from 'wouter'

export const Home = ({ switchThemes }: any): any => {
  return (
    <Page width='1200px'>
      <Header switchThemes={switchThemes} />
      <Route path='/gifs/:keyword' component={Content} />
      <Route path='/gif/:id' component={GifDetail} />
      <Route path='/' component={Content} />
      <Footer />
    </Page>
  )
}
