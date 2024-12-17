import r1 from "../Assets/r1.svg";
import r2 from "../Assets/r2.svg";
import r3 from "../Assets/r3.svg";
import { Box } from "@chakra-ui/react";
import VideoCarousel from "../data/VideoCarousel";
import fprofile from "../Assets/fprofil.svg";

export default function Recommended() {
  const dummyData = {
    ProfileImage: fprofile,
    ProfileTitle: "Recommended",
    videoImages: [r1, r2, r3, r1, r2, r3],
    videoTitles: [
      "Dude You Are Getting A Telescope",
      "Moon Gazing",
      "Moon Gazing",
      "Dude You Are Getting A Telescope",
      "Moon Gazing",
      "Moon Gazing",
      "Dude You Are Getting A Telescope",
      "Moon Gazing",
      "Moon Gazing",
    ],

    videoDateAndView: [
      "34k views • 5 months ago",
      "54k views • 11 months ago",
      "125k views • 4 months ago",
      "34k views • 5 months ago",
      "54k views • 11 months ago",
      "125k views • 4 months ago",
      "34k views • 5 months ago",
      "54k views • 11 months ago",
      "125k views • 4 months ago",
    ],
    videoDurations: [
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
    ],
  };

  return (
    <Box w="full" p={3} height="300px">
      <VideoCarousel
        ProfileImage={dummyData.ProfileImage}
        ProfileTitle={dummyData.ProfileTitle}
        videoImages={dummyData.videoImages}
        videoTitles={dummyData.videoTitles}
        videoDateAndView={dummyData.videoDateAndView}
        videoDurations={dummyData.videoDurations}
        isBig={true}
      />
    </Box>
  );
}
