import f1 from "../Assets/f1.svg";
import f2 from "../Assets/f2.svg";
import f3 from "../Assets/f3.svg";
import f4 from "../Assets/f4.svg";
import f5 from "../Assets/f5.svg";
import f6 from "../Assets/f6.svg";
import fprofile from "../Assets/fprofil.svg";
import { Box, HStack, VStack, Image, Text, Stack } from "@chakra-ui/react";
import LeftButton from "../Assets/Left.svg";
import RightButton from "../Assets/Right.svg";
import useFoodDrinkStore from "../store/Food-Drink";

export default function FoodAndDrink() {
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

  const videoImages = [f1, f2, f3, f4, f5, f6, f1, f2, f3, f4, f5, f6];
  const { currentIndex, next, prev } = useFoodDrinkStore();

  return (
    <Box w="full" p={5} height={"280px"} mb={"30px"}>
      <Stack direction="row" w="full" justify="space-between" align="center">
        <HStack mb={4} gap={4}>
          <Image
            src={fprofile}
            alt="Food & Drink"
            borderRadius="full"
            boxSize="50px"
          />
          <Text fontSize="lg" fontWeight="bold">
            Foof & Drink
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
