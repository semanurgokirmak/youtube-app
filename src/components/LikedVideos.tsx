import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Box, VStack, Text, Stack, Image } from "@chakra-ui/react";

const LikedVideos: React.FC = () => {
  const [likedVideos, setLikedVideos] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("google_access_token");

    if (!token) {
      setError("User is not logged in or token is missing.");
      return;
    }

    fetch(
      "https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=50&playlistId=LL",
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
        console.log("Fetched Data:", data);
        setLikedVideos(data.items || []);
        setError(null);
      })
      .catch((error) => {
        console.error("Error fetching liked videos:", error);
      });
  }, []);

  const handleVideoClick = (videoId: string) => {
    navigate(`/video/${videoId}`);
  };

  return (
    <Box w="full" p={4}>
      <Text fontSize="lg" fontWeight="bold" mb={4} ml={4} color="gray.600">
        Liked Videos
      </Text>
      {error && (
        <Text color="red.500" mb={4}>
          {error}
        </Text>
      )}
      <VStack align="flex-start" gap={2}>
        {likedVideos.length > 0 ? (
          likedVideos.map((video, index) => (
            <Stack
              key={`liked-video-${index}`}
              direction="column"
              align="flex-start"
              gap={5}
              w="full"
              cursor="pointer"
              onClick={() => handleVideoClick(video.contentDetails.videoId)}
            >
              <Stack
                direction="row"
                align="flex-start"
                gap={4}
                w="full"
                p={4}
                borderRadius="md"
                boxShadow="lg"
              >
                <Image
                  src={
                    video.snippet.thumbnails.maxres
                      ? video.snippet.thumbnails.maxres.url
                      : video.snippet.thumbnails.high.url
                  }
                  alt={video.snippet.title}
                  width={"200px"}
                  height={"112px"}
                  borderRadius="md"
                />

                <Box>
                  <Text fontSize="md" fontWeight="bold" mb={1}>
                    {video.snippet.title}
                  </Text>
                  <Text fontSize="xs" color="gray.500">
                    {video.snippet.videoOwnerChannelTitle} •{" "}
                    {new Date(video.snippet.publishedAt).toLocaleDateString(
                      "tr-TR"
                    )}
                  </Text>
                </Box>
              </Stack>
            </Stack>
          ))
        ) : (
          <Text>No liked videos found.</Text>
        )}
      </VStack>
    </Box>
  );
};

export default LikedVideos;
