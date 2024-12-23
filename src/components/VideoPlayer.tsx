import React from "react";
import ReactPlayer from "react-player";
import { Box, Text, HStack, Image, Button } from "@chakra-ui/react";
import more from "../Assets/videopage/More.svg";
import like from "../Assets/videopage/Like.svg";
import dislike from "../Assets/videopage/Dislike.svg";
import share from "../Assets/videopage/Share.svg";
import useSidebarStore from "../store/SidebarStore";

const VideoPlayer = () => {
  const { isSidebarOpen } = useSidebarStore();
  return (
    <Box mt={"48px"} justifyContent="flex-start" left={"100px"}>
      <Box
        width={isSidebarOpen ? "1000px" : "900px"}
        height={isSidebarOpen ? "562px" : "506px"}
        borderRadius="2xl"
        overflow="hidden"
      >
        <ReactPlayer
          url="https://www.youtube.com/watch?v=LXb3EKWsInQ"
          controls={true}
          width="100%"
          height="100%"
        />
      </Box>

      <HStack
        justify="space-between"
        mt={4}
        width={isSidebarOpen ? "1000px" : "900px"}
      >
        <Box>
          <Text fontSize="2xl" fontWeight="bold">
            Dude You Are Getting A Telescope
          </Text>

          <Text fontSize="sm" color="gray.600" mt={"2px"}>
            123k views
          </Text>
        </Box>

        <HStack gap={4} mt={"30px"}>
          <HStack>
            <Button
              bg={"gray.200"}
              borderRadius={"full"}
              width={"90px"}
              height={"35px"}
              color={"black"}
            >
              <Image
                src={like}
                boxSize="20px"
                alt="Like"
                objectFit={"contain"}
              />
              <Text fontSize="sm">123k</Text>
            </Button>
          </HStack>
          <HStack>
            <Button
              bg={"gray.200"}
              borderRadius={"full"}
              width={"90px"}
              height={"35px"}
              color={"black"}
            >
              <Image src={dislike} boxSize="17px" alt="Dislike" />
              <Text fontSize="sm">62k</Text>
            </Button>
          </HStack>
          <HStack>
            <Button
              bg={"gray.200"}
              borderRadius={"full"}
              width={"90px"}
              height={"35px"}
              color={"black"}
            >
              <Image src={share} boxSize="20px" alt="Share" />
              <Text fontSize="sm">Share</Text>
            </Button>
          </HStack>
          <HStack>
            <Image src={more} boxSize="20px" alt="More" objectFit={"contain"} />
          </HStack>
        </HStack>
      </HStack>
    </Box>
  );
};

export default VideoPlayer;
