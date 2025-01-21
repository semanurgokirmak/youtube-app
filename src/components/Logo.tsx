import React from "react";
import { Image, Box, Flex } from "@chakra-ui/react";
import { useTheme } from "next-themes";
import logo from "../Assets/Shape.svg";
import text from "../Assets/Group.svg";

const Logo = () => {
  const { theme } = useTheme();

  return (
    <Box width={"116px"} height={"25px"}>
      <Flex align="center" justify="center" height="100%">
        <Image src={logo} alt="Logo Icon" width="30%" height="100%" />

        <Image
          src={text}
          alt="Logo Text"
          width="70%"
          height="100%"
          filter={theme === "dark" ? "invert(1)" : "none"}
        />
      </Flex>
    </Box>
  );
};

export default Logo;
