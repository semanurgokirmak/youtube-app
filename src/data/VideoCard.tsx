import { VStack, Box, Image, Text } from "@chakra-ui/react";

type VideoCardProps = {
  imageSrc: string;
  duration: string;
  title: string;
  date: Date;
  isBig: boolean;
};

export default function VideoCard({
  imageSrc,
  title,
  date,
  duration,
  isBig,
}: VideoCardProps) {
  return isBig ? (
    <VStack w="500px" align="start" gap={1}>
      <Box position="relative" width="400px" height="240px">
        <Image
          src={imageSrc}
          borderRadius="2xl"
          width="400px"
          height="240px"
          objectFit="cover"
        />
      </Box>
      <Text fontSize="16px">{title}</Text>
      <Text fontSize="13px" color="gray.500">
        {new Date(date).toLocaleDateString()}
      </Text>
    </VStack>
  ) : (
    <VStack w="400px" align="start" gap={1}>
      <Box position="relative" width="250px" height="150px">
        <Image src={imageSrc} borderRadius="2xl" width="250px" height="150px" />
      </Box>
      <Text fontSize="16px">{title}</Text>
      <Text fontSize="13px" color="gray.500">
        {new Date(date).toLocaleDateString()}
      </Text>
    </VStack>
  );
}
