import './App.css';
import {Navbar,Footer} from './components'
import {Home,Profile,Item, Create,Login,Register, Signin, User} from './pages'
import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <div>
      <Navbar />
          <Routes>
          <Route path="/signin" element={<Signin />} />
          <Route path="/user" element={<User />} />
            <Route path="/" element={<Home />} />
            <Route path=":item/:id" element={<Item />} />
            <Route path="/create" element={<Create /> } />
            <Route path="/profile/:id" element={<Profile />} />
            <Route path="/login" element={ <Login />} />
            <Route path="/register" element={ <Register />} />
          </Routes>
      
    </div>
  );
}

export default App;
