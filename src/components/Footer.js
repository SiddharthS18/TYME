//Footer for the page
import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Twitter,
} from "@material-ui/icons";
import styled from "styled-components";
import logo from "../resources/tymet.png";

const Container = styled.div`
  display: flex;
  background: transparent;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  color: white;
`;

const LogoImg = styled.img`
  width: 80px;
`;

const Desc = styled.p`
  color: white;
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.h3`
  color: white;
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  cursor: pointer;
`;

const ListItem = styled.li`
  color: white;
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  color: white;
  flex: 1;
  padding: 20px;
`;

const ContactItem = styled.div`
  color: white;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <LogoImg src={logo} alt="img" />
        <Desc>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Terms</ListItem>
          <ListItem>Pricing</ListItem>
          <ListItem>Coins</ListItem>
          <ListItem>Community</ListItem>
          <ListItem>Support</ListItem>
          <ListItem>TYME Token</ListItem>
          <ListItem>Tokenomics</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} /> +91 999999999
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} /> support@tyme.com
        </ContactItem>
      </Right>
    </Container>
  );
};

export default Footer;
