import React, { useState, useEffect } from "react";
import { VStack, Box, Text, Stack, Image } from "@chakra-ui/react";
import { useAuth } from "../components/AuthContext";
import { useTheme } from "next-themes";

const Subscriptions: React.FC = () => {
  const { isLoggedIn } = useAuth();
  const [subscriptions, setSubscriptions] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);
  const { theme } = useTheme();

  // API key'inizi buraya ekleyiniz
  const apiKey = "[YOUR_API_KEY]";

  useEffect(() => {
    if (!isLoggedIn) {
      setSubscriptions([]);
      setError("User is not logged in.");
      return;
    }

    const token = localStorage.getItem("google_access_token");
    console.log("tokenim:", token);

    if (!apiKey) {
      console.error("API key bulunamadı!");
      setError("API key bulunamadı. Lütfen geçerli bir API key ekleyin.");
      return;
    }

    if (token) {
      fetch(
        `https://youtube.googleapis.com/youtube/v3/subscriptions?part=snippet%2CcontentDetails&mine=true&maxResults=50&key=${apiKey}`,
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
          console.log("data:", data);
        })
        .catch((error) => {
          console.error("Error fetching YouTube subscriptions:", error);
        });
    }
  }, [isLoggedIn, apiKey]);

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
              <Text
                fontSize="sm"
                color={theme === "dark" ? "white" : "gray.700"}
              >
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
