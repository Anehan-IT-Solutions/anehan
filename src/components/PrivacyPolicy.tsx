import React from "react";
import { Box, Container, Typography } from "@mui/material";

const PrivacyPolicy: React.FC = () => {
	return (
		<Box
			sx={{
				minHeight: "100vh",
				backgroundColor: "#f8f9fa",
				py: 8,
				mt: 8,
			}}>
			<Container maxWidth="md">
				<Typography
					variant="h3"
					component="h1"
					sx={{
						fontFamily: "Agrandir",
						fontWeight: 700,
						color: "primary.dark",
						textAlign: "center",
						mb: 6,
					}}>
					Patakaran sa Privacy
					<br />
					<Typography
						component="span"
						variant="h4"
						sx={{
							fontFamily: "Agrandir",
							fontWeight: 400,
							color: "text.secondary",
							fontStyle: "italic",
						}}>
						(Privacy Policy)
					</Typography>
				</Typography>

				<Box
					sx={{
						backgroundColor: "white",
						borderRadius: 2,
						p: 4,
						boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
					}}>
					<Typography
						id="about"
						variant="h5"
						component="h2"
						sx={{
							fontFamily: "Agrandir",
							fontWeight: 600,
							color: "primary.dark",
							mb: 3,
						}}>
						1. Impormasyon na Kinokollect Namin
					</Typography>
					<Typography
						variant="body1"
						sx={{
							mb: 4,
							lineHeight: 1.8,
						}}>
						Kinokollect namin ang impormasyong direktang ibinibigay ninyo sa
						amin, tulad ng kapag gumagawa kayo ng account, gumagamit ng aming
						mga serbisyo, o nakikipag-ugnayan sa amin para sa support.
					</Typography>

					<Box sx={{ borderTop: "1px solid #e0e0e0", my: 4 }} />

					<Typography
						id="team"
						variant="h5"
						component="h2"
						sx={{
							fontFamily: "Agrandir",
							fontWeight: 600,
							color: "primary.dark",
							mb: 3,
						}}>
						2. Paano Namin Ginagamit ang Inyong Impormasyon
					</Typography>
					<Typography
						variant="body1"
						sx={{
							mb: 2,
							lineHeight: 1.8,
						}}>
						Ginagamit namin ang impormasyong nakukuha namin para sa:
					</Typography>
					<Box component="ul" sx={{ pl: 3, mb: 4 }}>
						<Typography component="li" sx={{ mb: 1, lineHeight: 1.8 }}>
							Pagbibigay, pag-maintain, at pagpapabuti ng aming mga serbisyo
						</Typography>
						<Typography component="li" sx={{ mb: 1, lineHeight: 1.8 }}>
							Pag-process ng mga transaksyon at pagpadala ng kaugnay na
							impormasyon
						</Typography>
						<Typography component="li" sx={{ mb: 1, lineHeight: 1.8 }}>
							Pagpadala ng technical notices at support messages
						</Typography>
						<Typography component="li" sx={{ mb: 1, lineHeight: 1.8 }}>
							Pagtugon sa inyong mga komento at katanungan
						</Typography>
					</Box>

					<Box sx={{ borderTop: "1px solid #e0e0e0", my: 4 }} />

					<Typography
						id="our-journey"
						variant="h5"
						component="h2"
						sx={{
							fontFamily: "Agrandir",
							fontWeight: 600,
							color: "primary.dark",
							mb: 3,
						}}>
						3. Pagbabahagi ng Impormasyon
					</Typography>
					<Typography
						variant="body1"
						sx={{
							mb: 4,
							lineHeight: 1.8,
						}}>
						Hindi namin binebenta, ipinagpapalit, o naglilipat ng inyong
						personal na impormasyon sa mga third parties nang walang inyong
						pahintulot, maliban sa mga nakalagay sa patakarang ito.
					</Typography>

					<Box sx={{ borderTop: "1px solid #e0e0e0", my: 4 }} />

					<Typography
						id="showcase"
						variant="h5"
						component="h2"
						sx={{
							fontFamily: "Agrandir",
							fontWeight: 600,
							color: "primary.dark",
							mb: 3,
						}}>
						4. Data Security
					</Typography>
					<Typography
						variant="body1"
						sx={{
							mb: 4,
							lineHeight: 1.8,
						}}>
						Nagiimplement kami ng naaangkop na security measures para
						protektahan ang inyong personal na impormasyon laban sa unauthorized
						access, alteration, disclosure, o destruction.
					</Typography>

					<Box sx={{ borderTop: "1px solid #e0e0e0", my: 4 }} />

					<Typography
						id="contact-info"
						variant="h5"
						component="h2"
						sx={{
							fontFamily: "Agrandir",
							fontWeight: 600,
							color: "primary.dark",
							mb: 3,
						}}>
						5. Mga Karapatan Ninyo
					</Typography>
					<Typography
						variant="body1"
						sx={{
							mb: 2,
							lineHeight: 1.8,
						}}>
						May karapatan kayong:
					</Typography>
					<Box component="ul" sx={{ pl: 3, mb: 4 }}>
						<Typography component="li" sx={{ mb: 1, lineHeight: 1.8 }}>
							Ma-access ang inyong personal na impormasyon
						</Typography>
						<Typography component="li" sx={{ mb: 1, lineHeight: 1.8 }}>
							Itama ang mga maling impormasyon
						</Typography>
						<Typography component="li" sx={{ mb: 1, lineHeight: 1.8 }}>
							I-delete ang inyong account at data
						</Typography>
						<Typography component="li" sx={{ mb: 1, lineHeight: 1.8 }}>
							Mag-opt out sa mga tiyak na komunikasyon
						</Typography>
					</Box>

					<Box sx={{ borderTop: "1px solid #e0e0e0", my: 4 }} />

					<Typography
						variant="h5"
						component="h2"
						sx={{
							fontFamily: "Agrandir",
							fontWeight: 600,
							color: "primary.dark",
							mb: 3,
						}}>
						6. Makipag-ugnayan sa Amin
					</Typography>
					<Typography
						variant="body1"
						sx={{
							mb: 4,
							lineHeight: 1.8,
						}}>
						Kung may mga katanungan kayo tungkol sa Privacy Policy na ito,
						mangyaring makipag-ugnayan sa amin sa{" "}
						<Typography
							component="span"
							sx={{
								color: "primary.main",
								fontWeight: 600,
							}}>
							support@anehan.online
						</Typography>
					</Typography>

					<Box
						sx={{
							backgroundColor: "#f5f5f5",
							p: 3,
							borderRadius: 1,
							mt: 4,
						}}>
						<Typography
							variant="body2"
							sx={{
								fontStyle: "italic",
								textAlign: "center",
								color: "text.secondary",
							}}>
							Huling na-update: 9/17/2025
						</Typography>
					</Box>
				</Box>
			</Container>
		</Box>
	);
};

export default PrivacyPolicy;
