import { useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button as MuiButton } from "@mui/material";
import { Button, Button as BsButton } from "react-bootstrap";

const LandingPage = () => {
  const onButtonContainerClick = useCallback(() => {
    // Please sync "Sign Up" to the project
  }, []);

  const onAboutUsClick = useCallback(() => {
    // Please sync "Feature" to the project
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
        className="absolute top-[722px] left-[1347px] w-[250px] h-[77px] cursor-pointer"
        onClick={onButtonContainerClick}
      >
        <img
          className="absolute top-[0px] left-[0px] rounded-[19px] w-[250px] h-[77px]"
          alt=""
          src="/rectangle-1.svg"
        />
        <Button
          className="w-[225px] absolute top-[2px] left-[5px]"
          variant="primary"
        >
          Join Now
        </Button>
      </div>
      <img
        className="absolute top-[231px] left-[153px] w-[602px] h-[849px] object-cover"
        alt=""
        src="/landingpagegirl-1@2x.png"
      />
      <div className="absolute top-[0px] left-[0px] w-[1920px] h-20 text-[24px]">
        <div className="absolute top-[0px] left-[0px] bg-darkslateblue-200 w-[1920px] h-20" />
        <div className="absolute top-[23px] left-[1381px] w-[512px] h-[35px]">
          <MuiButton
            className="absolute top-[0px] left-[0px] cursor-pointer"
            sx={{ width: 97 }}
            variant="contained"
            color="primary"
            onClick={onAboutUsClick}
          >
            About us
          </MuiButton>
          <div className="absolute top-[0px] left-[135px] inline-block w-[133px] h-[35px]">
            Contact
          </div>
          <BsButton
            className="w-[103px] absolute top-[0px] left-[266px]"
            variant="outline-primary"
          >
            Facebook
          </BsButton>
          <BsButton
            className="w-[103px] absolute top-[0px] left-[409px]"
            variant="outline-primary"
            href="https://twitter.com/"
          >
            Twitter
          </BsButton>
        </div>
        <div className="absolute top-[9px] left-[86px] w-[279px] h-[62px] text-[32px]">
          <div className="absolute top-[1px] left-[0px] rounded-[50%] w-[60px] h-[60px]" />
          <div className="absolute top-[0px] left-[68px] flex items-center w-[211px] h-[62px]">
            PodCasting
          </div>
          <div className="absolute top-[13.51px] left-[11.43px] [background:linear-gradient(180deg,_#01eefd,_#4400b2)] w-[40.54px] h-[37.42px]" />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
