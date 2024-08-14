import Image from "next/image";
import Breaker from "@/app/assets/svg/seperator.svg";

const PageBreak = () => {
  return (
    <div className="w-full h-[12px] my-10 flex item-center justify-center">
      <Image src={Breaker} height={12} width={170} alt="breaker" />
    </div>
  );
};

export default PageBreak;
