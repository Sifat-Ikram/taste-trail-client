import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import img1 from "../../../../assets/home/01.jpg"
import img2 from "../../../../assets/home/02.jpg"
import img3 from "../../../../assets/home/03.png"
import img4 from "../../../../assets/home/04.jpg"
import img5 from "../../../../assets/home/05.png"
import img6 from "../../../../assets/home/06.png"

const Banner = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src={img1} alt="" className='h-[500px] w-full' /></SwiperSlide>
        <SwiperSlide><img src={img2} alt="" className='h-[500px] w-full' /></SwiperSlide>
        <SwiperSlide><img src={img3} alt="" className='h-[500px] w-full' /></SwiperSlide>
        <SwiperSlide><img src={img4} alt="" className='h-[500px] w-full' /></SwiperSlide>
        <SwiperSlide><img src={img5} alt="" className='h-[500px] w-full' /></SwiperSlide>
        <SwiperSlide><img src={img6} alt="" className='h-[500px] w-full' /></SwiperSlide>
      </Swiper>
    </>
  );
}
export default Banner;