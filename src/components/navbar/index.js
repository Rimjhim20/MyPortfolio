import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import tw from "twin.macro";
import LogoImage from "../../assets/logo.png";
import audio from "../../assets/sound.wav"
const NavContainer = styled.div`
  ${tw`
 
  justify-around
  items-center
  flex
    w-1/2
    h-24
`};
`;

const Logo = styled.img`
${tw`
w-24
h-24
`};
`;

const NavLinkComponent = styled.h3`
  ${tw`
text-white
text-3xl
`};
`;

export const NavBar = () => {
  const music = new Audio(audio);
  return (
    <>
      <NavContainer>
        <NavLink to="/">
          <Logo src={LogoImage} onClick={music.play()}/>
        </NavLink>

        <NavLink to="/blogs">
          <NavLinkComponent onClick={music.play()}>Blogs</NavLinkComponent>
        </NavLink>
        <NavLink to="/about">
          <NavLinkComponent onClick={music.play()}>About</NavLinkComponent>
        </NavLink>
        <NavLink to="/contact">
          <NavLinkComponent onClick={music.play()}>Contact me</NavLinkComponent>
        </NavLink>
        <NavLink to="/project">
          <NavLinkComponent onClick={music.play()}>Project</NavLinkComponent>
        </NavLink>
      </NavContainer>
    </>
  );
};
