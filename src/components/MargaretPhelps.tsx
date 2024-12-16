import React from "react";
import { Box, Flex, Image, Text, VStack } from "@chakra-ui/react";
import profile from "../Assets/userpage/p1.svg";
import m0 from "../Assets/userpage/m0.svg";
import ProfileHeader from "./ProfileHeader";

const MargetPhelps = () => {
  return (
    <Box w="full" p={5}>
      <ProfileHeader
        profileImage={profile}
        title="Margaret Phelps"
        subtitle="235K Subscribed"
      />

      <Flex alignItems="flex-start" gap={4}>
        <Image
          src={m0}
          alt="Video Thumbnail"
          borderRadius="2xl"
          w="400px"
          h="190px"
          objectFit="contain"
        />
        <VStack align="start" gap={2} width={"450px"} mt={"10px"}>
          <Text fontSize="xl" fontWeight="bold">
            Choosing The Best Audio Player Software For Your Computer
          </Text>
          <Text fontSize="12px" color="gray.900" width={"431px"}>
            Your cheap internet-based banner advertising will become one of the
            sought for ads ther are. Today, the world of Internet advestising is
            rapidly evolving beyond banner ads and intrusive pop-ups. Bayles A
            common medium for advertising on the Internet is the use of banner
            ads.
          </Text>
          <Text fontSize="sm" color="gray.500">
            1.1k views • 6 months ago
          </Text>
        </VStack>
      </Flex>
    </Box>
  );
};

export default MargetPhelps;
