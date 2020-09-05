import React from "react";
import styled from "styled-components";
import { device } from "../device";

import ContentWrapper from "../components/ContentWrapper";
import showcaseBg from "../images/fire_sprinkler_bg.jpg";

const LandingContainer = styled.div`
	display: block;
`;

const StyledContentWrapper = styled(ContentWrapper)`
	display: table;
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

const ShowcaseText = styled.h1`
	display: table-cell;
	vertical-align: middle;
	font-size: 40px;
	color: #fff;
	text-shadow: 2.5px 2.5px 0 #ff6347;
`;

const Landing = () => (
	<LandingContainer>
		<Showcase>
			<StyledContentWrapper>
				<ShowcaseText>
					Site currently under construction
				</ShowcaseText>
			</StyledContentWrapper>
		</Showcase>
	</LandingContainer>
);


export default Landing;