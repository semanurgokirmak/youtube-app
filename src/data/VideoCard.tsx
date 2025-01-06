import { VStack, Box, Image, Text } from "@chakra-ui/react";
import useSidebarStore from "../store/SidebarStore";

type VideoCardProps = {
  image: string;
  title: string;
  viewsDate: string;
  duration?: string;
  isBig: boolean;
};

export default function VideoCard({
  image,
  title,
  viewsDate,
  duration,
  isBig,
}: VideoCardProps) {
<<<<<<< Updated upstream
  return isBig ? (
    <VStack w="500px" align="start" gap={1}>
      <Box position="relative" width="400px" height="240px">
=======
  const { isSidebarOpen } = useSidebarStore();

  const bigBoxWidth = isSidebarOpen ? "450px" : "420px";
  const bigImageWidth = bigBoxWidth;
  const smallBoxWidth = isSidebarOpen ? "270px" : "250px";
  const smallImageWidth = smallBoxWidth;

  const maxLength = isBig ? 45 : 25;
  const truncatedTitle = truncateTitle(title, maxLength);

  return isBig ? (
    <VStack w="500px" align="start" gap={1}>
      <Box
        position="relative"
        width={bigBoxWidth}
        height="230px"
        _hover={{
          cursor: "pointer",
        }}
      >
>>>>>>> Stashed changes
        <Image
          src={image}
          borderRadius="2xl"
          width={bigImageWidth}
          height="230px"
          objectFit="cover"
        />
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
      <Text fontSize="16px">{title}</Text>
      <Text fontSize="13px" color="gray.500">
        {viewsDate}
      </Text>
    </VStack>
  ) : (
    <VStack w="400px" align="start" gap={1}>
<<<<<<< Updated upstream
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
=======
      <Box
        position="relative"
        width={smallBoxWidth}
        height="140px"
        _hover={{
          cursor: "pointer",
        }}
      >
        <Image
          src={imageSrc}
          borderRadius="2xl"
          width={smallImageWidth}
          height="140px"
        />
>>>>>>> Stashed changes
      </Box>
      <Text fontSize="16px">{title}</Text>
      <Text fontSize="13px" color="gray.500">
        {viewsDate}
      </Text>
    </VStack>
  );
}
