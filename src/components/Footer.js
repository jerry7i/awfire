import React from 'react'
import styled from "styled-components";
import { device } from "../device";

import PaddingWrapper from "./PaddingWrapper";
import phoneIcon from "../images/phone_icon.png";
import emailIcon from "../images/email_icon.png";
import houseIcon from "../images/house_icon.png";

const FooterContainer = styled.div`
  background-color: #222;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  column-gap: 150px;
`;

const FooterText = styled.p`
  color: #aaa;
  display: block;

  @media ${device.mobileS} {
    font-size: 12.5px;
  }

  @media ${device.mobileL} {
    font-size: 15px;
  }
`;

const Copyright = styled(FooterText)`
  margin-bottom: 20px;
`;

const date = new Date();

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
  <FooterContainer>
    <PaddingWrapper paddingTopBot="20px">
      <FooterContent>
        <Copyright>
          Copyrights &copy; {date.getFullYear()} All Rights Reserved by AWFire Protection
        </Copyright>
        <ContactInfo>
          <FooterText>
            <ContactIcon src={phoneIcon} />
            416-893-6660
          </FooterText>
          <FooterText>
            <ContactIcon src={emailIcon} />
            info@AWFire.ca
          </FooterText>
          <FooterText>
            <ContactIcon src={houseIcon} />
            2 Goldbrook Crescent, Richmond Hill, ON L4S 1V4
          </FooterText>
        </ContactInfo>
      </FooterContent>
    </PaddingWrapper>
  </FooterContainer>
);

export default Footer;