import React from "react";
import { Box, Image, Text, VStack } from "@chakra-ui/react";
import f1 from "../Assets/videopage/1.svg";
import f2 from "../Assets/videopage/2.svg";
import f3 from "../Assets/videopage/3.svg";
import f4 from "../Assets/videopage/4.svg";
import f5 from "../Assets/videopage/5.svg";
import f6 from "../Assets/videopage/6.svg";
import f7 from "../Assets/videopage/7.svg";
import f8 from "../Assets/videopage/8.svg";
import f9 from "../Assets/videopage/9.svg";
import f10 from "../Assets/videopage/10.svg";

export default function RightVideos() {
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
    "80k views ",
    "123k views ",
    "43k views",
    "11k views ",
    "18k views",
    "67k views ",
    "80k views ",
    "123k views",
    "43k views",
    "11k views",
    "18k views",
    "67k views",
  ];

  const videoImages = [f1, f2, f3, f4, f5, f6, f7, f8, f9, f10];

  return (
    <Box w={"350px"} p={5} position="absolute" top="0" right="0">
      <VStack
        direction="column"
        w="full"
        justify="space-between"
        align="center"
      >
        <Text fontSize="lg" fontWeight="bold">
          Next
        </Text>
      </VStack>

      <Box w="full">
        <VStack gap={5}>
          {videoImages.map((image, index) => {
            return (
              <VStack key={index} w="full" align="start" gap={0.8}>
                <Box position="relative" width="300px" height="170px">
                  <Image
                    src={image}
                    borderRadius="2xl"
                    width="300px"
                    height="170px"
                  />
                </Box>

                <Text fontSize={"16px"} fontWeight="bold" textAlign="left">
                  {videoTitles[index]}
                </Text>

                <Text fontSize="13px" color="gray.500" textAlign="left">
                  {videoDateAndView[index]}
                </Text>
              </VStack>
            );
          })}
        </VStack>
      </Box>
    </Box>
  );
}
