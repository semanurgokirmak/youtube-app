import React from "react";
import { Box, Input } from "@chakra-ui/react";

const SearchBar = () => {
  return (
    <Box>
      <Input
        placeholder="Search"
        borderRadius="full"
        backgroundColor={"#EBEBEB"}
        width={{ base: "10%", md: "80%", lg: "700px" }}
        height={{ base: "36px", md: "36px", lg: "36px" }}
      />
    </Box>
  );
};

export default SearchBar;
