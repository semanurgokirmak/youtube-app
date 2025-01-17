import { VStack, Box, Image, Text } from "@chakra-ui/react";
import useSidebarStore from "../store/SidebarStore";

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
  const maxLength = isBig ? 40 : 25;
  const truncatedTitle = truncateTitle(title, maxLength);
  const { isSidebarOpen } = useSidebarStore();

  return isBig ? (
    <VStack w="500px" align="start" gap={1}>
      <Box
        position="relative"
        width={isSidebarOpen ? "450px" : "420px"}
        height={isSidebarOpen ? "250px" : "230px"}
        _hover={{
          cursor: "pointer",
        }}
      >
        <Image
          src={imageSrc}
          borderRadius="2xl"
          width={isSidebarOpen ? "450px" : "420px"}
          height={isSidebarOpen ? "250px" : "230px"}
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
        width={isSidebarOpen ? "270px" : "250px"}
        height={isSidebarOpen ? "150px" : "140px"}
        _hover={{
          cursor: "pointer",
        }}
      >
        <Image
          src={imageSrc}
          borderRadius="2xl"
          width={isSidebarOpen ? "270px" : "250px"}
          height={isSidebarOpen ? "150px" : "140px"}
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
  );
}
