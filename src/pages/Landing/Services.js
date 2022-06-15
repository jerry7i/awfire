import React from "react";
import styled from "styled-components";
import { device } from "../../device";

import ContentWrapper from "../../components/ContentWrapper";

const ServicesContentWrapper = styled(ContentWrapper)`
	text-align: center;
	background-color: #f8f8f8;
`;

// Services
const ServicesHeader = styled.h1`
	display: inline-block;
	padding: 0 20px;
  font-family: 'Montserrat', sans-serif;
	font-size: 25px;
	background-color: inherit;
`;

const ServicesHeaderLine = styled.div`
	height: 20px;
	border-bottom: solid 1px red;
	margin-bottom: 60px;
	background-color: inherit;
`;

const ServiceCard = styled.div`
	flex: 1;
	padding: 20px 10px;
	text-align: center;
	margin-bottom: 20px;
	background-color: #fff;
	box-shadow: 0px 1px 3px rgba(0,0,0,.30);
	transition: transform 100ms, box-shadow 100ms;

	&:hover {
		transform: translate(0, -3px);
		box-shadow: 0px 1px 4px rgba(0,0,0,.4);
	}
`;

const ServicesContainer = styled.div`
	display: block;

	@media ${device.laptop} {
		padding-bottom: ${props => props.paddingBot || "0px"};
		display: flex;
		justify-content: space-between;
		align-items: stretch;
		column-gap: 2%;
		
		${ServiceCard} {
			margin-bottom: 0;
		}
	}	
`;

const ServiceText = styled.p`
	font-family: 'Montserrat', sans-serif;
	font-weight: 600;
	color: #f22;
`;

const Services = () => (
  <ServicesContentWrapper paddingTopBot="50px">
    <ServicesHeaderLine>
      <ServicesHeader>
        Our Services
      </ServicesHeader>
    </ServicesHeaderLine>
    <ServicesContainer paddingBot="25px">
      <ServiceCard>
        <ServiceText>Fire Alarm System</ServiceText>
      </ServiceCard>
      <ServiceCard>
        <ServiceText>Fire Extinguisher</ServiceText>
      </ServiceCard>
	  <ServiceCard>
        <ServiceText>Fire Safety Plan</ServiceText>
      </ServiceCard>
    </ServicesContainer>
    <ServicesContainer>
      <ServiceCard>
        <ServiceText>Emergency Lighting</ServiceText>
      </ServiceCard>
      <ServiceCard>
        <ServiceText>Kitchen Fire Suppression System</ServiceText>
      </ServiceCard>
    </ServicesContainer>
  </ServicesContentWrapper>
);

export default Services;