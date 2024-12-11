import React from "react";
import { Box, Flex, VStack } from "@chakra-ui/react";
import VideoPlayer from "../components/VideoPlayer";
import RightVideos from "../components/RightVideos";
import VideoDetails from "../components/VideoDetail";

const VideoPage = () => {
  return (
    <Flex>
      <VStack>
        <VideoPlayer />
        <VideoDetails />
      </VStack>

      <Box>
        <RightVideos />
      </Box>
    </Flex>
  );
};

export default VideoPage;
