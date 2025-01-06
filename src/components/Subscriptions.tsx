import React, { useState, useEffect } from "react";
import { VStack, Box, Text, Stack, Image } from "@chakra-ui/react";

const Subscriptions: React.FC = () => {
  const [subscriptions, setSubscriptions] = useState<any[]>([]);

  useEffect(() => {
    const token = localStorage.getItem("google_token");

    if (token) {
      fetch(
        "https://youtube.googleapis.com/youtube/v3/subscriptions?part=snippet%2CcontentDetails&mine=true&key=AIzaSyCGcjquom4qj-y37zCvZbJwzq3MOY1ODRQ",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
        .then((response) => response.json())
        .then((data) => {
          console.log("YouTube Subscriptions data:", data);
          setSubscriptions(data.items || []);
        })
        .catch((error) => {
          console.error("Error fetching YouTube subscriptions:", error);
        });
    }
  }, []);

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
        {subscriptions.length > 0 ? (
          subscriptions.map((channel, index) => (
            <Stack
              key={`subscription-${index}`}
              direction="row"
              align="center"
              gap={4}
              w="full"
            >
              <Image
                src={channel.snippet.thumbnails.default.url}
                alt={channel.snippet.title}
                boxSize="30px"
                borderRadius="full"
              />
              <Text fontSize="sm" color="gray.700">
                {channel.snippet.title}
              </Text>
            </Stack>
          ))
        ) : (
          <Text>No subscriptions found.</Text>
        )}
      </VStack>
    </Box>
  );
};

export default Subscriptions;
