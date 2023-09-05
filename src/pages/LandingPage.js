import { useCallback } from "react";
import Header from "../components/Header";

const LandingPage = () => {
  const onButtonContainerClick = useCallback(() => {
    // Please sync "Sign Up" to the project
  }, []);

  return (
    <div className="relative bg-darkslateblue-100 w-full h-[1080px] overflow-hidden text-left text-[79px] text-white font-istok-web">
      <img
        className="absolute top-[67px] left-[0px] w-[1081.5px] h-[1084px]"
        alt=""
        src="/balls.svg"
      />
      <img
        className="absolute top-[348px] left-[973px] w-[1081.5px] h-[1084px]"
        alt=""
        src="/balls1.svg"
      />
      <img
        className="absolute top-[0px] left-[773px] w-[1081.5px] h-[1084px]"
        alt=""
        src="/balls2.svg"
      />
      <div className="absolute top-[407px] left-[755px] w-[1023px] h-[248px]">
        <div className="absolute top-[0px] left-[0px] inline-block w-[1023px] h-[248px]">
          Think and Cast
        </div>
        <div className="absolute top-[93px] left-[127px] text-[49px] inline-block w-[769px] h-[63px]">
          Find a Podcast just for you
        </div>
      </div>
      <div
        className="absolute top-[722px] left-[1347px] w-[250px] h-[77px] cursor-pointer text-center text-5xl"
        onClick={onButtonContainerClick}
      >
        <img
          className="absolute top-[0px] left-[0px] rounded-[19px] w-[250px] h-[77px]"
          alt=""
          src="/rectangle-1.svg"
        />
        <div className="absolute top-[2px] left-[5px] flex items-center justify-center w-[225px] h-[75px]">
          Join Now
        </div>
      </div>
      <img
        className="absolute top-[231px] left-[153px] w-[602px] h-[849px] object-cover"
        alt=""
        src="/landingpagegirl-1@2x.png"
      />
      <Header />
    </div>
  );
};

export default LandingPage;
