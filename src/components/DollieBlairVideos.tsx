import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Box, Stack } from "@chakra-ui/react";
import ProfileHeader from "./ProfileHeader";
import VideoCard from "./VideoCard";
import Profile from "../Assets/Oval.svg";
import Foto1 from "../Assets/Cover1.svg";
import Foto2 from "../Assets/Cover2.svg";
import Foto3 from "../Assets/Cover3.svg";
import Foto4 from "../Assets/Cover4.svg";
import Foto5 from "../Assets/Cover5.svg";
import Foto6 from "../Assets/Cover6.svg";
import videoTitles from "./VideoTitles";

export default function DollieBlairVideos() {
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

  return (
    <Box w="full" p={5}>
      <Stack direction="row" w="full" justify="space-between" align="center">
        <ProfileHeader profileImage={Profile} title="Dollie Blair" />
      </Stack>

      <Box w="full" mt={2}>
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
                duration={videoDurations[index]}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
}
