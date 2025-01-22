import React, { useEffect, useState, useCallback } from "react";
import { Box } from "@chakra-ui/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import VideoCarousel from "../data/VideoCarousel";
import { dollyData } from "../data/VideoData";
import { Video } from "../interfaces/Video";

const HomePage = () => {
  const [trendingData, setTrendingData] = useState<Array<Video>>([]);
  const [recommendedData, setRecommendedData] = useState<Array<Video>>([]);
  const [foodAndDrinkData, setFoodAndDrinkData] = useState<Array<Video>>([]);
  const navigate = useNavigate();
  const apiKey = "[YOUR_API_KEY]";

  const fetchData = useCallback(async () => {
    try {
      const res = await axios.get(
        "https://youtube.googleapis.com/youtube/v3/videos",
        {
          params: {
            part: "snippet,contentDetails,statistics",
            chart: "mostPopular",
            regionCode: "US",
            maxResults: 20,
            key: apiKey,
          },
        }
      );
      setTrendingData(res.data.items);
    } catch (error) {
      console.error(error);
    }
  }, []);

  const fetchRecommendedData = useCallback(async () => {
    try {
      const res = await axios.get(
        "https://youtube.googleapis.com/youtube/v3/videos",
        {
          params: {
            part: "snippet,contentDetails,statistics",
            chart: "mostPopular",
            regionCode: "TR",
            maxResults: 30,
            key: apiKey,
          },
        }
      );
      setRecommendedData(res.data.items);
    } catch (error) {
      console.error(error);
    }
  }, []);

  const fetchFoodAndDrinkData = useCallback(async () => {
    try {
      const res = await axios.get(
        "https://youtube.googleapis.com/youtube/v3/videos",
        {
          params: {
            part: "snippet,contentDetails,statistics",
            chart: "mostPopular",
            regionCode: "DE",
            maxResults: 20,
            key: apiKey,
          },
        }
      );
      setFoodAndDrinkData(res.data.items);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    fetchData();
    fetchRecommendedData();
    fetchFoodAndDrinkData();
  }, [fetchData, fetchRecommendedData, fetchFoodAndDrinkData]);

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
      <VideoCarousel
        ProfileTitle="Recommended"
        videos={recommendedData}
        isBig={true}
        onVideoClick={handleVideoClick}
      />
      <VideoCarousel
        ProfileTitle="Food & Drink"
        videos={foodAndDrinkData}
        isBig={false}
        onVideoClick={handleVideoClick}
      />
    </Box>
  );
};

export default HomePage;
