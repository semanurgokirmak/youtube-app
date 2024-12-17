import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Box, Stack } from "@chakra-ui/react";
import ProfileHeader from "./ProfileHeader";
import VideoCard from "./VideoCard";

type VideoCarouselProps = {
  ProfileImage: string;
  ProfileTitle: string;
  videoImages: Array<string>;
  videoTitles: Array<string>;
  videoDateAndView: Array<string>;
  videoDurations: Array<string>;
  isBig: boolean;
};

const VideoCarousel = ({
  ProfileImage,
  ProfileTitle,
  videoDurations,
  videoImages,
  videoTitles,
  videoDateAndView,
  isBig,
}: VideoCarouselProps) => {
  return (
    <Box w="full" p={1}>
      <Stack direction="row" w="full" justify="space-between" align="center">
        <ProfileHeader profileImage={ProfileImage} title={ProfileTitle} />
      </Stack>

      <Box w="full" mt={2}>
        <Swiper
          navigation={true}
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={isBig ? 3 : 5}
        >
          {videoImages.map((image, index) => (
            <SwiperSlide key={index}>
              <VideoCard
                image={image}
                title={videoTitles[index]}
                viewsDate={videoDateAndView[index]}
                duration={videoDurations[index]}
                isBig={isBig}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
};

export default VideoCarousel;
