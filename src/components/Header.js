import React from 'react'
import styled from "styled-components";

import PaddingWrapper from "./PaddingWrapper";
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
	justify-content: space-between;
	flex-wrap: wrap;
	align-items: flex-end;
`;

const AwfireLogo = styled.img`
	width: 80px;
	height: 80px;
	padding: 0;
`;

const HeaderTitle = styled.h1`
	display: inline-block;
	color: #e55;
`;

const ContactContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	width: 340px;
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
	margin: 0 auto;
`;

const Phone = styled(ContactInfo)``;
const Email = styled(ContactInfo)``;

const Header = () => (
	<HeaderContainer>
		<PaddingWrapper paddingTopBot="10px">
			<HeaderContent>
				<div style={{textAlign: 'center'}}>
					<AwfireLogo src={AwfireLogoSrc}/>
					<HeaderTitle>
						AWFire Protection
					</HeaderTitle>
				</div>	
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
		</PaddingWrapper>
	</HeaderContainer>
);


export default Header;