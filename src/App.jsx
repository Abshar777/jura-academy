import AnnouncementBar from './components/AnnouncementBar.jsx'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import IntroAos from './components/IntroAos.jsx'
import Innovations from './components/Innovations.jsx'
import Modules from './components/Modules.jsx'
import Security from './components/Security.jsx'
import EveryTeam from './components/EveryTeam.jsx'
import RoiReport from './components/RoiReport.jsx'
import Vision from './components/Vision.jsx'
import FinalCta from './components/FinalCta.jsx'
import Footer from './components/Footer.jsx'
import CallButton from './components/CallButton.jsx'
import ScrollFX from './components/ScrollFX.jsx'

export default function App() {
  return (
    <>
      <AnnouncementBar />
      <Nav />
      <main>
        <Hero />
        <IntroAos />
        <Innovations />
        <Modules />
        <Security />
        <EveryTeam />
        <RoiReport />
        <Vision />
        <FinalCta />
      </main>
      <Footer />
      <CallButton />
      <ScrollFX />
    </>
  )
}
