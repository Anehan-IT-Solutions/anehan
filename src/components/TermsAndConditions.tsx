import React from "react";
import { Box, Container, Typography } from "@mui/material";

const TermsAndConditions: React.FC = () => {
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
					Mga Tuntunin ng Serbisyo
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
						(Terms of Service)
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
						1. Pagtanggap sa mga Tuntunin
					</Typography>
					<Typography
						variant="body1"
						sx={{
							mb: 4,
							lineHeight: 1.8,
						}}>
						Sa paggamit ng Anehan, sumasang-ayon kayo na susundin ang mga
						Tuntunin ng Serbisyo na ito. Kung hindi kayo sumasang-ayon sa mga
						tuntuning ito, pakihinto ang paggamit ng aming serbisyo.
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
						2. Paglalarawan ng Serbisyo
					</Typography>
					<Typography
						variant="body1"
						sx={{
							mb: 4,
							lineHeight: 1.8,
						}}>
						Ang Anehan ay isang agricultural marketplace platform na nag-uugnay
						sa mga magsasaka, mamimili, at mga nagbibigay ng serbisyo sa
						agrikultura. Nakakatulong kami sa mga transaksyon at nagbibigay ng
						mga tools para sa pamamahala ng agricultural business.
					</Typography>

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
						3. Mga Pananagutan ng User
					</Typography>
					<Typography
						variant="body1"
						sx={{
							mb: 2,
							lineHeight: 1.8,
						}}>
						Ang mga user ay may pananagutan sa:
					</Typography>
					<Box component="ul" sx={{ pl: 3, mb: 4 }}>
						<Typography component="li" sx={{ mb: 1, lineHeight: 1.8 }}>
							Pagbibigay ng tamang impormasyon
						</Typography>
						<Typography component="li" sx={{ mb: 1, lineHeight: 1.8 }}>
							Pag-iingat sa security ng kanilang mga account
						</Typography>
						<Typography component="li" sx={{ mb: 1, lineHeight: 1.8 }}>
							Pagsunod sa lahat ng applicable na batas at regulasyon
						</Typography>
						<Typography component="li" sx={{ mb: 1, lineHeight: 1.8 }}>
							Paggalang sa ibang mga user at sa kanilang ari-arian
						</Typography>
					</Box>

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
						4. Mga Bawal na Gawain
					</Typography>
					<Typography
						variant="body1"
						sx={{
							mb: 2,
							lineHeight: 1.8,
						}}>
						Hindi maaaring gawin ng mga user ang:
					</Typography>
					<Box component="ul" sx={{ pl: 3, mb: 4 }}>
						<Typography component="li" sx={{ mb: 1, lineHeight: 1.8 }}>
							Paggamit ng serbisyo para sa mga illegal na gawain
						</Typography>
						<Typography component="li" sx={{ mb: 1, lineHeight: 1.8 }}>
							Pag-post ng maling o nakakalinlang na impormasyon
						</Typography>
						<Typography component="li" sx={{ mb: 1, lineHeight: 1.8 }}>
							Pang-aabuso o pananakit sa ibang mga user
						</Typography>
						<Typography component="li" sx={{ mb: 1, lineHeight: 1.8 }}>
							Pagtatangkang makakuha ng unauthorized access sa system
						</Typography>
					</Box>

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
						5. Limitasyon ng Pananagutan
					</Typography>
					<Typography
						variant="body1"
						sx={{
							mb: 4,
							lineHeight: 1.8,
						}}>
						Ang Anehan ay hindi mananagot sa anumang indirect, incidental,
						special, o consequential damages na maaaring magresulta mula sa
						paggamit ng aming serbisyo.
					</Typography>

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
						6. Mga Pagbabago sa mga Tuntunin
					</Typography>
					<Typography
						variant="body1"
						sx={{
							mb: 4,
							lineHeight: 1.8,
						}}>
						Nakalaan namin ang karapatan na baguhin ang mga tuntuning ito
						anumang oras. Aabisuhan ang mga user tungkol sa mga mahahalagang
						pagbabago.
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

export default TermsAndConditions;
