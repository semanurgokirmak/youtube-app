import React, { useEffect, useState } from "react";
import {
  Box,
  Text,
  HStack,
  Image,
  VStack,
  Button,
  Link,
} from "@chakra-ui/react";
import profil from "../Assets/videopage/Oval.svg";
import { useParams } from "react-router-dom";
import axios from "axios";
import useSidebarStore from "../store/SidebarStore";

// API Key dışarıdan bir değişken olarak tanımlandı
const apiKey = "[YOUR_API_KEY]";

const VideoDetails = () => {
  const { isSidebarOpen } = useSidebarStore();
  const { videoId } = useParams<{ videoId: string }>();

  const [videoDetails, setVideoDetails] = useState<{
    title: string;
    description: string;
    channelTitle: string;
    publishedAt: string;
    subscriberCount: string;
  } | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const fetchVideoDetails = async () => {
      try {
        const res = await axios.get(
          "https://youtube.googleapis.com/youtube/v3/videos",
          {
            params: {
              part: "snippet,statistics",
              id: videoId,
              key: apiKey,
            },
          }
        );
        const videoData = res.data.items[0];
        setVideoDetails({
          title: videoData.snippet.title,
          description: videoData.snippet.description,
          channelTitle: videoData.snippet.channelTitle,
          publishedAt: new Date(
            videoData.snippet.publishedAt
          ).toLocaleDateString(),
          subscriberCount: `${parseInt(
            videoData.statistics.subscriberCount
          ).toLocaleString()}`,
        });
      } catch (error) {
        console.error(error);
      }
    };

    if (videoId) {
      fetchVideoDetails();
    }
  }, [videoId]);

  if (!videoDetails) {
    return <Text>Video detayı bulunamadı</Text>;
  }

  const truncatedDescription =
    videoDetails.description.length > 100
      ? videoDetails.description.substring(0, 300) + "..."
      : videoDetails.description;

  return (
    <Box
      mt={"10px"}
      width={isSidebarOpen ? "1000px" : "900px"}
      borderRadius="md"
      p={4}
      left={"60px"}
    >
      <HStack align="flex-start" gap={4}>
        <Image src={profil} boxSize="50px" borderRadius="full" alt="Profile" />

        <VStack align="flex-start" gap={0.8}>
          <Text fontSize="lg" fontWeight="bold">
            {videoDetails.channelTitle}
          </Text>
          <Text fontSize="sm" color="gray.600">
            {videoDetails.publishedAt} Tarihinde Yayınlandı
          </Text>
        </VStack>

        <Button bg="red" size="sm" ml="auto" borderRadius={"full"}>
          Subscribe {videoDetails.subscriberCount}
        </Button>
      </HStack>

      <Text fontSize="sm" color="gray.700" mt={4}>
        {isExpanded ? videoDetails.description : truncatedDescription}{" "}
      </Text>

      {videoDetails.description.length > 300 && (
        <Link
          mt={2}
          fontSize="sm"
          color="blue.500"
          onClick={() => setIsExpanded(!isExpanded)}
          style={{ cursor: "pointer" }}
        >
          {isExpanded ? "Daha az" : "Daha fazla"}
        </Link>
      )}
    </Box>
  );
};

export default VideoDetails;
