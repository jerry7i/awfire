import React from 'react'
import styled from "styled-components";
import { device } from "../device";

import ContentWrapper from "./ContentWrapper";
import phoneIcon from "../images/telephone-fill.svg";
import emailIcon from "../images/envelope-fill.svg";
import houseIcon from "../images/house-door-fill.svg";

const FooterContainer = styled.div`
  background-color: #222;
`;

const FooterContentWrapper = styled(ContentWrapper)`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  column-gap: 150px;
`;

const FooterText = styled.p`
  color: #aaa;
  display: block;
  margin-bottom: 6px;

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

const ContactIcon = styled.img`
	width: 22px;
	height: 22px;
	margin-right: 7px;
	display: inline-block;
  vertical-align: bottom;
  filter: invert(70%);
`;

const Footer = () => (
  <FooterContainer>
    <FooterContentWrapper paddingTopBot="20px">
      <Copyright>
        Copyright &copy; {date.getFullYear()} AWFire Protection. All Rights Reserved
      </Copyright>
      <div>
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
          66 Denne Blvd, Newmarket ON L3Y4H4, Canada
        </FooterText>
      </div>
    </FooterContentWrapper>
  </FooterContainer>
);

export default Footer;