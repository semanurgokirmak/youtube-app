import { Box } from "@chakra-ui/react";
import VideoCarousel from "../data/VideoCarousel";
import f1 from "../Assets/f1.svg";
import f2 from "../Assets/f2.svg";
import f3 from "../Assets/f3.svg";
import f4 from "../Assets/f4.svg";
import f5 from "../Assets/f5.svg";
import f6 from "../Assets/f6.svg";
import fprofile from "../Assets/fprofil.svg";

export default function FoodAndDrink() {
  const dummyData = {
    ProfileImage: fprofile,
    ProfileTitle: "Food & Drink",
    videoImages: [f1, f2, f3, f4, f5, f6, f1, f2, f3, f4, f5, f6],
    videoTitles: [
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
    ],
    videoDateAndView: [
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
    <Box w="full" p={3} height="280px" mb="30px" mt={"100px"}>
      <VideoCarousel
        ProfileImage={dummyData.ProfileImage}
        ProfileTitle={dummyData.ProfileTitle}
        videoImages={dummyData.videoImages}
        videoTitles={dummyData.videoTitles}
        videoDateAndView={dummyData.videoDateAndView}
        videoDurations={dummyData.videoDurations}
        isBig={false}
      />
    </Box>
  );
}
