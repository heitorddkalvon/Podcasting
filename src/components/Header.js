import { useCallback } from "react";

const Header = () => {
  const onAboutUsTextClick = useCallback(() => {
    // Please sync "Feature" to the project
  }, []);

  return (
    <div className="absolute top-[0px] left-[0px] w-[1920px] h-20 text-left text-5xl text-white font-istok-web">
      <div className="absolute top-[0px] left-[0px] bg-darkslateblue-200 w-[1920px] h-20" />
      <div className="absolute top-[23px] left-[1381px] w-[512px] h-[35px]">
        <div
          className="absolute top-[0px] left-[0px] inline-block w-[97px] h-[35px] cursor-pointer"
          onClick={onAboutUsTextClick}
        >
          About us
        </div>
        <div className="absolute top-[0px] left-[135px] inline-block w-[133px] h-[35px]">
          Contact
        </div>
        <div className="absolute top-[0px] left-[266px] inline-block w-[103px] h-[35px]">
          Facebook
        </div>
        <div className="absolute top-[0px] left-[409px] inline-block w-[103px] h-[35px]">
          Twitter
        </div>
      </div>
      <div className="absolute top-[9px] left-[86px] w-[279px] h-[62px] text-13xl">
        <div className="absolute top-[1px] left-[0px] rounded-[50%] w-[60px] h-[60px]" />
        <div className="absolute top-[0px] left-[68px] flex items-center w-[211px] h-[62px]">
          PodCasting
        </div>
        <div className="absolute top-[13.51px] left-[11.43px] [background:linear-gradient(180deg,_#01eefd,_#4400b2)] w-[40.54px] h-[37.42px]" />
      </div>
    </div>
  );
};

export default Header;
