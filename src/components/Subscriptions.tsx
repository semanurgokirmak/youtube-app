import React, { useState, useEffect } from "react";
import { VStack, Box, Text, Stack, Image } from "@chakra-ui/react";
import { useAuth } from "../components/AuthContext";

const Subscriptions: React.FC = () => {
  const { isLoggedIn } = useAuth();
  const [subscriptions, setSubscriptions] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!isLoggedIn) {
      setSubscriptions([]);
      setError("User is not logged in.");
      return;
    }

    const token = localStorage.getItem("google_access_token");
    if (token) {
      fetch(
        "https://youtube.googleapis.com/youtube/v3/subscriptions?part=snippet%2CcontentDetails&mine=true&maxResults=50&key=AIzaSyCGcjquom4qj-y37zCvZbJwzq3MOY1ODRQ",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          setSubscriptions(data.items || []);
          setError(null);
        })
        .catch((error) => {
          console.error("Error fetching YouTube subscriptions:", error);
          setError("Failed to fetch subscriptions.");
        });
    }
  }, [isLoggedIn]);

  if (!isLoggedIn) {
    return null;
  }

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
      {error && (
        <Text color="red.500" mb={4}>
          {error}
        </Text>
      )}
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
