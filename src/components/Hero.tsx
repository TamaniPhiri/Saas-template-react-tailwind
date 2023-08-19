import Button from "./Global/Button";
import Paragraph from "./Global/Paragraph";

const Hero = () => {
  return (
    <div className="flex items-center flex-col min-h-screen relative justify-center w-full px-4 md:px-12">
      <img
        src="https://assets.website-files.com/62bea764d94f5f7e03ba6535/62beab4349f925338e0e00c0_Hero%20left%20gradient.png"
        alt="bgRight"
        loading="lazy"
        className=" absolute left-0 z-0"
      />
      <img
        src="https://assets.website-files.com/62bea764d94f5f7e03ba6535/62beab431cc502479aec7741_Hero%20right%20gradient.png"
        alt="bgRight"
        loading="lazy"
        className=" absolute right-0 z-0"
      />
      <div className="z-20">
        <div className="w-full flex my-5 items-center justify-center">
          <div className="bg-[#1a1a1a] gap-2 rounded-full py-2 md:px-6 px-4 w-fit flex md:flex-row flex-col items-center">
            <img
              src="https://assets.website-files.com/62bea764d94f5f7e03ba6535/62beab4396821230564585f1_Small%20line.svg"
              alt="greenLine"
              loading="lazy"
            />
            <div className="flex gap-2 text-sm md:text-base">
              <span>Our public beta is live NOW 🎉</span>
              <span className="text-[#b6ff9c] font-semibold">Learn more</span>
            </div>
          </div>
        </div>
        <h1 className="text-[54px] leading-[1] mb-4 md:text-[64px] w-full lg:text-[76px] text-center font-bold">
          Build your very own SaaS
          <br className="lg:block hidden" /> website with{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-lime-400 via-white to-purple-500">
            Dalma
          </span>
        </h1>
        <Paragraph
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          center
        />
      </div>
      <div className="flex justify-center z-10 my-8 items-center gap-3">
        <Button content="Get started" secondary />
        <Button content="Sign up" primary />
      </div>
    </div>
  );
};

export default Hero;
