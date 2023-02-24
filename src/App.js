import React from 'react'
import BigNFTslider from './Components/BigNFTslider/BigNFTslider'


import { Navbar,Footer, HeroSecton, Service, Subscribe, Title, Category, Filter, NFTCard, Collection } from './Components/ComponentsImport'

const App = () => {
  return (
  <>
  <Navbar></Navbar>
  <HeroSecton></HeroSecton>
  <Service></Service>
  <BigNFTslider></BigNFTslider>
  <Subscribe></Subscribe>
  <Collection />
  <Title 
  heading="Featured NFTs" 
  paragraph="Discover the most outstanding NFTs in all topics of its"></Title>
  <Filter />
  <NFTCard />
  <Title 
  heading="Browse by category" 
  paragraph="Explore the NFTs in the most featured categories"></Title>
  <Category />
  <Footer></Footer>
  </>
  )
}

export default App