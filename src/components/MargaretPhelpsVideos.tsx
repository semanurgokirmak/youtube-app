import m1 from "../Assets/userpage/m1.svg";
import m2 from "../Assets/userpage/m2.svg";
import m3 from "../Assets/userpage/m3.svg";
import m4 from "../Assets/userpage/m4.svg";
import m5 from "../Assets/userpage/m5.svg";
import m6 from "../Assets/userpage/m6.svg";
import useMargetPhelpsStore from "../store/MargaretPhelpsStore";
import { Box, HStack, VStack, Image, Text, Stack } from "@chakra-ui/react";
import LeftButton from "../Assets/Left.svg";
import RightButton from "../Assets/Right.svg";

export default function MargaretPhelpsVideos() {
  const videoTitles = [
    "Astronomy Or Astrology",
    "Advertising Outdoors",
    "Radio Astronomy",
    "A Good Autoresponder",
    "Baby Monitor Technology",
    "Asteroids",
    "Astronomy Or Astrology",
    "Advertising Outdoors",
    "Radio Astronomy",
    "A Good Autoresponder",
    "Baby Monitor Technology",
    "Asteroids",
  ];

  const videoDateAndView = [
    "80k views • 3 days ago",
    "123k views • 1 month ago",
    "43k views • 12 days ago",
    "11k views • 6 months ago",
    "18k views • 2 days ago",
    "67k views • 4 months ago",
    "80k views • 3 days ago",
    "123k views • 1 months ago",
    "43k views • 12 days ago",
    "11k views • 6 months ago",
    "18k views • 2 days ago",
    "67k views • 4 months ago",
    "67k views • 4 months ago",
  ];

  const videoImages = [m1, m2, m3, m4, m5, m6, m1, m2, m3, m4, m5, m6];
  const { currentIndex, next, prev } = useMargetPhelpsStore();

  return (
    <Box w="full" p={5} height={"280px"}>
      <Stack direction="row" w="full" justify="space-between" align="center">
        <HStack mb={4} gap={4}>
          <Text fontSize="lg" fontWeight="bold">
            Margaret Phelps Videos
          </Text>
        </HStack>

        <Stack direction="row" gap="10px" mr="50px">
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
            .slice(currentIndex, currentIndex + 5)
            .map((image, index) => {
              const actualIndex = currentIndex + index;
              return (
                <VStack key={index} w="400px" align="start" gap={2}>
                  <Image
                    src={image}
                    borderRadius="2xl"
                    width={"250px"}
                    height={"150px"}
                    objectFit="contain"
                  />
                  <Text fontSize={"16px"}>{videoTitles[actualIndex]}</Text>
                  <Text fontSize="13px" color="gray.500">
                    {videoDateAndView[actualIndex]}
                  </Text>
                </VStack>
              );
            })}
        </HStack>
      </Box>
    </Box>
  );
}
