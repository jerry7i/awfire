import React from 'react'
import styled from "styled-components";
import { device } from "../device";
import ContentWrapper from "./ContentWrapper";
import AwfireLogoSrc from "../images/awfire_logo.png";
import phoneIcon from "../images/phone_icon.png";
import emailIcon from "../images/email_icon.png";

const HeaderContainer = styled.div`
	z-index: 99;
	border-bottom: solid 2px #aaa;
	background-color: #fff;
`;

const HeaderContent = styled.div`
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
`;

const HeaderTitle = styled.h1`
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
	width: 25px;
	height: 25px;
	margin-right: 5px;
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
		<ContentWrapper paddingTopBot="10px">
			<HeaderContent>
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
			</HeaderContent>
		</ContentWrapper>
	</HeaderContainer>
);


export default Header;