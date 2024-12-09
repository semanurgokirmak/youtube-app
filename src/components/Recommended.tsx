import r1 from "../Assets/r1.svg";
import r2 from "../Assets/r2.svg";
import r3 from "../Assets/r3.svg";
import { Box, HStack, VStack, Image, Text, Stack } from "@chakra-ui/react";
import LeftButton from "../Assets/Left.svg";
import RightButton from "../Assets/Right.svg";
import useRecommendedStore from "../store/RecommendedStore";

export default function Recommended() {
  const videoTitles = [
    "Dude You Are Getting A Telescope",
    "Moon Gazing",
    "Moon Gazing",
    "Dude You Are Getting A Telescope",
    "Moon Gazing",
    "Moon Gazing",
    "Dude You Are Getting A Telescope",
    "Moon Gazing",
    "Moon Gazing",
  ];

  const videoDateAndView = [
    "34k views • 5 months ago",
    "54k views • 11 months ago",
    "125k views • 4 months ago",
    "34k views • 5 months ago",
    "54k views • 11 months ago",
    "125k views • 4 months ago",
    "34k views • 5 months ago",
    "54k views • 11 months ago",
    "125k views • 4 months ago",
  ];

  const videoImages = [r1, r2, r3, r1, r2, r3, r1, r2, r3];

  const { currentIndex, next, prev } = useRecommendedStore();

  return (
    <Box w="full" p={5} height={"363px"}>
      <Stack direction="row" w="full" justify="space-between" align="center">
        <HStack mb={4} gap={4}>
          <Text fontSize="lg" fontWeight="bold">
            Recommended
          </Text>
        </HStack>

        <Stack direction="row" gap="10px" mr="50px">
          {" "}
          <button onClick={prev}>
            <Image src={LeftButton} alt="Left Button" boxSize="24px" />
          </button>
          <button onClick={next}>
            <Image src={RightButton} alt="Right Button" boxSize="24px" />
          </button>
        </Stack>
      </Stack>

      <Box w="full">
        <HStack gap={5}>
          {videoImages
            .slice(currentIndex, currentIndex + 3)
            .map((image, index) => (
              <VStack key={index} w="400px" align="start" gap={2}>
                <Image
                  src={image}
                  borderRadius="2xl"
                  width={"540px"}
                  height={"250px"}
                  objectFit={"cover"}
                />
                <Text fontSize={"16px"}>{videoTitles[index]}</Text>{" "}
                <Text fontSize="13px" color="gray.500">
                  {videoDateAndView[index]}
                </Text>
              </VStack>
            ))}
        </HStack>
      </Box>
    </Box>
  );
}
