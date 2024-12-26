import React, { useEffect, useState, useCallback } from "react";
import { Box } from "@chakra-ui/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import VideoCarousel from "../data/VideoCarousel";
import { dollyData } from "../data/VideoData";
import { Video } from "../interfaces/Video";

const HomePage = () => {
  const [trendingData, setTrendingData] = useState<Array<Video>>([]);
  const navigate = useNavigate();

  const fetchData = useCallback(async () => {
    try {
      const res = await axios.get(
        "https://youtube.googleapis.com/youtube/v3/videos",
        {
          params: {
            part: "snippet,contentDetails,statistics",
            chart: "mostPopular",
            regionCode: "US",
            key: "AIzaSyCGcjquom4qj-y37zCvZbJwzq3MOY1ODRQ",
          },
        }
      );
      setTrendingData(res.data.items);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleVideoClick = (videoId: string) => {
    navigate(`/video/${videoId}`);
  };

  return (
    <Box w="full" p={3}>
      <VideoCarousel
        ProfileTitle={dollyData.ProfileTitle}
        videos={trendingData}
        isBig={false}
        onVideoClick={handleVideoClick}
      />
    </Box>
  );
};

export default HomePage;
