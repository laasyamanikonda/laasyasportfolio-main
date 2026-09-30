import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "/views/LandingPage";
import Projects from "/views/Projects";
import { MusicProvider } from "/context/MusicContext";
import NowPlayingWidget from "/components/NowPlayingWidget";

// This is where we add all our routes for our Personal Website by default, we navigate to the Landing Page
// Whatever page you create, whether it's /blog, /cooking, /about - this maps your URL to the component/page on your website
//
// CHANGED: wrapped everything in MusicProvider so any MusicCard, anywhere, can
// share "now playing" state, and mounted NowPlayingWidget once here so it
// floats globally instead of needing to be added to every page.
export default function App() {
  return (
    <MusicProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/projects" element={<Projects/>} />
        </Routes>
        <NowPlayingWidget />
      </BrowserRouter>
    </MusicProvider>
  );
}
