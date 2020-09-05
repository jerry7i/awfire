import React from 'react'
import styled from "styled-components";
import { device } from "../device";
import phoneIcon from "../images/phone_icon.png";
import emailIcon from "../images/email_icon.png";
import houseIcon from "../images/house_icon.png";

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
	flex-wrap: wrap;
	width: 100%;
	padding: 20px 8%;
	margin: 0 auto;
  background-color: #222;

  @media ${device.mobileS} {
    padding: 20px 5%;
  }
  
  @media ${device.tablet} {
    padding: 20px 8%;
  }

  @media ${device.desktop} {
    padding: 20px 15%
  }
`;

const FooterText = styled.p`
  color: #aaa;
`;

const Copyright = styled(FooterText)`
  @media ${device.mobileS} {
    margin-bottom: 20px;
  }
  
  @media ${device.tablet} {
    margin: 0 100px 10px 0;
  }
`;

const ContactInfo = styled(FooterText)``;

const ContactIcon = styled.img`
	width: 25px;
	height: 25px;
	margin-right: 5px;
	display: inline-block;
  vertical-align: bottom;
  filter: invert(70%);
`;

const Footer = () => (
  <FooterContainer >
    <Copyright>
      Copyrights © 2020 All Rights Reserved by AWFire Protection
    </Copyright>
    <ContactInfo>
      <div>
        <ContactIcon src={phoneIcon} />
        416-893-6660
      </div>
      <div>
        <ContactIcon src={emailIcon} />
        info@AWFire.ca
      </div>
      <div>
        <ContactIcon src={houseIcon} />
        2 Goldbrook Crescent, Richmond Hill, ON L4S 1V4
      </div>
    </ContactInfo>
  </FooterContainer>
);

export default Footer;