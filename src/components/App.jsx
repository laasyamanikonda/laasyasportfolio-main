import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MusicProvider } from "../context/MusicContext";
import NowPlayingWidget from "./NowPlayingWidget";
import NavBar from "./NavBar";

import LandingPage from "../views/LandingPage";
import About from "../views/About";
import Experience from "../views/Experience";
import Projects from "../views/Projects";
import FunStuff from "../views/FunStuff";
import Photos from "../views/Photos";

export default function App() {
  return (
    <MusicProvider>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/favorites" element={<FunStuff />} />
          </Routes>

        <NowPlayingWidget />
      </BrowserRouter>
    </MusicProvider>
  );
}
