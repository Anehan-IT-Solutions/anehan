import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Showcase from "./components/Showcase";
// import TechStack from './components/TechStack'
import Team from "./components/Team";
import OurJourney from "./components/OurJourney";
import Contents from "./components/Contents";
import Prototype from "./components/Prototype";
import ContactInfo from "./components/ContactInfo";
import Footer from "./components/Footer";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsAndConditions from "./components/TermsAndConditions";
import ScrollToTop from "./components/ScrollToTop";
import theme from "./theme";
import "./App.css";

function App() {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Router>
				<ScrollToTop />
				<Navbar />
				<Routes>
					<Route
						path="/"
						element={
							<>
								<Home />
								{/* <TechStack /> */}

								<Contents />

								<Prototype />
								<OurJourney />
								<Showcase />
								<Team />

								<ContactInfo />
							</>
						}
					/>
					<Route path="/privacy-policy" element={<PrivacyPolicy />} />
					<Route
						path="/terms-and-conditions"
						element={<TermsAndConditions />}
					/>
				</Routes>
				<Footer />
			</Router>
		</ThemeProvider>
	);
}

export default App;
