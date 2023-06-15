import './App.css'
import { Home, Profile, Item} from './pages'
import { Routes, Route } from 'react-router-dom'
import { Navbar } from './components'
import Collection from './pages/collection/Collection'
import Staking from './pages/staking/StakingPage'
const express = require('express');
const routes = require('./server/routes');
const cors = require('cors');

const app = express();
const PORT = 3000;

function App() {
  return (
    <div>
      <div className='fixed top-0 left-0 right-0 z-10 mb-10'>
        <Navbar className='' />
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path=':item/:id' element={<Item />} />
        <Route path='/profile/:id' element={<Profile />} />
        <Route path = 'collection/:collAddress' element={<Collection/>} />
        <Route path = 'staking' element={<Staking/>} />
      </Routes>
    </div>
  )
}

app.use(cors())
app.use("/",routes)
app.use(express.json());

app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running, and App is listening on port "+ PORT)
    else 
        console.log("Error occurred, server can't start", error);
    }
);

export default App
