import React from "react";
import { Image, Flex, Box } from "@chakra-ui/react";
import mtop from "../Assets/userpage/mtop.svg";
import MargaretPhelpsVideos from "../components/MargaretPhelpsVideos";
import MargetPhelps from "../components/MargaretPhelps";
import UserpageRecommended from "../components/UserpageRecommended";

const UserPage = () => {
  return (
    <div>
      <Image
        src={mtop}
        alt="Top Image"
        width="100%"
        height={"280px"}
        objectFit="contain"
        position="relative"
        top={0}
        left={0}
        zIndex={-1}
      />

      <Flex
        justifyContent="space-between"
        alignItems="flex-start"
        p={5}
        gap={8}
      >
        <Box flex="3">
          <MargetPhelps />
        </Box>

        <Box flex="1">
          <UserpageRecommended />
        </Box>
      </Flex>

      <Box mt={8}>
        <MargaretPhelpsVideos />
      </Box>
    </div>
  );
};

export default UserPage;
