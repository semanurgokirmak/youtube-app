import React, { useEffect, useState, useCallback } from "react";
import { Image, Flex, Box, Button } from "@chakra-ui/react";
import mtop from "../Assets/userpage/mtop.svg";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import MargetPhelps from "../components/MargaretPhelps";
import UserpageRecommended from "../components/UserpageRecommended";
import VideoCarousel from "../data/VideoCarousel";
import { Video } from "../interfaces/Video";
import { useAuth } from "../components/AuthContext";

const UserPage = () => {
  const [margaretPhelpsData, setMargaretPhelpsData] = useState<Array<Video>>(
    []
  );
  const { setIsLoggedIn } = useAuth();
  const navigate = useNavigate();
  const apiKey = "[YOUR_API_KEY]";

  const fetchChannelData = useCallback(async () => {
    try {
      const res = await axios.get(
        "https://www.googleapis.com/youtube/v3/channels",
        {
          params: {
            part: "snippet,contentDetails",
            mine: "true",
            key: apiKey,
          },
        }
      );
      const channelId = res.data.items[0].id;
      fetchVideosFromChannel(channelId);
    } catch (error) {
      console.error(error);
    }
  }, []);

  const fetchVideosFromChannel = useCallback(async (channelId: string) => {
    try {
      const res = await axios.get(
        "https://www.googleapis.com/youtube/v3/search",
        {
          params: {
            part: "snippet,contentDetails",
            channelId: channelId,
            maxResults: 20,
            key: apiKey,
          },
        }
      );
      setMargaretPhelpsData(res.data.items);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    fetchChannelData();
  }, [fetchChannelData]);

  const handleVideoClick = (videoId: string) => {
    navigate(`/video/${videoId}`);
  };

  const handleLogout = () => {
    localStorage.removeItem("google_access_token");
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <div>
      <Image
        src={mtop}
        alt="Top Image"
        width="100%"
        height={"280px"}
        objectFit="contain"
        position="relative"
        zIndex={-1}
      />

      <Flex justifyContent="space-between" alignItems="flex-start">
        <Box flex="3">
          <MargetPhelps />
        </Box>

        <Box flex="1">
          <UserpageRecommended />
        </Box>
      </Flex>

      <Flex justifyContent="space-between" alignItems="center" mt={5} mx={6}>
        <Button>Share Video</Button>
        <Button onClick={handleLogout} colorScheme="red">
          Log Out
        </Button>
      </Flex>

      <Box mt={5}>
        {margaretPhelpsData.length === 0 ? (
          <Box textAlign="center" mt={5}>
            No video uploaded yet.
          </Box>
        ) : (
          <VideoCarousel
            ProfileTitle="Margaret Phelps Videos"
            videos={margaretPhelpsData}
            isBig={false}
            onVideoClick={handleVideoClick}
          />
        )}
      </Box>
    </div>
  );
};

export default UserPage;
