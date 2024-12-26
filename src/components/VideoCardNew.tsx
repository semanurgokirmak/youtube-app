import { Box, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { format, formatDistance } from "date-fns";
type VideoCardNewProps = {
  imageSrc: string;
  duration: string;
  title: string;
  date: Date;
};

function parseYouTubeDuration(duration: string) {
  const regex = /PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/;
  const matches = duration.match(regex);
  //@ts-ignore
  const hours = parseInt(matches[1] || 0, 10);
  //@ts-ignore
  const minutes = parseInt(matches[2] || 0, 10);
  //@ts-ignore
  const seconds = parseInt(matches[3] || 0, 10);

  return { hours, minutes, seconds };
}
function formatYouTubeDuration(duration: string) {
  const { hours, minutes, seconds } = parseYouTubeDuration(duration);

  const totalMilliseconds = (hours * 3600 + minutes * 60 + seconds) * 1000;

  const formatted = format(totalMilliseconds, hours > 0 ? "HH:mm:ss" : "mm:ss");
  return formatted;
}
const VideoCardNew = ({
  imageSrc,
  duration,
  title,
  date,
}: VideoCardNewProps) => {
  return (
    <VStack w="400px" align="start" gap={1}>
      <Box position="relative" width="250px" height="150px">
        <Image src={imageSrc} borderRadius="2xl" width="250px" height="150px" />

        <Text
          position="absolute"
          bottom="5px"
          right="10px"
          bg="rgba(0, 0, 0, 0.2)"
          color="white"
          fontSize="12px"
          fontWeight="bold"
          px="5px"
          borderRadius="2xl"
        >
          {formatYouTubeDuration(duration)}
        </Text>
      </Box>
      <Text fontSize="16px">{title}</Text>
      <Text fontSize="13px" color="gray.500">
        {formatDistance(new Date(date), new Date(), {
          addSuffix: true,
        })}
      </Text>
    </VStack>
  );
};

export default VideoCardNew;
