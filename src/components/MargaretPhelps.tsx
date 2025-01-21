import React, { useEffect, useState } from "react";
import { Box, Button, Flex, Image, Text, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const MargaretPhelps = () => {
  const [playlist, setPlaylist] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const token = localStorage.getItem("google_access_token");

  const fetchPlaylistData = async () => {
    if (!token) {
      setError("User is not logged in or token is missing.");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(
        "https://youtube.googleapis.com/youtube/v3/playlists?part=snippet&mine=true&maxResults=5",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
      }

      const data = await response.json();
      setPlaylist(data.items || []);
      setLoading(false);
      setError(null);
    } catch (error) {
      console.error("Oynatma listesi alınırken hata oluştu:", error);
      setError("Failed to fetch playlists.");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPlaylistData();
  }, []);

  const handleVideoClick = (playlistId: string) => {
    navigate(`/playlist/${playlistId}`);
  };

  return (
    <Box w="full" p={5}>
      {loading ? (
        <Text>Yükleniyor...</Text>
      ) : error ? (
        <Text color="red.500">{error}</Text>
      ) : playlist.length === 0 ? (
        <Box textAlign="flex-start" mt={5}>
          <Button> Oynatma Listesi Oluştur</Button>
        </Box>
      ) : (
        <VStack align="start" gap={4}>
          <Text fontSize="2xl" fontWeight="bold" mb={4}>
            Playlists
          </Text>
          <Flex wrap="wrap" justify="flex-start" gap={6}>
            {playlist.map((item) => (
              <Box
                key={item.id}
                maxW="250px"
                borderRadius="md"
                overflow="hidden"
                cursor="pointer"
                onClick={() => handleVideoClick(item.id)}
                boxShadow="lg"
                _hover={{ transform: "scale(1.05)", transition: "0.3s" }}
              >
                <Image
                  src={item.snippet.thumbnails.medium.url}
                  alt="Playlist Thumbnail"
                  borderRadius="md"
                  w="100%"
                  h="140px"
                  objectFit="cover"
                />
                <Box p={4}>
                  <Text fontSize="lg" fontWeight="bold">
                    {item.snippet.title}
                  </Text>
                </Box>
              </Box>
            ))}
          </Flex>
        </VStack>
      )}
    </Box>
  );
};

export default MargaretPhelps;
