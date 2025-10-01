import React, { useState } from "react";
import {
	AppBar,
	Toolbar,
	Typography,
	Button,
	IconButton,
	Box,
	Container,
	Menu,
	MenuItem,
	useTheme,
	useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-scroll";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("md"));
	const location = useLocation();
	const navigate = useNavigate();
	const isHomePage = location.pathname === "/";
	const isPrivacyPage = location.pathname === "/privacy-policy";
	const isTermsPage = location.pathname === "/terms-and-conditions";

	const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
		setIsMobileMenuOpen(true);
	};

	const handleMenuClose = () => {
		setAnchorEl(null);
		setIsMobileMenuOpen(false);
	};

	const menuItems = [
		{ label: "Home", to: "home" },
		{ label: "About", to: "contents" },
		{ label: "Team", to: "team" },
		{ label: "Timeline", to: "our-journey" },
		{ label: "Showcase", to: "showcase" },
		{ label: "Contact", to: "contact-info" },
	];

	return (
		<AppBar
			position="fixed"
			sx={{
				backgroundColor: "white",
				backdropFilter: "blur(10px)",
				boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
				borderBottom: "1px solid rgba(0, 194, 97, 0.1)",
			}}>
			<Container maxWidth="lg">
				<Toolbar disableGutters>
					{/* Logo */}
					<Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
						<img
							src="/anehan-logo.png"
							alt="Anehan Logo"
							style={{ height: "48px", width: "auto" }}
						/>
						<Typography
							variant="h5"
							component="span"
							sx={{
								ml: 2,
								fontWeight: "bold",
								color: "#00c261",
								fontFamily: "Agrandir",
							}}>
							anehan
						</Typography>
					</Box>

					{/* Desktop Navigation */}
					{!isMobile && (
						<Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
							{menuItems.map((item) => (
								<Button
									key={item.label}
									component={isHomePage ? Link : RouterLink}
									to={isHomePage ? item.to : `/#${item.to}`}
									spy={isHomePage}
									smooth={isHomePage}
									offset={isHomePage ? -70 : 0}
									duration={isHomePage ? 500 : 0}
									onClick={(e) => {
										if (isPrivacyPage || isTermsPage) {
											e.preventDefault();
											// Navigate to homepage first, then scroll to section
											navigate("/");
											setTimeout(() => {
												const element = document.getElementById(item.to);
												if (element) {
													const yOffset = -70;
													const y =
														element.getBoundingClientRect().top +
														window.pageYOffset +
														yOffset;
													window.scrollTo({ top: y, behavior: "smooth" });
												}
											}, 200);
										}
									}}
									sx={{
										color: "#00c261",
										cursor: "pointer",
										"&:hover": {
											color: "#00a555",
										},
									}}>
									{item.label}
								</Button>
							))}
						</Box>
					)}

					{/* Mobile menu button */}
					{isMobile && (
						<>
							<IconButton
								size="large"
								edge="end"
								color="inherit"
								sx={{ color: "#00c261" }}
								aria-label="menu"
								onClick={handleMenuClick}>
								<MenuIcon />
							</IconButton>
							<Menu
								anchorEl={anchorEl}
								open={isMobileMenuOpen}
								onClose={handleMenuClose}
								PaperProps={{
									sx: {
										mt: 1.5,
										backgroundColor: "rgba(255, 255, 255, 0.95)",
										backdropFilter: "blur(8px)",
										color: "#00c261",
									},
								}}>
								{menuItems.map((item) => (
									<MenuItem
										key={item.label}
										onClick={() => {
											handleMenuClose();
											if (isHomePage) {
												// Use setTimeout to ensure menu closes before scrolling
												setTimeout(() => {
													const element = document.getElementById(item.to);
													if (element) {
														const yOffset = -70;
														const y =
															element.getBoundingClientRect().top +
															window.pageYOffset +
															yOffset;
														window.scrollTo({ top: y, behavior: "smooth" });
													}
												}, 100);
											} else if (isPrivacyPage || isTermsPage) {
												// Navigate to homepage first, then scroll to section
												navigate("/");
												setTimeout(() => {
													const element = document.getElementById(item.to);
													if (element) {
														const yOffset = -70;
														const y =
															element.getBoundingClientRect().top +
															window.pageYOffset +
															yOffset;
														window.scrollTo({ top: y, behavior: "smooth" });
													}
												}, 200);
											} else {
												// Navigate to homepage with hash
												window.location.href = `/#${item.to}`;
											}
										}}
										sx={{
											cursor: "pointer",
											"&:hover": {
												backgroundColor: "rgba(0, 194, 97, 0.1)",
											},
										}}>
										{item.label}
									</MenuItem>
								))}
							</Menu>
						</>
					)}
				</Toolbar>
			</Container>
		</AppBar>
	);
};

export default Navbar;
