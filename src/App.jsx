import './App.css'
import { Home, Profile, Item, Profile_item } from './pages'
import { Routes, Route } from 'react-router-dom'
import { Navbar } from './components'
import Collection from './pages/collection/Collection'
import Staking from './pages/staking/StakingPage'
function App() {
  return (
    <div className='gradient-bg-welcome'>
      <div className='fixed top-0 left-0 right-0 z-10 mb-10'>
        <Navbar className='' />
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path=':item/:id' element={<Item />} /> */}
        <Route path='/nft/:tokenAddress/:tokenId' element={<Item />} />
        <Route path='/profile/:id' element={<Profile />} />
        <Route path='profileitem/:id' element={<Profile_item />} />
        <Route path = 'collection/:collAddress' element={<Collection/>} />
        <Route path = 'staking' element={<Staking/>} />
      </Routes>
    </div>
  )
}

export default App
