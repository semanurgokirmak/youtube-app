import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import m1 from "../Assets/userpage/m1.svg";
import m2 from "../Assets/userpage/m2.svg";
import m3 from "../Assets/userpage/m3.svg";
import m4 from "../Assets/userpage/m4.svg";
import m5 from "../Assets/userpage/m5.svg";
import m6 from "../Assets/userpage/m6.svg";
import { Box, Stack } from "@chakra-ui/react";
import ProfileHeader from "./ProfileHeader";
import VideoCard from "./VideoCard";

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

  return (
    <Box w="full" p={5} height={"280px"}>
      <Stack direction="row" w="full" justify="space-between" align="center">
        <ProfileHeader title="Margaret Phelps Videos" />
      </Stack>

      <Box w="full">
        <Swiper
          navigation={true}
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={5}
        >
          {videoImages.map((image, index) => (
            <SwiperSlide key={index}>
              <VideoCard
                image={image}
                title={videoTitles[index]}
                viewsDate={videoDateAndView[index]}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
}
