import React, { useState, useRef, useEffect } from "react";
import { Box, Input, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [videos, setVideos] = useState<any[]>([]);
  const navigate = useNavigate();
  const searchBarRef = useRef<HTMLDivElement>(null);

  const handleSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchTerm(query);

    if (!query) {
      setVideos([]);
      return;
    }
    return;
    try {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${query}&key=AIzaSyCGcjquom4qj-y37zCvZbJwzq3MOY1ODRQ`
      );
      const data = await response.json();
      setVideos(data.items);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleVideoClick = (query: string) => {
    navigate(`/search-results?query=${query}`);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setVideos([]);
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      searchBarRef.current &&
      !searchBarRef.current.contains(event.target as Node)
    ) {
      setVideos([]);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <Box
      ref={searchBarRef}
      width="full"
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Input
        value={searchTerm}
        onChange={handleSearch}
        onKeyDown={handleKeyDown}
        placeholder="Search"
        borderRadius="full"
        backgroundColor={"#EBEBEB"}
        width={{ base: "80%", md: "80%", lg: "700px" }}
        height={{ base: "36px", md: "36px", lg: "36px" }}
        mb={4}
        position="relative"
      />

      {videos.length > 0 && (
        <Box
          maxHeight="400px"
          overflowY="auto"
          border="1px solid #E2E8F0"
          borderRadius="xl"
          width={{ base: "80%", md: "80%", lg: "700px" }}
          position="absolute"
          zIndex={1}
          mt={10}
          bg={"white"}
        >
          <Box>
            {videos.map((video, index) => (
              <Box key={index} padding="8px" borderBottom="1px solid #E2E8F0">
                <Text
                  fontSize="16px"
                  fontWeight="bold"
                  color="#1A202C"
                  cursor="pointer"
                  onClick={() => handleVideoClick(video.snippet.title)}
                >
                  {video.snippet.title}
                </Text>
              </Box>
            ))}
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default SearchBar;
