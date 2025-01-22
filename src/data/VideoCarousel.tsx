import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Box, Stack } from "@chakra-ui/react";
import ProfileHeader from "./ProfileHeader";
import VideoCard from "./VideoCard";
import { Video } from "../interfaces/Video";

type VideoCarouselProps = {
  ProfileTitle: string;
  videos: Array<Video>;
  isBig: boolean;
  onVideoClick: (videoId: string) => void;
};

const VideoCarousel = ({
  ProfileTitle,
  videos,
  isBig,
  onVideoClick,
}: VideoCarouselProps) => {
  return (
    <Box w="full" p={1}>
      <Stack direction="row" w="full" justify="space-between" align="center">
        <ProfileHeader title={ProfileTitle} />
      </Stack>

      <Box w="full" mt={2}>
        <Swiper
          navigation={true}
          modules={[Navigation]}
          spaceBetween={20}
          breakpoints={{
            1024: {
              slidesPerView: isBig ? 3 : 5,
            },

            768: {
              slidesPerView: isBig ? 2 : 3,
            },

            480: {
              slidesPerView: isBig ? 1 : 2,
            },
          }}
        >
          {videos &&
            videos.map((video, index) => (
              <SwiperSlide key={index}>
                <div onClick={() => onVideoClick(video.id)}>
                  <VideoCard
                    imageSrc={video.snippet.thumbnails.standard?.url}
                    title={video.snippet.title}
                    date={video.snippet.publishedAt}
                    duration={video.contentDetails.duration}
                    isBig={isBig}
                  />
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </Box>
    </Box>
  );
};

export default VideoCarousel;
