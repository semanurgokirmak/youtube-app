import React from "react";
import { Flex, Stack, Image, useBreakpointValue, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import Logo from "./Logo";
import MenuButton from "./MenuButton";
import { ColorModeToggle } from "./Button";
import useSidebarStore from "../store/SidebarStore";
import Userpic from "../Assets/Userpic.svg";
import icon1 from "../Assets/icon1.svg";
import icon2 from "../Assets/icon2.svg";
import icon3 from "../Assets/icon3.svg";
import searchIcon from "../Assets/search.svg";
import { useAuth } from "../components/AuthContext";
import LoginButton from "./LoginButton";
import { useTheme } from "next-themes";

const Navbar = () => {
  const toggleSidebar = useSidebarStore((state) => state.toggleSidebar);

  const isMenuButtonVisible = useBreakpointValue({
    base: true,
    sm: false,
    md: true,
    lg: true,
  });
  const areIconsVisible = useBreakpointValue({ base: false, lg: false });

  const { isLoggedIn } = useAuth();

  const colorModeToggleVisibility = useBreakpointValue({
    base: "none",
    lg: "block",
  });

  const searchBarVisibility = useBreakpointValue({
    base: "none",
    sm: "none",
    md: "block",
  });

  const searchIconVisibility = useBreakpointValue({
    base: "none",
    sm: "block",
    md: "none",
  });

  const { theme } = useTheme();

  const iconStyle = {
    filter: theme === "dark" ? "invert(1)" : "none",
  };

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
      zIndex={1000}
      bg={theme === "light" ? "white" : "black"}
    >
      <Stack direction="row" gap="80px">
        <Stack direction="row" gap="4px" alignItems="center">
          {isMenuButtonVisible && <MenuButton onClick={toggleSidebar} />}
          <Logo />
        </Stack>

        <Box display={searchBarVisibility}>
          <SearchBar />
        </Box>
      </Stack>

      <Stack direction="row" gap="20px" align="center">
        <>
          <Image
            src={icon3}
            alt="Notification Icon"
            boxSize="20px"
            objectFit="contain"
            style={iconStyle}
          />
          <Image
            src={icon2}
            alt="Settings Icon"
            boxSize="20px"
            objectFit="contain"
            style={iconStyle}
          />
          <Image
            src={icon1}
            alt="Messages Icon"
            boxSize="20px"
            objectFit="contain"
            style={iconStyle}
          />
        </>

        {!isLoggedIn ? (
          <LoginButton />
        ) : (
          <Stack direction="row" align="center" gap={2}>
            <Box display={searchIconVisibility}>
              <Image
                src={searchIcon}
                alt="Search Icon"
                boxSize="20px"
                objectFit="contain"
                cursor="pointer"
                title="Search"
                style={iconStyle}
              />
            </Box>

            <Link to="/user">
              <Image
                src={Userpic}
                alt="User Pic"
                borderRadius="full"
                objectFit="contain"
                cursor="pointer"
                title="Your Profile"
                boxSize={{ base: "30px", sm: "35px", md: "40px" }}
                minW="30px"
              />
            </Link>
          </Stack>
        )}

        <Box display={colorModeToggleVisibility}>
          <ColorModeToggle />
        </Box>
      </Stack>
    </Flex>
  );
};

export default Navbar;
