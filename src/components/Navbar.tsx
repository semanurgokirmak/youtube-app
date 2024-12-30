import React from "react";
import { Flex, Stack, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import Logo from "./Logo";
import MenuButton from "./MenuButton";
import { ColorModeToggle } from "./Button";
import useSidebarStore from "../store/SidebarStore";
import LoginButton from "./LoginButton";
import Userpic from "../Assets/Userpic.svg";
import icon1 from "../Assets/icon1.svg";
import icon2 from "../Assets/icon2.svg";
import icon3 from "../Assets/icon3.svg";

const Navbar = () => {
  const toggleSidebar = useSidebarStore((state) => state.toggleSidebar); // Zustand store'dan toggleSidebar'ı çağırdık

  return (
    <Flex
      justify="space-between"
      align="center"
      width="100%"
      height={"70px"}
      position="fixed"
      top={0}
      left={0}
      px={8}
      py={5}
      background="white"
      zIndex={1000}
    >
      <Stack direction="row" gap="80px">
        <Stack direction="row" gap="4px" alignItems="center">
          <MenuButton onClick={toggleSidebar} />
          <Logo />
        </Stack>
        <SearchBar />
      </Stack>

      <Stack direction="row" gap="20px" align="center">
        <Image
          src={icon3}
          alt="Notification Icon"
          boxSize="20px"
          objectFit="contain"
        />
        <Image
          src={icon2}
          alt="Settings Icon"
          boxSize="20px"
          objectFit="contain"
        />
        <Image
          src={icon1}
          alt="Messages Icon"
          boxSize="20px"
          objectFit="contain"
        />
        <LoginButton />
        <Link to="/user">
          <Image
            src={Userpic}
            alt="User Pic"
            boxSize="40px"
            borderRadius="full"
            objectFit="contain"
            cursor="pointer"
            title="Your Profile"
          />
        </Link>
        <ColorModeToggle />
      </Stack>
    </Flex>
  );
};

export default Navbar;
