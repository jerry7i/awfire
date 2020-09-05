import React from "react";
import styled from "styled-components";
import { device } from "../device";
import showcaseBg from "../images/fire_sprinkler_bg.jpg";

const LandingContainer = styled.div`
	display: block;
`;

const Showcase = styled.section`
	background-image: url(${showcaseBg});
	background-size: cover;
	background-position: 40% 0;
	width: 100%;
	margin-bottom: 30px;	

	@media ${device.mobileS} {
		height: 400px;
		padding-top: 100px;
	}

	@media ${device.mobileL} {
		height: 400px;
		padding-top: 150px;
	}

	@media ${device.tablet} {
		height: 700px;
		padding-top: 250px;
	}
`;

const ShowcaseText = styled.h2`
	color: #fff;
	text-shadow: 2.5px 2.5px 0 #ff6347;
	margin: 0px 30px;
`;

const Landing = () => (
	<LandingContainer>
		<Showcase>
			<ShowcaseText>
				Design, Inspect, Test, Troubleshoot & Maintain:
			</ShowcaseText>
		</Showcase>
	</LandingContainer>
);


export default Landing;