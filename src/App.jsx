import './App.css';
import {Navbar,Footer} from './components'
import {Home,Profile,Item, Profile_item} from './pages'
import { Routes, Route } from "react-router-dom";
function App() {

  return (
    <div>
          <Routes>
          
            <Route path="/" element={<Home />} />
            <Route path=":item/:id" element={<Item />} />
            <Route path="/profile/:id" element={<Profile />} />
            <Route path="profileitem/:id" element={<Profile_item />} />
        
          </Routes>
      
    </div>
  );
}

export default App;
