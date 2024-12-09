import { Box, HStack, VStack, Image, Text, Stack } from "@chakra-ui/react";
import Foto1 from "../Assets/Cover1.svg";
import Foto2 from "../Assets/Cover2.svg";
import Foto3 from "../Assets/Cover3.svg";
import Foto4 from "../Assets/Cover4.svg";
import Foto5 from "../Assets/Cover5.svg";
import Foto6 from "../Assets/Cover6.svg";
import Profile from "../Assets/Oval.svg";
import LeftButton from "../Assets/Left.svg";
import RightButton from "../Assets/Right.svg";
import useDollieBlairStore from "../store/DollieBlairStore";

export default function DollieBlairVideos() {
  const videoTitles = [
    "A Brief History Of Creation",
    "Selecting The Right Hotel",
    "Asteroids",
    "Telescopes 101",
    "Medical Care Is Just",
    "Moon Gazing",
    "A Brief History Of Creation",
    "Selecting The Right Hotel",
    "Asteroids",
    "Telescopes 101",
    "Medical Care Is Just",
    "Moon Gazing",
  ];

  const videoDateAndView = [
    "80k views • 3 days ago",
    "123k views • 1 months ago",
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
  ];

  const videoDurations = [
    "10:45",
    "2:34",
    "5:12",
    "8:23",
    "3:50",
    "12:10",
    "10:45",
    "2:34",
    "5:12",
    "8:23",
    "3:50",
    "12:10",
  ];

  const videoImages = [
    Foto1,
    Foto2,
    Foto3,
    Foto4,
    Foto5,
    Foto6,
    Foto1,
    Foto2,
    Foto3,
    Foto4,
    Foto5,
    Foto6,
  ];

  const { currentIndex, next, prev } = useDollieBlairStore();

  return (
    <Box w="full" p={5}>
      <Stack direction="row" w="full" justify="space-between" align="center">
        <HStack mb={4} gap={4}>
          <Image
            src={Profile}
            alt="Dollie Blair"
            borderRadius="full"
            boxSize="50px"
          />
          <Text fontSize="lg" fontWeight="bold">
            Dollie Blair
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
                  <Box position="relative" width="250px" height="150px">
                    <Image
                      src={image}
                      borderRadius="2xl"
                      width="250px"
                      height="150px"
                    />
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
                      {videoDurations[actualIndex]}
                    </Text>
                  </Box>
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
