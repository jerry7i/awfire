import React from "react";
import styled from "styled-components";
import { device } from "../device";

import ContentWrapper from "../components/ContentWrapper";
import showcaseBg from "../images/fire_sprinkler_bg.jpg";

const LandingContainer = styled.div`
	display: block;
`;

const ShowcaseContentWrapper = styled(ContentWrapper)`
	display: flex;
	align-items: center;
	height: inherit;
`;

const Showcase = styled.section`
	background-image: url(${showcaseBg});
	background-size: cover;
	background-position: 40% 0;
	width: 100%;

	@media ${device.mobileS} {
		height: 400px;
		h1 {
			font-size: 25px;
		}
	}

	@media ${device.mobileL} {
		height: 450px;
		h1 {
			font-size: 30px;
		}
	}

	@media ${device.tablet} {
		height: 550px;
		h1 {
			font-size: 40px;
		}
	}

	@media ${device.laptop} {
		height: 700px;
		h1 {
			font-size: 50px;
		}
	}

	@media ${device.desktop} {
		height: 850px;
		h1 {
			font-size: 60px;
		}
	}
`;

const ShowcaseBig = styled.h1`
	flex: 1;
	font-size: 40px;
	color: #fff;
	text-shadow: 2.5px 2.5px 0 #ff6347;
`;

// to be modified
const ShowcaseSmall = styled.p`
	flex: 1;
`;

const Landing = () => (
	<LandingContainer>
		<Showcase>
			<ShowcaseContentWrapper>
				<div>
					<ShowcaseBig>
						Site currently under construction
					</ShowcaseBig>
				</div>
			</ShowcaseContentWrapper>
		</Showcase>
	</LandingContainer>
);


export default Landing;