import { VStack, Box, Image, Text } from "@chakra-ui/react";

type VideoCardProps = {
  imageSrc: string;
  duration: string;
  title: string;
  date: Date;
  isBig: boolean;
};

const truncateTitle = (title: string, maxLength: number) => {
  if (title.length > maxLength) {
    return title.substring(0, maxLength) + "...";
  }
  return title;
};

export default function VideoCard({
  imageSrc,
  title,
  date,
  duration,
  isBig,
}: VideoCardProps) {
  const maxLength = isBig ? 45 : 25;
  const truncatedTitle = truncateTitle(title, maxLength);

  return isBig ? (
    <VStack w="500px" align="start" gap={1}>
      <Box
        position="relative"
        width="400px"
        height="240px"
        _hover={{
          cursor: "pointer",
        }}
      >
        <Image
          src={imageSrc}
          borderRadius="2xl"
          width="400px"
          height="240px"
          objectFit="cover"
        />
      </Box>
      <Text
        fontSize="16px"
        width="350px"
        _hover={{
          overflow: "visible",
          cursor: "pointer",
        }}
        title={title}
      >
        {truncatedTitle}
      </Text>
      <Text fontSize="13px" color="gray.500">
        {new Date(date).toLocaleDateString()}
      </Text>
    </VStack>
  ) : (
    <VStack w="400px" align="start" gap={1}>
      <Box
        position="relative"
        width="250px"
        height="150px"
        _hover={{
          cursor: "pointer",
        }}
      >
        <Image src={imageSrc} borderRadius="2xl" width="250px" height="150px" />
      </Box>
      <Text
        fontSize="16px"
        width="350px"
        _hover={{
          overflow: "visible",
          cursor: "pointer",
        }}
        title={title}
      >
        {truncatedTitle}
      </Text>
      <Text fontSize="13px" color="gray.500">
        {new Date(date).toLocaleDateString()}
      </Text>
    </VStack>
  );
}
