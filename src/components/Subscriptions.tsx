import React from "react";
import { VStack, Box, Text, Stack, Image } from "@chakra-ui/react";

const subscriptions = [
  { name: "Gussie Singleton", profilePic: "https://via.placeholder.com/40" },
  { name: "Nora Francis", profilePic: "https://via.placeholder.com/40" },
  { name: "Belle Briggs", profilePic: "https://via.placeholder.com/40" },
  { name: "Eunice Cortez", profilePic: "https://via.placeholder.com/40" },
  { name: "Emma Hanson", profilePic: "https://via.placeholder.com/40" },
  { name: "Leah Berry", profilePic: "https://via.placeholder.com/40" },
  { name: "Gussie Singleton", profilePic: "https://via.placeholder.com/40" },
  { name: "Nora Francis", profilePic: "https://via.placeholder.com/40" },
  { name: "Belle Briggs", profilePic: "https://via.placeholder.com/40" },
  { name: "Eunice Cortez", profilePic: "https://via.placeholder.com/40" },
  { name: "Emma Hanson", profilePic: "https://via.placeholder.com/40" },
  { name: "Leah Berry", profilePic: "https://via.placeholder.com/40" },
];

const Subscriptions: React.FC = () => {
  return (
    <Box w="full">
      <Text
        fontSize="sm"
        fontWeight="bold"
        mb={4}
        color="gray.600"
        textAlign="left"
      >
        Subscriptions
      </Text>
      <VStack align="flex-start" gap={2}>
        {subscriptions.map((channel, index) => (
          <Stack
            key={`subscription-${index}`}
            direction="row"
            align="center"
            gap={4}
            w="full"
          >
            <Image
              src={channel.profilePic}
              alt={channel.name}
              boxSize="30px"
              borderRadius="full"
            />
            <Text fontSize="sm" color="gray.700">
              {channel.name}
            </Text>
          </Stack>
        ))}
      </VStack>
    </Box>
  );
};

export default Subscriptions;
