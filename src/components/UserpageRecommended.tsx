import React from "react";
import { Box, Flex, Image, Text, VStack, Button } from "@chakra-ui/react";
import flora from "../Assets/userpage/p2.svg";
import violet from "../Assets/userpage/p3.svg";
import phillip from "../Assets/userpage/p4.svg";
import bell from "../Assets/userpage/bell.svg";

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
      <Flex align="center" gap={2} mb={"20px"} ml={"100px"}>
        <Image src={bell} alt="bell" boxSize="20px" />
        <Button bg="red" size="sm" borderRadius={"full"}>
          Subscribe
        </Button>
      </Flex>

      <Text fontSize="sm" mb={4} color={"gray.400"}>
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
