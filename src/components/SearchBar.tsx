import React, { useState, useRef, useEffect } from "react";
import { Box, Input, Text, useBreakpointValue } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "next-themes";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [videos, setVideos] = useState<any[]>([]);
  const navigate = useNavigate();
  const searchBarRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  const handleSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchTerm(query);

    if (!query) {
      setVideos([]);
      return;
    }
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
    setSearchTerm(""); // Başlık tıklandığında arama kutusunu temizle
    navigate(`/search-results?query=${query}`);
    setVideos([]); // Pencereyi kapat
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setVideos([]); // Enter'a basınca da pencereyi kapat
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      searchBarRef.current &&
      !searchBarRef.current.contains(event.target as Node)
    ) {
      setVideos([]); // Arama dışına tıklandığında da pencereyi kapat
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const inputWidth = useBreakpointValue({
    md: "40vw",
    lg: "50vw",
  });

  const inputHeight = useBreakpointValue({
    md: "36px",
    lg: "36px",
  });

  const dropdownWidth = useBreakpointValue({
    md: "40vw",
    lg: "50vw",
  });

  return (
    <Box
      ref={searchBarRef}
      width="full"
      display="flex"
      flexDirection="column"
      alignItems="center"
      mt={4}
    >
      <Input
        value={searchTerm}
        onChange={handleSearch}
        onKeyDown={handleKeyDown}
        placeholder="Search"
        borderRadius="full"
        backgroundColor={theme === "light" ? "#EBEBEB" : "black"}
        color={theme === "light" ? "black" : "white"}
        width={inputWidth}
        height={inputHeight}
        mb={4}
        position="relative"
      />

      {videos.length > 0 && (
        <Box
          maxHeight="400px"
          overflowY="auto"
          border="1px solid #E2E8F0"
          borderRadius="xl"
          width={dropdownWidth}
          position="absolute"
          zIndex={1}
          mt={10}
          bg={theme === "light" ? "white" : "#2D3748"}
        >
          <Box>
            {videos.map((video, index) => (
              <Box key={index} padding="8px" borderBottom="1px solid #E2E8F0">
                <Text
                  fontSize="16px"
                  fontWeight="bold"
                  color={theme === "light" ? "#1A202C" : "#E2E8F0"}
                  cursor="pointer"
                  onClick={() => handleVideoClick(video.snippet.title)} // Başlık tıklandığında arama kutusunu temizle
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
