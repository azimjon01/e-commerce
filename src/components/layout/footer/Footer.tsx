import { FaTwitter } from "react-icons/fa6";
import {
  Description,
  FooterContainer,
  FooterSection,
  List,
  ListItem,
  Logo,
  SectionTitle,
  SocialIcons,
} from "./Footer.styles";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterSection>
        <Logo>Cyber</Logo>
        <Description>
          We are a residential interior design firm located in Portland. Our
          boutique studio offers more than
        </Description>
        <SocialIcons>
          <FaTwitter />
          <FaFacebookF />
          <FaTiktok />
          <FaInstagram />
        </SocialIcons>
      </FooterSection>

      <FooterSection>
        <SectionTitle>Services</SectionTitle>
        <List>
          <ListItem>Bonus program</ListItem>
          <ListItem>Gift cards</ListItem>
          <ListItem>Credit and payment</ListItem>
          <ListItem>Service contracts</ListItem>
          <ListItem>Non-cash account</ListItem>
          <ListItem>Payment</ListItem>
        </List>
      </FooterSection>

      <FooterSection>
        <SectionTitle>Assistance to the buyer</SectionTitle>
        <List>
          <ListItem>Find an order</ListItem>
          <ListItem>Terms of delivery</ListItem>
          <ListItem>Exchange and return of goods</ListItem>
          <ListItem>Guarantee</ListItem>
          <ListItem>Frequently asked questions</ListItem>
          <ListItem>Terms of use of the site</ListItem>
        </List>
      </FooterSection>
    </FooterContainer>
  );
};

export default Footer;
