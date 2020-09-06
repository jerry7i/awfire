import React from 'react'
import styled from "styled-components";
import { device } from "../device";
import ContentWrapper from "./ContentWrapper";
import AwfireLogoSrc from "../images/awfire_logo.png";
import phoneIcon from "../images/telephone.svg";
import emailIcon from "../images/envelope.svg";

const HeaderContainer = styled.div`
	z-index: 99;
	border-bottom: solid 2px #aaa;
	background-color: #fff;
`;

const HeaderContentWrapper = styled(ContentWrapper)`
	display: flex;
	flex-wrap: wrap;
	align-items: flex-end;
	column-gap: 150px;

	@media ${device.mobileS} {
		justify-content: center;
	}

	@media ${device.tablet} {
		justify-content: space-between;	
	}
`;

const Awfire = styled.div`
	text-align: center;
`;

const AwfireLogo = styled.img`
	width: 80px;
	height: 80px;
	margin: 0 auto;

	@media ${device.mobileS} {
		display: block;
	}

	@media ${device.tablet} {
		display: inline-block;
	}
`;

const HeaderTitle = styled.h1`
	font-family: 'Montserrat', sans-serif;
	display: inline-block;
	color: #e55;
`;

const ContactContainer = styled.div`
	flex-basis: 300px;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
`;

const ContactIcon = styled.img`
	width: 22px;
	height: 22px;
	margin-right: 7px;
	display: inline-block;
	vertical-align: bottom;
`;

const PhoneIcon = styled(ContactIcon)``;
const EmailIcon = styled(ContactIcon)``;

const ContactInfo = styled.p`
	color: #333;
	display: inline-block;
`;

const Phone = styled(ContactInfo)``;
const Email = styled(ContactInfo)``;

const Header = () => (
	<HeaderContainer>
		<HeaderContentWrapper paddingTopBot="10px">
			<Awfire>
				<AwfireLogo src={AwfireLogoSrc}/>
				<HeaderTitle>
					AWFire Protection
				</HeaderTitle>
			</Awfire>	
			<ContactContainer>
				<Phone>
					<PhoneIcon src={phoneIcon} />
					416-893-6660
				</Phone>
				<Email>
					<EmailIcon src={emailIcon}/> 
					info@AWFire.ca
				</Email>
			</ContactContainer>
		</HeaderContentWrapper>
	</HeaderContainer>
);


export default Header;