import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './components/Navbar'
import Home from './components/Home'
import Showcase from './components/Showcase'
// import TechStack from './components/TechStack'
import Team from './components/Team'
import OurJourney from './components/OurJourney'
import Contents from './components/Contents'
import Prototype from './components/Prototype'
import ContactInfo from './components/ContactInfo'
import Footer from './components/Footer'
import theme from './theme'
import './App.css'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Home />
      {/* <TechStack /> */}
      
      <Contents />
      
      <Prototype />
      <OurJourney />
      <Showcase />
      <Team />
      
      <ContactInfo />
      <Footer />
      
    </ThemeProvider>
  )
}

export default App
