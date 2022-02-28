import React, { useEffect } from "react";
import styled from "styled-components";
import Themes from "../Utils/Themes";
import Link from "next/link";

import {
  AiOutlineHome,
  AiOutlineHeart,
  AiOutlineSetting,
} from "react-icons/ai";

import { CgLogOut } from "react-icons/cg";

import { FiVideo } from "react-icons/fi";

import { MdOutlineDownloading } from "react-icons/md";

function Nav({ isOpen, setIsOpen, setLoggedIn }) {
  const wrapperRef = React.useRef(null);
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);
  return (
    <Container isOpen={isOpen} ref={wrapperRef}>
      {/* <Avatar
        src="https://i.scdn.co/image/ab6761610000e5eb62577ac7c0de20745e3fc74c"
        alt=""
      /> */}
      <NavBar>
        <Link href="/" passHref>
          <Icon active>
            <AiOutlineHome />
          </Icon>
        </Link>
        <Link href="/" passHref>
          <Icon>
            <FiVideo />
          </Icon>
        </Link>
        <Link href="/" passHref>
          <Icon>
            <MdOutlineDownloading />
          </Icon>
        </Link>
        <Link href="/" passHref>
          <Icon>
            <AiOutlineHeart />
          </Icon>
        </Link>
        <Link href="/" passHref>
          <Icon>
            <AiOutlineSetting />
          </Icon>
        </Link>
        <Icon onClick={() => setLoggedIn(false)}>
          <CgLogOut />
        </Icon>
      </NavBar>
    </Container>
  );
}

export default Nav;

const Container = styled.div`
  width: 80px;
  height: 100vh;
  background: ${Themes.colors.gray};
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 1.5rem;
  padding: 1.5rem 0;
  position: sticky;
  z-index: 200;
  left: 0;
  top: 0;

  @media (max-width: 768px) {
    position: absolute;
    z-index: 800;
    right: 0;
    left: auto;

    overflow: hidden;
    max-width: ${({ isOpen }) => (isOpen ? "80px" : "0")};
    transition: max-width 0.3s ease-in;
  }
`;

const Avatar = styled.img`
  width: 55%;
  border-radius: 50%;
  margin: 0 auto;
`;

const NavBar = styled.nav`
  display: flex;
  flex-direction: column;
  width: 100%;
  row-gap: 1.5rem;
`;

const Icon = styled.a`
  font-size: 2.2rem;
  background: ${(p) => (p.active ? "#4e515c" : "transparent")};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.6rem;
  color: #fff;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    background: ${(p) => (p.active ? "#4e515c" : "#818696")};
  }
`;
