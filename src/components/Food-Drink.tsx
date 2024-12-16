import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import f1 from "../Assets/f1.svg";
import f2 from "../Assets/f2.svg";
import f3 from "../Assets/f3.svg";
import f4 from "../Assets/f4.svg";
import f5 from "../Assets/f5.svg";
import f6 from "../Assets/f6.svg";
import fprofile from "../Assets/fprofil.svg";
import { Box, Stack } from "@chakra-ui/react";
import useFoodDrinkStore from "../store/Food-Drink";
import ProfileHeader from "./ProfileHeader";
import VideoCard from "./VideoCard";

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
        <ProfileHeader profileImage={fprofile} title="Food & Drink" />
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
