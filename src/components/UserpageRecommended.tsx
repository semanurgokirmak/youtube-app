import React from "react";
import { Box, Flex, Image, Text, VStack } from "@chakra-ui/react";
import flora from "../Assets/userpage/p2.svg";
import violet from "../Assets/userpage/p3.svg";
import phillip from "../Assets/userpage/p4.svg";

const UserpageRecommended = () => {
  const recommendedChannels = [
    {
      name: "Flora Benson",
      image: flora,
    },
    {
      name: "Violet Cobb",
      image: violet,
    },
    {
      name: "Phillip Mullins",
      image: phillip,
    },
  ];

  return (
    <Box>
      <Text fontSize="lg" fontWeight="bold" mb={4}>
        Recommended Channels
      </Text>
      <VStack align="start" gap={4}>
        {recommendedChannels.map((channel, index) => (
          <Flex key={index} align="center" gap={4}>
            <Image
              src={channel.image}
              alt={channel.name}
              borderRadius="full"
              boxSize="40px"
            />
            <Text fontSize="sm" fontWeight="medium">
              {channel.name}
            </Text>
          </Flex>
        ))}
      </VStack>
    </Box>
  );
};

export default UserpageRecommended;
