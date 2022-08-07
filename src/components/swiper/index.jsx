import { Swiper, SwiperSlide } from "swiper/react";
//implementaçoes futuras
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./style.css";

import html from "../../assets/stacks/html.png";
import css from "../../assets/stacks/css.png";
import js from "../../assets/stacks/js.png";
import react from "../../assets/stacks/react.png";
import git from "../../assets/stacks/git.png";
import styledcomponents from "../../assets/stacks/styled.png";
import chakra from "../../assets/stacks/chakra.png";
import redux from "../../assets/stacks/redux.png";
import context from "../../assets/stacks/react.png";

// import required modules
import { Pagination } from "swiper";
import { ContainerSwiper } from "./style";

const Swipper = () => {
  return (
    <ContainerSwiper>
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        autoplay={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={html} alt="html" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={css} alt="css" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={js} alt="js" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={react} alt="react" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={git} alt="git" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={styledcomponents} alt="styledcomponents" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={chakra} alt="js" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={redux} alt="js" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={context} alt="js" />
        </SwiperSlide>
      </Swiper>
    </ContainerSwiper>
  );
};
export default Swipper;
