import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Box, VStack, Text, Stack, Image } from "@chakra-ui/react";

const SearchResultsPage: React.FC = () => {
  const [videos, setVideos] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);
  const { search } = useLocation();
  const query = new URLSearchParams(search).get("query") || "";
  const navigate = useNavigate();

  useEffect(() => {
    const fetchVideos = async () => {
      return;
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${query}&key=AIzaSyCGcjquom4qj-y37zCvZbJwzq3MOY1ODRQ`
        );
        const data = await response.json();
        setVideos(data.items);
        setError(null);
      } catch (error) {
        setError("Failed to fetch videos");
      }
    };

    if (query) {
      fetchVideos();
    }
  }, [query]);

  return (
    <Box p={4}>
      <Text fontSize="lg" fontWeight="bold" mb={4} ml={4}>
        Search Results for: "{query}"
      </Text>
      {error && <Text color="red.500">{error}</Text>}
      <VStack align="flex-start" gap={2}>
        {videos.length > 0 ? (
          videos.map((video, index) => (
            <Stack
              key={index}
              direction="column"
              align="flex-start"
              gap={5}
              w="full"
              cursor="pointer"
              onClick={() => navigate(`/video/${video.id.videoId}`)}
            >
              <Stack
                direction="row"
                align="flex-start"
                gap={4}
                w="full"
                p={4}
                borderRadius="md"
              >
                <Image
                  src={video.snippet.thumbnails.default.url}
                  alt={video.snippet.title}
                  width={"400px"}
                  height={"225px"}
                />
                <Box>
                  <Text fontSize="md" fontWeight="bold" mb={1}>
                    {video.snippet.title}
                  </Text>
                  <Text fontSize="xs" color="gray.500">
                    {video.snippet.channelTitle} •{" "}
                    {new Date(video.snippet.publishedAt).toLocaleDateString(
                      "tr-TR"
                    )}
                  </Text>
                </Box>
              </Stack>
            </Stack>
          ))
        ) : (
          <Text>No videos found for "{query}".</Text>
        )}
      </VStack>
    </Box>
  );
};

export default SearchResultsPage;
