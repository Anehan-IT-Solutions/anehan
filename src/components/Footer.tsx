import React from "react";
import {
	Box,
	Container,
	Typography,
	useTheme,
	alpha,
	Link,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const Footer: React.FC = () => {
	const theme = useTheme();

	return (
		<Box
			component="footer"
			sx={{
				backgroundColor: "#a1c897",
				color: theme.palette.text.secondary,
				textAlign: "center",
				py: 4,
				borderTop: (theme) =>
					`1px solid ${alpha(theme.palette.grey[500], 0.2)}`,
			}}>
			<Container>
				<Box sx={{ mb: 2 }}>
					<Link
						component={RouterLink}
						to="/privacy-policy"
						sx={{
							color: "primary.dark",
							textDecoration: "none",
							mr: 3,
							"&:hover": {
								textDecoration: "underline",
							},
						}}>
						Privacy Policy
					</Link>
					<Link
						component={RouterLink}
						to="/terms-and-conditions"
						sx={{
							color: "primary.dark",
							textDecoration: "none",
							"&:hover": {
								textDecoration: "underline",
							},
						}}>
						Terms and Conditions
					</Link>
				</Box>
				<Typography variant="body2">
					<Typography
						component="span"
						sx={{
							fontFamily: "Agrandir",
							fontWeight: 700,
							color: "primary.dark",
						}}>
						anehan
					</Typography>{" "}
					&copy; {new Date().getFullYear()} &middot; All rights reserved.
				</Typography>
			</Container>
		</Box>
	);
};

export default Footer;
