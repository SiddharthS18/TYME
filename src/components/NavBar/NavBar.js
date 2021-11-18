//Navigation Bar for the Home Page

import React from "react";
import Button from "@material-ui/core/Button";
import { AiFillCaretDown as DownArrow } from "react-icons/ai";
import logo from "../../resources/logot.png";
import tyme from "../../resources/tymetoken.png";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  padding: 20px;
  max-height: 20%;
  background: transparent;
  position: relative;
  z-index: 2;
`;

const Wrapper = styled.div`
  padding: 0px 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Center = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: right;
`;

const MenuItem = styled(Link)`
  font-size: 16px;
  color: white;
  text-decoration: none;
  cursor: pointer;
  margin-right: 20px;
  text-align: center;
  display: flex;
  align-items: center;
`;

const LogoImg = styled.img`
  height: 50px;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <LogoImg src={logo} alt="logo"></LogoImg>
          <LogoImg src={tyme} alt="logo"></LogoImg>
        </Left>
        <Center>
          <Item>
            <MenuItem to="/Buy">
              Buy Crypto
              <DownArrow />
            </MenuItem>
          </Item>
          <Item>
            <MenuItem to="/Market">
              Market
              <DownArrow />
            </MenuItem>
          </Item>
          <Item>
            <MenuItem to="/Trade">
              Trade
              <DownArrow />
            </MenuItem>
          </Item>
          <MenuItem to="/Support">Support</MenuItem>
        </Center>
        <Right>
          <MenuItem to="/SignIn">Sign In</MenuItem>
          <Button color="primary" variant="contained">
            Sign Up
          </Button>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
