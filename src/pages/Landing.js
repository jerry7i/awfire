import React from "react";
import styled from "styled-components";
import { device } from "../device";

import PaddingWrapper from "../components/PaddingWrapper";
import showcaseBg from "../images/fire_sprinkler_bg.jpg";

const LandingContainer = styled.div`
	display: block;
`;

const Showcase = styled.section`
	background-image: url(${showcaseBg});
	background-size: cover;
	background-position: 40% 0;
	width: 100%;

	@media ${device.mobileS} {
		height: 400px;
		padding-top: 150px;
		h1 {
			font-size: 25px;
		}
	}

	@media ${device.mobileL} {
		height: 450px;
		padding-top: 150px;
		h1 {
			font-size: 30px;
		}
	}

	@media ${device.tablet} {
		height: 550px;
		padding-top: 200px;
		h1 {
			font-size: 40px;
		}
	}

	@media ${device.laptop} {
		height: 700px;
		padding-top: 250px;
		h1 {
			font-size: 50px;
		}
	}

	@media ${device.desktop} {
		height: 850px;
		padding-top: 350px;
		h1 {
			font-size: 60px;
		}
	}
`;

const ShowcaseText = styled.h1`
	font-size: 40px;
	color: #fff;
	text-shadow: 2.5px 2.5px 0 #ff6347;
`;

const Landing = () => (
	<LandingContainer>
		<Showcase>
			<PaddingWrapper>
				<ShowcaseText>
					Design, Inspect, Test, Troubleshoot & Maintain:
				</ShowcaseText>
			</PaddingWrapper>
		</Showcase>
	</LandingContainer>
);


export default Landing;