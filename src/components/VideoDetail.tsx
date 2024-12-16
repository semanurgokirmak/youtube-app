import React from "react";
import { Box, Text, HStack, Image, VStack, Button } from "@chakra-ui/react";
import profil from "../Assets/videopage/Oval.svg";

const VideoDetails = () => {
  return (
    <Box
      mt={"10px"}
      width="900px"
      bg="white"
      borderRadius="md"
      p={4}
      left={"60px"}
    >
      <HStack align="flex-start" gap={4}>
        <Image src={profil} boxSize="50px" borderRadius="full" alt="Profile" />

        <VStack align="flex-start" gap={1}>
          <Text fontSize="lg" fontWeight="bold">
            Food & Drink
          </Text>
          <Text fontSize="sm" color="gray.600">
            Published on 14 Jun 2019
          </Text>
        </VStack>

        <Button bg="red" size="sm" ml="auto" borderRadius={"full"}>
          Subscribe 2.3m
        </Button>
      </HStack>

      <Text fontSize="sm" color="gray.700" mt={4}>
        A successful marketing plan relies heavily on the pulling-power of
        advertising copy. Writing result-oriented ad copy is difficult, as it
        must appeal to, entice, and convince consumers to take action. There is
        no magic formula to write perfect ad copy; it is based on a number of
        factors, including ad placement, demographic, even the consumer's mood
        when they see your ad.
      </Text>
    </Box>
  );
};
export default VideoDetails;
