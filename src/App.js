import "./App.css";
import { Navbar, Footer } from "./components";
import { Home, Profile, Item, Create, Login, Register } from "./pages";
import { Routes, Route } from "react-router-dom";
import { createClient, configureChains, WagmiConfig } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { mainnet } from "wagmi/chains";
import Signin from "./components/signin";
import User from "./components/user";

const { provider, webSocketProvider } = configureChains(
  [mainnet],
  [publicProvider()]
);

const client = createClient({
  provider,
  webSocketProvider,
  autoConnect: true,
});

function App() {
  return (
    <div>
      <Navbar />
          <Routes>
          
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
