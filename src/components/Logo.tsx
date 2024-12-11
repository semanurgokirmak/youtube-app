import React from "react";
import { Image, Box } from "@chakra-ui/react";
import Black from "../Assets/Black.svg";

const Logo = () => {
  return (
    <Box width={"116px"} height={"25px"}>
      <Image src={Black} alt="Logo" boxSize="100%" />
    </Box>
  );
};

export default Logo;
