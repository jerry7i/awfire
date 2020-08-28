import React from 'react'
import styled from "styled-components";
import AwfireLogoSrc from "../images/awfire_logo.png";

const HeaderContainer = styled.div`
	width: 100%;
	padding: 10px 8%;
	margin: 0 auto;
  color: #222;
  background-color: #ff5349;
	z-index: 99;
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
	color: #fff;
	// temp
	margin-right: 10px;
`;

const ContactInfo = styled.p`
	color: #fff;
	display: inline-block;
	align-self: flex-end;
`;

const Phone = styled(ContactInfo)`
	margin-right: 10px;
`;

const Email = styled(ContactInfo)``;

const Header = () => (
	<HeaderContainer>
		<div>
			<AwfireLogo src={AwfireLogoSrc}/>
			<HeaderTitle>
				AWFire Protection
			</HeaderTitle>
		</div>
		<div>
			<Phone>Phone: 416-893-6660</Phone>
			<Email>Email: info@AWFire.ca</Email>
		</div>
	</HeaderContainer>
);


export default Header;