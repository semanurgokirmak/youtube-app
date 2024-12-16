import { VStack, Box, Image, Text } from "@chakra-ui/react";

type VideoCardProps = {
  image: string;
  title: string;
  viewsDate: string;
  duration?: string;
};

export default function VideoCard({
  image,
  title,
  viewsDate,
  duration,
}: VideoCardProps) {
  return (
    <VStack w="400px" align="start" gap={2}>
      <Box position="relative" width="250px" height="150px">
        <Image src={image} borderRadius="2xl" width="250px" height="150px" />
        {duration && (
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
            {duration}
          </Text>
        )}
      </Box>
      <Text fontSize={"16px"}>{title}</Text>
      <Text fontSize="13px" color="gray.500">
        {viewsDate}
      </Text>
    </VStack>
  );
}
