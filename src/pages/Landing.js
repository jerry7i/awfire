import React from "react";
import styled from "styled-components";
import { device } from "../device";

import ContentWrapper from "../components/ContentWrapper";
import showcaseBg from "../images/fire_sprinkler_bg.jpg";

const LandingContainer = styled.section`
	display: block;
`;

// Showcase
const ShowcaseContentWrapper = styled(ContentWrapper)`
	display: flex;
	align-items: center;
	height: inherit;
`;

const Showcase = styled.div`
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

const ShowcaseBigText = styled.h1`
	flex: 1;
	font-size: 40px;
	color: #fff;
	text-shadow: 2.5px 2.5px 0 #ff6347;
`;

// to be modified
const ShowcaseSmallText = styled.p`
	flex: 1;
`;

const ServicesContentWrapper = styled(ContentWrapper)`
	text-align: center;
	background-color: #f8f8f8;
`;

// Services
const ServicesHeader = styled.h1`
	display: inline-block;
	padding: 0 20px;
	font-size: 25px;
	background-color: inherit;
`;

const ServicesHeaderLine = styled.div`
	height: 20px;
	border-bottom: solid 1px red;
	margin-bottom: 60px;
	background-color: inherit;
`;

const ServicesContainer = styled.div`
	display: block;

	@media ${device.tablet} {
		padding-bottom: ${props => props.paddingBot || "0px"};
		display: flex;
		justify-content: space-between;
		align-items: stretch;
		column-gap: 4%;
	}	
`;

const ServiceCard = styled.div`
	flex: 1;
	padding: 20px 0;
	text-align: center;
	margin-bottom: 20px;
	background-color: #fff;
	box-shadow: 0px 1px 3px rgba(0,0,0,.30);
	transition: transform 100ms, box-shadow 100ms;

	&:hover {
		transform: translate(0, -3px);
		box-shadow: 0px 1px 4px rgba(0,0,0,.4);
	}

	@media ${device.tablet} {
		margin-bottom: 0;
	}
`;

const ServiceText = styled.p`
	font-family: 'Montserrat', sans-serif;
	font-weight: 600;
	color: #f22;
`;

const Landing = () => (
	<LandingContainer>
		<Showcase>
			<ShowcaseContentWrapper>
				<div>
					<ShowcaseBigText>
						Site currently under construction
					</ShowcaseBigText>
				</div>
			</ShowcaseContentWrapper>
		</Showcase>
		<ServicesContentWrapper paddingTopBot="50px">
			<ServicesHeaderLine>
				<ServicesHeader>
					Our Services
				</ServicesHeader>
			</ServicesHeaderLine>
			<ServicesContainer paddingBot="30px">
				<ServiceCard>
					<ServiceText>Fire Safety Plan</ServiceText>
				</ServiceCard>
				<ServiceCard>
					<ServiceText>Fire Extinguisher</ServiceText>
				</ServiceCard>
				<ServiceCard>
					<ServiceText>Kitchen Fire Suppresion</ServiceText>
				</ServiceCard>
			</ServicesContainer>
			<ServicesContainer>
				<ServiceCard>
					<ServiceText>Fire Alarm System</ServiceText>
				</ServiceCard>
				<ServiceCard>
					<ServiceText>Sprinkler System</ServiceText>
				</ServiceCard>
				<ServiceCard>
					<ServiceText>Emergency Lighting System</ServiceText>
				</ServiceCard>
			</ServicesContainer>
		</ServicesContentWrapper>
	</LandingContainer>
);


export default Landing;