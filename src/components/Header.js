import React, { useState, useEffect } from 'react'
import styled from "styled-components";
import { device } from "../device";
import ContentWrapper from "./ContentWrapper";
import AwfireLogoSrc from "../images/awfire_logo.png";
import phoneIcon from "../images/telephone.svg";
import emailIcon from "../images/envelope.svg";

const HeaderContainer = styled.div`
	position: fixed;
	top: ${props => props.showHeader ? "0px" : "-200px"};
	z-index: 99; 
	width: 100%;
	box-shadow: 0 1px 3px rgba(0,0,0,.2);
	background-color: #fff;
	transition: top 300ms;
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
	display: inline-block;
	vertical-align: -25px;

	@media ${device.mobileL} {
		margin: 5px 15px 10px 0;
	}
`;

const HeaderTitle = styled.h1`
	/* font-family: 'Montserrat', sans-serif; */
	/* font-weight: 700; */
	font-size: 2.3em;
	display: inline-block;
	color: #e22;
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


const Header = () => {
	const [showHeader, setShowHeader] = useState(true);

	const handleScroll = (prevPos) => {
		setShowHeader(window.scrollY < 200);
	}

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);

		return (() => {
			window.removeEventListener("scroll", handleScroll);
		});
	}, [showHeader]);

	
	return (
	<HeaderContainer showHeader={showHeader}>
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
)};


export default Header;