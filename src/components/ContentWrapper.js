import styled from "styled-components";
import { device } from "../device";

const ContentWrapper = styled.div`
  @media ${device.mobileS} {
    padding: ${props => props.paddingTopBot || "15px"} 5%;
  }
  
  @media ${device.tablet} {
    padding: ${props => props.paddingTopBot || "15px"} 8%;
  }

  @media ${device.laptop} {
    padding: ${props => props.paddingTopBot || "15px"} 12%;
  }

  @media ${device.desktop} {
    padding: ${props => props.paddingTopBot || "15px"} 15%;
  }
`;

export default ContentWrapper;