import Image from "next/image";
import styles from "./Hero.module.css";
import Logo from "../assets/svg/logo.svg";
import Email from "../assets/svg/email.svg";
import GitHub from "../assets/svg/github.svg";
import Linkedin from "../assets/svg/linkedin.svg";

const Hero = () => {
  return (
    <div className="h-full md:h-screen w-full bg-boston-blue-50 flex relative justify-center">
      <div className="container h-[80px] flex justify-between mx-auto absolute items-center z-50">
        <Image src={Logo} height={60} width={60} alt="logo" className="ml-8" />
        <ul className="flex text-white ml-auto  text-lg">
          {/* <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Skills</a>
            </li> */}
          <li>
            <a
              href="mailto:pradeepravi.cse@gmail.com"
              className="bg-white text-boston-blue-950 py-2 px-6 rounded-full font-bold text-sm"
            >
              CONTACT ME
            </a>
          </li>
        </ul>
      </div>
      <div className="w-full md:w-2/4 flex flex-col justify-center p-8 ">
        <div className="flex m-auto flex-col">
          <h2 className="text-2xl font-medium text-gray-600 mb-[54px]">
            Hi, I am
          </h2>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-[24px]">
            Pradeepkumar
          </h1>
          <h3 className="text-lg md:text-xl font-light text-gray-500">
            Associate Solution Designer / Developer
          </h3>
          <div className="flex space-x-4 mt-8">
            <a
              href="mailto:pradeepravi.cse@gmail.com"
              className="text-gray-500 hover:text-gray-900"
            >
              <Image src={Email} height={40} width={40} alt="email" />
            </a>
            <a
              href="https://github.com/pradeepravi-cse"
              target="_blank"
              className="text-gray-500 hover:text-gray-900"
            >
              <Image src={GitHub} height={40} width={40} alt="email" />
            </a>
            <a
              href="https://www.linkedin.com/in/pradeepkumarcse/"
              target="_blank"
              className="text-gray-500 hover:text-gray-900"
            >
              <Image src={Linkedin} height={40} width={40} alt="email" />
            </a>
          </div>
        </div>
      </div>
      <div
        className={`hidden md:block w-3/4 bg-cover bg-right relative bg-boston-blue-950 ${styles.backgroundImage}`}
      >
        <div
          className={`${styles.pradeepImage} w-full h-full flex justify-center bg-boston-blue-950 bg-blend-soft-light`}
        ></div>
      </div>
    </div>
  );
};
export default Hero;
