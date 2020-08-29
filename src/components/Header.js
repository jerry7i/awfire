import React from 'react'
import styled from "styled-components";
import AwfireLogoSrc from "../images/awfire_logo.png";

const HeaderContainer = styled.div`
	width: 100%;
	padding: 10px 8%;
	margin: 0 auto;
  color: #222;
	z-index: 99;
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	align-items: flex-end;
	border-bottom: solid 2px #aaa;
`;

const AwfireLogo = styled.img`
	width: 80px;
	height: 80px;
	padding: 0;
`;

const HeaderTitle = styled.h1`
	display: inline-block;
	color: #e55;
	// temp
	margin-right: 10px;
`;

const ContactContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	width: 340px;
`;

const ContactInfo = styled.p`
	color: #333;
	display: inline-block;
	margin: auto;
`;

const Phone = styled(ContactInfo)``;
const Email = styled(ContactInfo)``;

const Header = () => (
	<HeaderContainer>
		<div style={{textAlign: 'center'}}>
			<AwfireLogo src={AwfireLogoSrc}/>
			<HeaderTitle>
				AWFire Protection
			</HeaderTitle>
		</div>	
		<ContactContainer>
			<Phone>Phone: 416-893-6660</Phone>
			<Email>Email: info@AWFire.ca</Email>
		</ContactContainer>
	</HeaderContainer>
);


export default Header;