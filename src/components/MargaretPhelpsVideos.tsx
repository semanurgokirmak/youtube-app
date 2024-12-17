import { Box } from "@chakra-ui/react";
import VideoCarousel from "../data/VideoCarousel"; // VideoCarousel bileşenini import edin
import m1 from "../Assets/userpage/m1.svg";
import m2 from "../Assets/userpage/m2.svg";
import m3 from "../Assets/userpage/m3.svg";
import m4 from "../Assets/userpage/m4.svg";
import m5 from "../Assets/userpage/m5.svg";
import m6 from "../Assets/userpage/m6.svg";
import fprofile from "../Assets/fprofil.svg";

export default function MargaretPhelpsVideos() {
  const dummyData = {
    ProfileImage: fprofile,
    ProfileTitle: "Margaret Phelps Videos",
    videoImages: [m1, m2, m3, m4, m5, m6, m1, m2, m3, m4, m5, m6],
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
    <Box w="full" p={3} height="280px" mb="30px">
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
