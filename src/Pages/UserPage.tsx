import React, { useEffect, useState, useCallback } from "react";
import { Image, Flex, Box } from "@chakra-ui/react";
import mtop from "../Assets/userpage/mtop.svg";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import MargetPhelps from "../components/MargaretPhelps";
import UserpageRecommended from "../components/UserpageRecommended";
import VideoCarousel from "../data/VideoCarousel";
import { Video } from "../interfaces/Video";

const UserPage = () => {
  const [margaretPhelpsData, setMargaretPhelpsData] = useState<Array<Video>>(
    []
  );
  const navigate = useNavigate();

  const fetchMargaretPhelpsData = useCallback(async () => {
    try {
      const res = await axios.get(
        "https://youtube.googleapis.com/youtube/v3/videos",
        {
          params: {
            part: "snippet,contentDetails,statistics",
            chart: "mostPopular",
            regionCode: "US",
            maxResults: 20,
            key: "AIzaSyCGcjquom4qj-y37zCvZbJwzq3MOY1ODRQ",
          },
        }
      );
      setMargaretPhelpsData(res.data.items);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    fetchMargaretPhelpsData();
  }, [fetchMargaretPhelpsData]);

  const handleVideoClick = (videoId: string) => {
    navigate(`/video/${videoId}`);
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

      <Flex justifyContent="space-between" alignItems="flex-start" gap={8}>
        <Box flex="3">
          <MargetPhelps />
        </Box>

        <Box flex="1">
          <UserpageRecommended />
        </Box>
      </Flex>

      <Box>
        <VideoCarousel
          ProfileTitle="Margaret Phelps Videos"
          videos={margaretPhelpsData}
          isBig={false}
          onVideoClick={handleVideoClick}
        />
      </Box>
    </div>
  );
};

export default UserPage;
